import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZooComponent } from './zoo.component';
import {SubComponent} from "./sub/sub.component";

const routes: Routes = [
  { path: 'sub', component: SubComponent },
  { path: '', component: ZooComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZooRoutingModule { }
