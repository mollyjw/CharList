import Character from "../models/char-model";
import  { CharacterList }  from "../models/character-list";

export default {
    getAllChars() {
        return CharacterList
    },

    addChar(Character: Character){
        CharacterList.push(Character)
    },
}