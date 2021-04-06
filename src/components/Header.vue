<template>
  <v-toolbar color="accent">
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          color="primary"
          v-bind="attrs"
          v-on="on"
        ></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <router-link style="text-decoration: none" to="/">Home</router-link>
        </v-list-item>

        <v-list-item>
          <router-link style="text-decoration: none" to="/about"
            >About</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link style="text-decoration: none" to="/characters/all"
            >View All</router-link
          >
        </v-list-item>

        <v-list-item>
          <router-link style="text-decoration: none" to="/add">Add</router-link>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer />
    <router-link style="text-decoration: none; font: xxx-large" to="/">
      <v-toolbar-title style="color: primary">
        Character Queue
      </v-toolbar-title>
    </router-link>
    <v-spacer />
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <router-link style="text-decoration: none" to="/characters/all">
          <v-icon large color="primary" v-bind="attrs" v-on="on">
            mdi-view-dashboard
          </v-icon>
        </router-link>
      </template>
      <span>View All</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <router-link style="text-decoration: none" to="/add">
          <v-icon large color="primary" v-bind="attrs" v-on="on">
            mdi-plus
          </v-icon>
        </router-link>
      </template>
      <span>Add</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
