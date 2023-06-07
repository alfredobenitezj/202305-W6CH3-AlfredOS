import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Core/store/store";
import { ApiRepository } from "../../Core/services/api.repository";
import { Character } from "../models/character";
import { useCallback, useMemo } from "react";
import { createCharacterAsync, loadCharactersAsync } from "../redux/thunk";

export function useCharacters() {
  const { characters } = useSelector((state: RootState) => state.characters);
  const dispatch: AppDispatch = useDispatch();
  const characterURL = "http://localhost:3000/characters";
  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterURL),
    []
  );

  const handleLoad = useCallback(() => {
    dispatch(loadCharactersAsync(repo));
  }, [repo, dispatch]);

  const handleCreate = async (character: Character) => {
    dispatch(
      createCharacterAsync({
        repo,
        character,
      })
    );
  };
  return {
    handleCreate,
    handleLoad,
    characters,
  };
}
