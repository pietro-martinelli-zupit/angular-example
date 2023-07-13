import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZooRoutingModule } from './zoo-routing.module';
import { ZooComponent } from './zoo.component';
import {SubComponent} from "./sub/sub.component";



@NgModule({
  declarations: [
    ZooComponent,
    SubComponent
  ],
  imports: [
    CommonModule,
    ZooRoutingModule
  ]
})
export class ZooModule { }
