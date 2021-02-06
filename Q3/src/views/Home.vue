<template>
  <b-container>
    <b-row>
      <b-col><h2>Aplikasi 3</h2></b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <view-list
          title="Barang yang ada diruangan meeting"
          :data="findMeeting"
          label="name"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="Barang elektronik"
          :data="findElectronic"
          label="name"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="Furniture"
          :data="findFurniture"
          label="name"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="Barang yang dibeli pada tanggal 16 Januari 2020"
          :data="findPurcashed"
          label="name"
        ></view-list>
      </b-col>
      <b-col md="4">
        <view-list
          title="Barang yang berwarna coklat"
          :data="findColor"
          label="name"
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
          inventory_id: 9382,
          name: "Brown Chair",
          type: "furniture",
          tags: ["chair", "furniture", "brown"],
          purchased_at: 1579190471,
          placement: {
            room_id: 3,
            name: "Meeting Room"
          }
        },
        {
          inventory_id: 9380,
          name: "Big Desk",
          type: "furniture",
          tags: ["desk", "furniture", "brown"],
          purchased_at: 1579190642,
          placement: {
            room_id: 3,
            name: "Meeting Room"
          }
        },
        {
          inventory_id: 2932,
          name: "LG Monitor 50 inch",
          type: "electronic",
          tags: ["monitor"],
          purchased_at: 1579017842,
          placement: {
            room_id: 3,
            name: "Lavender"
          }
        },
        {
          inventory_id: 232,
          name: "Sharp Pendingin Ruangan 2PK",
          type: "electronic",
          tags: ["ac"],
          purchased_at: 1578931442,
          placement: {
            room_id: 5,
            name: "Dhanapala"
          }
        },
        {
          inventory_id: 9382,
          name: "Alat Makan",
          type: "tableware",
          tags: ["spoon", "fork", "tableware"],
          purchased_at: 1578672242,
          placement: {
            room_id: 10,
            name: "Rajawali"
          }
        }
      ]
    };
  },
  computed: {
    findMeeting() {
      return this.dataJson.filter(x => x.placement.name === "Meeting Room");
    },
    findElectronic() {
      return this.dataJson.filter(x => x.type === "electronic");
    },
    findFurniture() {
      return this.dataJson.filter(x => x.type === "furniture");
    },
    findPurcashed() {
      return this.dataJson.filter(
        x => dayjs.unix(x.purchased_at).format("YYYY MM DD") === "2020 01 16"
      );
    },
    findColor() {
      let data = [];
      this.dataJson.map(function(x) {
        x.tags.forEach(y => {
          if (y === "brown") {
            data.push(x);
          }
        });
      });
      return data;
    }
  }
};
</script>

<style scoped lang="scss"></style>
