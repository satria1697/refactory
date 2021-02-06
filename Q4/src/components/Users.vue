<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div class="wrapper" v-if="!loading">
      <div v-for="user in users" :key="user.name" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div class="body-email">
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div class="body-phone">
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div class="body-website">
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { SET_DATA } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
    ...mapState(['lists'])
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
        this.loading = false
      })
      .catch((error) => {
        console.log(error);
        this.loading = false
      });
  },
  methods: {
    setData(data) {
      this.$store.dispatch(SET_DATA, data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
.wrapper {
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-wrap: wrap;
  max-width: 100%;
}
.card {
  position: relative;
  width: 45%;
  padding: 20px 15px;
  background-color: white;
  margin: 5px 5px 10px 5px;
  border-radius: 7px;
}
.card .body-card .title {
  font-size: 0.8rem;
  margin: 5px;
  color: rgba(0,0,0,0.2);
}
.name {
  font-size: 1.1rem;
  margin: 5px;
  font-weight: bold;
}
.email {
  font-size: 1.1rem;
  margin: 5px;
}
.phone {
  font-size: 1.1rem;
  margin: 5px;
}
.website {
  font-size: 1.1rem;
  margin: 5px;
  color: lightgreen;
}

.wrapper-card {
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-wrap: wrap;
  max-width: 100%;
}
.wrapper-card .body-email {
  width: 40%;
}
.wrapper-card .body-phone {
  width: 40%;
}
.wrapper-card .body-website {
  width: 20%;
}
</style>
