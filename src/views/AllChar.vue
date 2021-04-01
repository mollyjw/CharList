<template>
  <div class="allchar">
    <v-card>
        <v-card-title>Title</v-card-title>
    </v-card>
    <p>{{allChar}}</p>
    <button v-on:click="getAll()">hey</button>
  </div>
</template>

<script lang="ts">
import Character from '@/models/char-model';
import Vue from 'vue';
import CharacterService from "../services/char-service";
import { CharacterList } from "../models/character-list";

export default Vue.extend({
  name: 'Home',
  computed: {
      allChar(): Character[] {
          return CharacterList
      }
  },
  methods: {
      getAll() {
         const result = CharacterService.getAllChars();
        console.log(result)
          
      },
    //   addChar(id: number, name: string, show: string, traits: any, isFave: boolean, img: string) {
    //       Character = 
    //       CharacterService.addChar(id,name, show, traits, isFave, img)
    //   }
  }
 
 
});
</script>
