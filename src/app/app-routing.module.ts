import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponent} from "./second/second.component";
import {FirstComponent} from "./first/first.component";
import {ThirdComponent} from "./third/third.component";

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
