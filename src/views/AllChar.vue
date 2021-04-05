<template>
  <div>
    <v-sheet color="secondary" height="100%" width="100%">
      <div style="text-align: center">
      <v-btn style="margin-top: 2%">
        <router-link style="text-decoration: none" to="/add">Add a Character</router-link>
      </v-btn>
      </div>
      <v-container fluid grid-list-lg style="margin: 1% 0%">
        <v-layout row wrap>
          <v-flex
            v-for="char in allChar"
            v-bind:key="char.id"
            d-flex
            xs12
            sm6
            md6
          >
            <v-card style="margin: 2%" width="55em">
              <v-img v-bind:src="char.img" style="width: 100%"></v-img>
              <v-card-title>
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'OneChar', params: { id: char.id } }"
                >
                  {{ char.name }}
                </router-link>
              </v-card-title>
              <v-card-subtitle
                >From <i>{{ char.show }}</i></v-card-subtitle
              >
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
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
