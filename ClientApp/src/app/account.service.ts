import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// import { of } from './rxjs/observable/of';

import { account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:8000/";
  private apiUrl = "api/accounts";
  private apiUrlSingleAccount = "api/account/";
  
  accountIndex: account[];

  constructor(private http: HttpClient) { }

getAllAccounts(): Observable<account[]>  {

  return this.http.get<account[]>(this.baseUrl + this.apiUrl)
  .pipe(
    tap(_=> console.log(`sent a get request `)),
    catchError(this.handleError<account[]>(`issue with getting all accounts`)));

}

getAccountById(id: number): Observable<account[]>  {

  return this.http.get<account[]>(this.baseUrl + this.apiUrlSingleAccount + id)
  .pipe(
    tap(_=> console.log(`sent a get request `)),
    catchError(this.handleError<account[]>(`issue with getting an account by id`)));

}






private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.log("looks like you got an error");
    console.error(error + " this is additional"); // log to console instead
    console.error('An error occurred:', error.error.message);

    // TODO: better job of transforming error for user consumption
//   this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}










}
