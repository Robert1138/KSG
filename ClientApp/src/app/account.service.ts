import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from './rxjs/observable/of';

import { account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:8000/";
  private apiUrl = "api/accounts/";

  constructor() { }
}
