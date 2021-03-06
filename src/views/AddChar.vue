<template>
  <div class="add">
    <v-sheet color="secondary" height="100em" width="100%">
      <h1 style="text-align: center; padding-top: 1%">Add a Character</h1>
      <v-sheet color="whitesmoke" style="margin: 3%">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          style="margin: 2%; padding: 2%"
        >
          <v-text-field
            v-model="newChar.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="newChar.show"
            :rules="showRules"
            label="TV Show"
            required
          ></v-text-field>

          <v-text-field v-model="newChar.traits" label="Traits"></v-text-field>

          <v-text-field v-model="newChar.img" label="Image URL"></v-text-field>
          <v-row style="text-align: center">
            <v-btn :disabled="!valid" @click="addChar(newChar), snackbar = true" color="primary">
              Add
            </v-btn>
            <v-snackbar v-model="snackbar" :timeout="timeout">
              Character Added!

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="primary"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
            <v-btn color="error" class="mr-4" @click="reset"> Clear </v-btn>
          </v-row>
        </v-form>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Character from "@/models/char-model";
import CharacterService from "../services/char-service";

export default Vue.extend({
  name: "AddChar",
  data: function () {
    return {
      newChar: new Character(
        Math.floor(Math.random() * (201 - 9) + 10),
        "",
        "",
        "",
        false,
        ""
      ),
      valid: true,
      snackbar: false,
      timeout: 2000,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be at least 2 characters",
      ],
      showRules: [
        (v) => !!v || "Show is required",
        (v) => (v && v.length >= 2) || "Show must be at least 2 characters",
      ],
    };
  },

  computed: {
    randId() {
      return Math.floor(Math.random() * 100);
    },
  },

  methods: {
    reset() {
      (this.newChar.id = this.randId),
        (this.newChar.name = ""),
        (this.newChar.show = ""),
        (this.newChar.traits = ""),
        (this.newChar.isFave = false),
        (this.newChar.img = "");
    },
    addChar(character: Character) {
      CharacterService.addChar(
        new Character(
          this.newChar.id,
          this.newChar.name,
          this.newChar.show,
          this.newChar.traits,
          this.newChar.isFave,
          this.newChar.img
        )
      );
      this.reset();
    },
  },
});
</script>