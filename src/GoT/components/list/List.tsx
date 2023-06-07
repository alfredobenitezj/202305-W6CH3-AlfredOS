import { Card, PropCharacters } from "../card/card";

export function CreateList({ item }: PropCharacters) {
  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        <Card item={item}></Card>
      </ul>
    </div>
  );
}
