import { Card } from "../card/card";

export function CreateList() {
  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        <Card></Card>
      </ul>
    </div>
  );
}
