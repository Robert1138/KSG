import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

userIndex: User[];
singleUser: User;

  private baseUrl = "http://localhost:8000/";
  private apiUrlUsers = "api/users";
  private apiUrlSingleUser = "api/user/";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.baseUrl + this.apiUrlUsers)
    .pipe(
      tap(_=> console.log(`sent a get request with user service `)),
      catchError(this.handleError<User[]>(`issue with getting user index`)));
  }

  
  getUser(username: string): Observable<User[]> {

    return this.http.get<User[]>(this.baseUrl + this.apiUrlSingleUser + username)
    .pipe(
      tap(_=> console.log(`sent a get request with user service `)),
      catchError(this.handleError<User[]>(`issue with getting user index`)));
  }


   addUser(username: string, password: string, lawyer: number, email: string): Observable<User[]> {

    return this.http.post<User[]>(`${this.baseUrl}${this.apiUrlSingleUser}${username}/${password}/${lawyer}/${email}`, username, httpOptions )
    .pipe(
      tap(_=> console.log(`sent a post request with user service `)),
      catchError(this.handleError<User[]>(`issue with sendingpost`)));
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


/////// april 25th 3-7:30 mark and brian reunion