import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponent} from "./second/second.component";
import {FirstComponent} from "./first/first.component";
import {ThirdComponent} from "./third/third.component";

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent },
  { path: 'zoo', loadChildren: () => import('./zoo/zoo.module').then(m => m.ZooModule) },
  { path: 'park', loadChildren: () => import('./park/park.module').then(m => m.ParkModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
