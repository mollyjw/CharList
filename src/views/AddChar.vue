<template>
<div class="add">

<h1>hello from add</h1>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
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

    <v-text-field
      v-model="newChar.traits"
      label="Trait"
    ></v-text-field>

    <v-text-field
      v-model="newChar.img"
      label="Image URL"
    ></v-text-field>

  

    <v-btn
      :disabled="!valid"
      @click="addChar(newChar)"
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
            // character: {
            //     id: Math.floor(Math.random() * 100),
            //     name: "",
            //     show: "",
            //     traits: "",
            //     isFave: false,
            //     img: ""
            // },
            newChar: new Character(Math.floor(Math.random() * (201 -9) + 10), '', '', '', false, ''),
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
            this.newChar.id = this.randId,
            this.newChar.name = '',
            this.newChar.show = '',
            this.newChar.traits = '',
            this.newChar.isFave = false,
            this.newChar.img = ''
        },
        addChar(character: Character) {
            CharacterService.addChar(new Character(this.newChar.id, this.newChar.name, this.newChar.show, this.newChar.traits, this.newChar.isFave, this.newChar.img));
            this.reset();
        },

    }
})
</script>