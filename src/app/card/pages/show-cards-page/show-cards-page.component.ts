import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { Card } from '../../interfaces/card.interface';
import { switchMap, tap } from 'rxjs';
import { showConfirmationAlert } from '../../utils/showAlert.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cards-page',
  templateUrl: './show-cards-page.component.html',
  styleUrls: ['./show-cards-page.component.css', './show-cards-page-responsive.component.css']
})
export class ShowCardsPageComponent implements OnInit{

  public cardList: Card[] = []
  public isLoading: boolean = false;

  constructor(private cardService: CardService, private router: Router){}

  ngOnInit(): void{

    this.isLoading = true;

    this.cardService.getAllCards().subscribe(resp => {

      this.cardList = resp.cards;
      this.isLoading = false;
    });

  }

  async onDeleteCard(card_id: string){

    const confirmation = await showConfirmationAlert();

    if(!confirmation){
      return;
    }

    this.isLoading = true;

    this.cardService.deleteCard(card_id)
      .pipe(
        tap(resp => console.log(resp)),
        switchMap(()=> this.cardService.getAllCards())
      ).subscribe(resp => {
        this.cardList = resp.cards;
        this.isLoading = false;
      });

  }

  onCatchEditingValue(card: Card){
    this.cardService.catchEditingCard = card;
    this.router.navigateByUrl('card/add')
  }

}
