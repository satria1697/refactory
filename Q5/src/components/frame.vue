<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-brand>Logo</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-avatar class="mr-2" :src="niziu"></b-avatar>
        <b-nav-item-dropdown class="mr-2" right
          ><template #button-content>
            Samsul Arifin
          </template>
          <b-dropdown-item>
            Profil
          </b-dropdown-item></b-nav-item-dropdown
        >
        <b-nav-item-dropdown class="mr-2" right
          ><template #button-content> <b-icon-gear></b-icon-gear> </template>
          <b-dropdown-item>
            Setting
          </b-dropdown-item>
          <b-dropdown-item>
            Logout
          </b-dropdown-item></b-nav-item-dropdown
        >
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import niziu from "../assets/images/niziu.jpg";
export default {
  data() {
    return {
      niziu: niziu
    };
  }
};
</script>

<style scoped lang="scss"></style>
