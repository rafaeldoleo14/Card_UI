import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../service/card.service';
import { showAlert } from '../../utils/showAlert.util';

@Component({
  selector: 'app-card-form-control',
  templateUrl: './card-form-control.component.html',
  styleUrls: ['./card-form-control.component.css', './card-form-control-responsive.component.css']
})
export class CardFormControlComponent implements OnInit {

  public cardForm: FormGroup = this.fb.group({

    tarjeta: [ null , [ Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^\d+$/) ] ],
    fecha: [ '' , [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(22|23|24|25|26|27)$/)] ],
    nombre: [ '' , [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[\p{L}\s]+$/u)] ],
    cvv: [ null , [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^\d+$/)] ],

  })

  public isForEditing: boolean = false;

  constructor(private fb: FormBuilder, private cardService: CardService){}

  ngOnInit(): void {

    const editCard = this.cardService.getEditingCard;

      if(!editCard){
        return;
      }

      this.isForEditing = true;

      this.cardForm.reset(editCard);
  }

  get cardNumber(): string{
    return this.cardForm.controls['tarjeta'].value;
  }

  get date(): string{
    return this.cardForm.controls['fecha'].value;
  }

  get cardName(): string{
    return this.cardForm.controls['nombre'].value;
  }

  onCreateCard(): void {

    if (this.cardForm.invalid) {

      this.cardForm.markAllAsTouched();
      return;
    }

    this.cardService.addNewCard(this.cardForm.value)
      .subscribe(resp => {
        resp.ok ? showAlert() : null
      })

    this.cardForm.reset();
  }

  onUpdateCard(): void{

    const editCard = this.cardService.getEditingCard;
    const newValue = this.cardForm.value;

    this.cardService.updateCard(editCard.card_id!, newValue)
      .subscribe(resp => {
        console.log(resp);
        this.cardForm.reset()
        this.isForEditing = false;
        showAlert('Tarjeta actualizada!!!');
      })

  }

  onCancel(): void{
    this.isForEditing = false;
    this.cardForm.reset();
  }

}
