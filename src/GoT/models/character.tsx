export interface Character {
  id: string | number;
  tvShow: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  speech: string;
}

export interface Kings extends Character {
  regnarYears: number;
}

export interface Adviser extends Character {
  advisedCharacter: string;
}

export interface Fighter extends Character {
  weaponUsed: string;
  skill: number;
}

export interface Squires extends Character {
  servedCharacter: string;
  ballSuckerLevel: number;
}
