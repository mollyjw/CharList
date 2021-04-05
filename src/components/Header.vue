<template>
  <v-app-bar color="accent">
      <router-link style="text-decoration: none" to="/">Home</router-link> |
      <router-link style="text-decoration: none" to="/about">About</router-link> |
      <router-link style="text-decoration: none" to="/characters/all">View All</router-link>
      <v-app-bar-title style="text-decoration: none; font: xxx-large; margin-left: 38%">
        <router-link style="text-decoration: none" to="/">Character Queue</router-link>
      </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  
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
