<template>
  <v-app >
  <div class="app">
    <div class="nav">
      <Header />
    </div>
    <router-view />
  </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Router from "./router/index"

export default Vue.extend({
  name: "App",
  router: Router,

  components: {
    Header,
  },

  
});
</script>
