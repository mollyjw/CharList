<template>
<div class="add">

<h1>hello from add</h1>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="character.name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="character.show"
      :rules="showRules"
      label="TV Show"
      required
    ></v-text-field>

    <v-text-field
      v-model="character.traits"
      label="Trait"
    ></v-text-field>

    <v-text-field
      v-model="character.img"
      label="Image URL"
    ></v-text-field>

  

    <v-btn
      :disabled="!valid"
      @click="addChar(character)"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>


  </v-form>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Character from "@/models/char-model";
import CharacterService from "../services/char-service";

export default Vue.extend({
    name: 'AddChar',
    data: function() {
        return {
            character: {
                id: Math.floor(Math.random() * 100),
                name: "",
                show: "",
                traits: "",
                isFave: false,
                img: ""
            },
            valid: true,
            nameRules: [
                v => !!v || "Name is required",
                v => (v && v.length >= 2) || 'Name must be at least 2 characters'
            ],
            showRules: [
                v => !!v || "Show is required",
                v => (v && v.length >= 2) || 'Show must be at least 2 characters'
            ],
            
        }
    },

    computed: {
        randId() {
            return Math.floor(Math.random() * 100)
        }
    },

    methods: {
        reset () {
            this.character.id = this.randId,
            this.character.name = '',
            this.character.show = '',
            this.character.traits = '',
            this.character.isFave = false,
            this.character.img = ''
        },
        //currently resets before sending data, need to look up how I fixed before
        addChar(character: Character) {
            CharacterService.addChar(character);
            this.reset();
        },

    }
})
</script>