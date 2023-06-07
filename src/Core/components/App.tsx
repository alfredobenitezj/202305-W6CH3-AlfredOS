import { PropCharacters } from "../../GoT/components/card/card";
import { CreateList } from "../../GoT/components/list/List";

export function App({ item }: PropCharacters) {
  return (
    <div id="root">
      <CreateList item={item}></CreateList>
    </div>
  );
}

export default App;
