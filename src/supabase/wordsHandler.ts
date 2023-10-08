import supabase from "./config";
import { wordType } from "../constants/types";

class WordHandlerClass {
  constructor() {}

  async fetchWords() {
    
    let { data, error } = await supabase.from("words").select("word,value");
    if (error) {
      throw new Error(error.message);
    }
     
    return data as wordType[];
  }
}

const WordHandler = new WordHandlerClass();
export default WordHandler;
