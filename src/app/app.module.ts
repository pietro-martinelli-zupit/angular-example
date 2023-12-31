import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';
import { StoreModule } from '@ngrx/store';
import {usersReducer} from "./users/users.reducer";
import { UserWrapperComponent } from './user-wrapper/user-wrapper.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FirstFormComponent } from './first-form/first-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    SelectedUserComponent,
    UserWrapperComponent,
    NavbarComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FirstFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ users: usersReducer }, {}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
