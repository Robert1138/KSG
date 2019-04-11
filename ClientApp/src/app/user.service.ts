import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = "http://localhost:8000/";
  
  constructor() { }
}
