import supabase from "./config";
class WordHandlerClass {
  constructor() {}

  async fetchWords() {
    type dataType = [{ word: string, value: number }];
    let { data, error } = await supabase.from("words").select("word,value");
    if (error) {
      throw new Error(error.message);
    }
     
    return data as dataType;
  }
}

const WordHandler = new WordHandlerClass();
export default WordHandler;
