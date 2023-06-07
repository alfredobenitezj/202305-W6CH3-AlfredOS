import { AllCharacters } from "../types/allCharacters";

export type CharacterState = {
  character: AllCharacters[];
};
const initialState: CharacterState = {
  character: [],
};
