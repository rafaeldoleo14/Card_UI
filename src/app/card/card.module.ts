import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { AddCardPageComponent } from './pages/add-card-page/add-card-page.component';
import { ShowCardsPageComponent } from './pages/show-cards-page/show-cards-page.component';
import { VirtualCardComponent } from './components/virtual-card/virtual-card.component';
import { CardFormControlComponent } from './components/card-form-control/card-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatCardNumberPipe } from './pipes/format-card-number.pipe';
import { MaskCardPipe } from './pipes/mask-card.pipe';

@NgModule({
  declarations: [
    PanelLayoutComponent,
    AddCardPageComponent,
    ShowCardsPageComponent,
    VirtualCardComponent,
    CardFormControlComponent,
    FormatCardNumberPipe,
    MaskCardPipe
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CardModule { }
