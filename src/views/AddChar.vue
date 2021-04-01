<template>
  <div class="add">
    <h1>hello from add</h1>
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
      character: {
        id: "",
        name: "",
        show: "",
        traits: [],
        isFave: false,
        img: "",
      },
    };
  },

  methods: {
    addChar(character: Character) {
      CharacterService.addChar(character);
    },
  },
});
</script>