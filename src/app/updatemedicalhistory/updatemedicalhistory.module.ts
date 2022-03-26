import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdatemedicalhistoryPage } from './updatemedicalhistory.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatemedicalhistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdatemedicalhistoryPage]
})
export class UpdatemedicalhistoryPageModule {}
