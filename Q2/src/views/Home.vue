<template>
  <b-container>
    <b-row>
      <b-col><h2>Aplikasi 2</h2></b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <view-list
          title="User yang tidak memiliki nomor telefon"
          :data="zeroPhone"
          label="username"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="User yang memiliki artikel"
          :data="haveArticle"
          label="username"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="User yang memiliki kata 'annis' dalam nama"
          :data="annisFind"
          label="username"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="User yang memiliki artikel pada tahun 2020"
          :data="findArticle"
          label="username"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="User yang memiliki lahir pada tahun 1986"
          :data="findYear"
          label="username"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="Artikel yang memiliki kata 'tips' pada judulnya"
          :data="findTitleArticle"
          label="title"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="Artikel yang dipublish sebelum agustus 2019"
          :data="findArticleYearBefore"
          label="title"
        ></view-list>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import dayjs from "dayjs";
import ViewList from "../components/viewList";
export default {
  components: { ViewList },
  data() {
    return {
      dataJson: [
        {
          id: 323,
          username: "rinood30",
          profile: {
            full_name: "Shabrina Fauzan",
            birthday: "1988-10-30",
            phones: ["08133473821", "082539163912"]
          },
          articles: [
            {
              id: 3,
              title: "Tips Berbagi Makanan",
              published_at: "2019-01-03T16:00:00"
            },
            {
              id: 7,
              title: "Cara Membakar Ikan",
              published_at: "2019-01-07T14:00:00"
            }
          ]
        },
        {
          id: 201,
          username: "norisa",
          profile: {
            full_name: "Noor Annisa",
            birthday: "1986-08-14",
            phones: []
          },
          articles: [
            {
              id: 82,
              title: "Cara Membuat Kue Kering",
              published_at: "2019-10-08T11:00:00"
            },
            {
              id: 91,
              title: "Cara Membuat Brownies",
              published_at: "2019-11-11T13:00:00"
            },
            {
              id: 31,
              title: "Cara Membuat Brownies",
              published_at: "2019-11-11T13:00:00"
            }
          ]
        },
        {
          id: 42,
          username: "karina",
          profile: {
            full_name: "Karina Triandini",
            birthday: "1986-04-14",
            phones: ["06133929341"]
          },
          articles: []
        },
        {
          id: 201,
          username: "icha",
          profile: {
            full_name: "Annisa Rachmawaty",
            birthday: "1987-12-30",
            phones: []
          },
          articles: [
            {
              id: 39,
              title: "Tips Berbelanja Bulan Tua",
              published_at: "2019-04-06T07:00:00"
            },
            {
              id: 43,
              title: "Cara Memilih Permainan di Steam",
              published_at: "2019-06-11T05:00:00"
            },
            {
              id: 58,
              title: "Cara Membuat Brownies",
              published_at: "2019-09-12T04:00:00"
            }
          ]
        }
      ]
    };
  },
  computed: {
    zeroPhone() {
      return this.dataJson.filter(x => x.profile.phones.length === 0);
    },
    haveArticle() {
      return this.dataJson.filter(x => x.articles.length !== 0);
    },
    annisFind() {
      return this.dataJson.filter(x =>
        x.profile.full_name.toLowerCase().search("annis")
      );
    },
    findArticle() {
      return this.dataJson.filter(function(x) {
        x.articles.filter(y => dayjs(y.published_at).format("YYYY") === "2020");
      });
    },
    findYear() {
      return this.dataJson.filter(
        x => dayjs(x.profile.birthday).format("YYYY") === "1986"
      );
    },
    findTitleArticle() {
      let data = [];
      this.dataJson.map(function(x) {
        x.articles.forEach(function(y) {
          if (y.title.toLowerCase().search("tips") >= 0) {
            data.push(y);
          }
        });
      });
      return data;
    },
    findArticleYearBefore() {
      const IsSameOrBefore = require("dayjs/plugin/isSameOrBefore");
      dayjs.extend(IsSameOrBefore);
      let data = [];
      this.dataJson.map(function(x) {
        x.articles.forEach(function(y) {
          if (dayjs(y.published_at).isSameOrBefore("2019-08")) {
            data.push(y);
          }
        });
      });
      return data;
    }
  }
};
</script>

<style scoped lang="scss"></style>
