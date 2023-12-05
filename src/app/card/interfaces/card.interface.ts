
export interface CardResult {
  ok:    boolean;
  msg:   string;
  cards: Card[];
}

export interface Card {
  card_id?:     string;
  tarjeta: number;
  fecha: string;
  nombre:   string;
  cvv:         number;
  createdAt?:   Date;
  updatedAt?:   Date;
}
