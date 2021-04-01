import Character from "../models/char-model";
import  { CharacterList }  from "../models/character-list";

export default {
    getAllChars() {
        return CharacterList;
    },

    addChar(Character: Character){
        CharacterList.push(Character);
    },

    //currently will not work for any added characters because it works based off of array id (first add to array is 5th el with index of 4)
    getOneChar(id: number){
        return CharacterList[id - 1];
    }
}