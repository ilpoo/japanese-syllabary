export default interface Options {
  [key: string]: boolean;
  hiragana: boolean;
  romanji: boolean;
  katakana: boolean;
  pronunciation: boolean;
  diacritics: boolean;
  digraphs: boolean;
  strokes: boolean;
  exceptions: boolean;
  similar: boolean;
  frequency: boolean;
  transcription: boolean;
  handwritten: boolean;
}
