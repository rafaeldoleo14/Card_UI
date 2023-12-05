import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, CardResult } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private editCard!: Card;

  constructor(private http: HttpClient) { }

  get getEditingCard(): Card{
    return this.editCard
  }

  set catchEditingCard(card: Card){
    this.editCard = card
  }

  getAllCards(): Observable<CardResult>{
    return this.http.get<CardResult>('http://localhost:3000/api/card');
  }

  addNewCard(newCard: Card): Observable<CardResult>{
    return this.http.post<CardResult>('http://localhost:3000/api/card/add', newCard);
  }

  updateCard(id: string, cardUpdate: Card){
    return this.http.put<CardResult>(`http://localhost:3000/api/card/${id}`, cardUpdate);
  }

  deleteCard(id: string){
    return this.http.delete<CardResult>(`http://localhost:3000/api/card/${id}`);
  }

}
