<template>
  <div class="allchar">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex v-for="char in allChar" v-bind:key="char.id">
          <v-card>
            <v-img v-bind:src="char.img"></v-img>
            <v-card-title>
              <router-link
                class="text-decoration-none"
                :to="{ name: 'OneChar', params: { id: char.id } }"
              >
                {{ char.name }}
              </router-link>
            </v-card-title> 
            <v-card-subtitle>From {{char.show}}</v-card-subtitle>
            <v-card-actions>
              <v-btn icon>
                <v-icon class="black--text">mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Character from "@/models/char-model";
import Vue from "vue";
import CharacterService from "../services/char-service";
import { CharacterList } from "../models/character-list";

export default Vue.extend({
  name: "AllChar",
  computed: {
    allChar(): Character[] {
      return CharacterList;
    },
  },
  methods: {
    getAll() {
      const result = CharacterService.getAllChars();
      console.log(result);
    },
  },
});
</script>
