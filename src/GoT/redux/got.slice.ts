import { createSlice } from "@reduxjs/toolkit";
import { AllCharacters } from "../types/allCharacters";

export type CharacterState = {
  characters: AllCharacters[];
};
const initialState: CharacterState = {
  characters: [],
};

const characterslice = createSlice({
  name: "character",
  initialState,
  reducers: {
    create: (state, { payload }) => ({
      ...state,
      character: [...state.characters, payload],
    }),
    load: (state, { payload }) => ({
      ...state,
      character: [payload],
    }),
  },
});
export default characterslice.reducer;
export const { create, load } = characterslice.actions;
