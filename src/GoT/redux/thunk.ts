import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";
import { ApiRepository } from "../../Core/services/api.repository";
import { Character } from "../models/character";

export const loadCharactersAsync = createAsyncThunk(
  actionTypes.load,
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);
