<template>
  <div class="onechar" color="secondary">
    <v-sheet color="secondary" height="100%" width="100%">
      <v-row justify="center" style="padding: 3%" color="background">
        <v-card style="text-align: center">
          <v-card-subtitle
            style="font-size: xxx-large; color: black; margin-top: 1%"
            >{{ char.name }}</v-card-subtitle
          >
          <v-card-subtitle style="font-size: x-large; color: black"
            >From <i>{{ char.show }}</i></v-card-subtitle
          >

          <v-img v-bind:src="char.img" style="width: 100%"></v-img>
          <v-card-subtitle
            style="font-size: x-large; color: black; text-align: center"
          >
            {{ char.name }} is {{ char.traits }}, and more!</v-card-subtitle
          >

          <v-btn
            style="margin-bottom: 2%"
            color="primary"
            v-on:click="openDialog"
            >Delete</v-btn
          >
        </v-card>

        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">
              Delete this character?
            </v-card-title>
            <v-card-text></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                No! Keep them!
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                v-on:click="deleteChar(char.id)"
              >
                Yes, please.
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import Vue from "vue";
import CharacterService from "../services/char-service";

export default Vue.extend({
  name: "OneChar",
  data: function () {
    return {
      char: {},
      dialog: false,
    };
  },

  mounted() {
    var id: number = this.$route.params.id;
    console.log(id);
    this.getCharInfo(id);
  },

  methods: {
    //sets this.char equal to the first object in the array of returned objects matching the id, setting this.char to the char with the passed in id
    getCharInfo(id: number) {
      this.char = CharacterService.getOneChar(id);
      console.log(this.char);
    },

    openDialog() {
      this.dialog = true;
    },

    deleteChar(id: number) {
      CharacterService.deleteOneChar(id);
      this.dialog = false;
      router.go(-1);
    },
  },
});
</script>
