import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkComponent } from './park.component';

const routes: Routes = [{ path: '', component: ParkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkRoutingModule { }
