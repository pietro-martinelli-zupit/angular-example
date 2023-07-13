import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(map(us => us.map(u => ({...u, username: u.username.toUpperCase()}))));
  }
}

interface GeoCoordinates {
  lat: number;
  lng: number;
}

interface UserAddress {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: GeoCoordinates;
}

export interface User {
  id: number;
  name: String;
  username: String;
  email: String;
  phone: String;
  website: String;
  address: UserAddress;
}
