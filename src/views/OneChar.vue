<template>
  <div class="onechar">
    <h1>single character</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CharacterService from "../services/char-service"

export default Vue.extend({
  name: 'OneChar',
  
  mounted() {
      var id: number = this.$route.params.id;
      console.log(id);
      this.getCharInfo(id);
      console.log(this.getCharInfo(id))
  },
  
  methods: {
      //currently will not work for any added characters because it works based off of array id (first add to array is 5th el with index of 4)
      getCharInfo(id: number) {
          return CharacterService.getOneChar(id)
      }
  }
});
</script>
