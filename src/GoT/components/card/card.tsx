import { AllCharacters } from "../../types/allCharacters";

export type PropCharacters = {
  item: AllCharacters;
};

export function Card({ item }: PropCharacters) {
  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`img/${item.name.toLowerCase()}.jpg`}
          alt={`${item.name} y ${item.family}`}
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} y {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age} años</li>
              <li>
                Estado:{item.isAlive}
                <i className="fas fa-thumbs-down"></i>
                <i className="fas fa-thumbs-up"></i>
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              <li>Años de reinado:X</li>
              <li>Arma: XXX</li>
              <li>Destreza: X</li>
              <li>Peloteo: X</li>
              <li>Asesora a: X</li>
              <li>Sirve a: X</li>
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji"></i>
      </div>
    </li>
  );
}
