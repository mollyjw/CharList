import Character from "../models/char-model";
import  { CharacterList }  from "../models/character-list";

export default {
    getAllChars() {
        return CharacterList;
    },

    addChar(Character: Character){
        CharacterList.push(Character);
    },

    //returns a filtered list of objects where the object's id matches the passed in id 
    getOneChar(id: number){
        const result = CharacterList.filter(obj => {
            return obj.id === id
        })[0]
        return result;
    },

    deleteOneChar(id: number){
        CharacterList.splice(CharacterList.findIndex(char => char.id === id), 1)
        // const result = CharacterList.filter(obj => {
        //     return obj.id === id
        // })[0];
        // return result; 
    }
}