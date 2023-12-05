import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { AddCardPageComponent } from './pages/add-card-page/add-card-page.component';
import { ShowCardsPageComponent } from './pages/show-cards-page/show-cards-page.component';

const routes: Routes = [

  {
    path: "card",
    component: PanelLayoutComponent,
    children: [
      {path: "add", component: AddCardPageComponent, pathMatch: 'full'},
      {path: "all", component: ShowCardsPageComponent, pathMatch: 'full'}
    ]
  },

  {
    path: "**",
    redirectTo: 'card/add'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
