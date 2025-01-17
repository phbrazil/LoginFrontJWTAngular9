﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { AuthService } from '@app/users/list.component';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient,
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

       /** Log a HeroService message with the MessageService */
  private log(message: string) {
      console.log(message);
    //this.messageService.add(`HeroService: ${message}`);
  }


    login(username, password) {
      //return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
      return this.http.post<User>('http://localhost:8080/cyberoficina/api/auth/signin', { username, password })
       .pipe(map(user => {
          //console.log(user);
          //console.log(user.token);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', JSON.stringify(user.token));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
            return this.http.post('http://localhost:8080/cyberoficina/api/auth/signup', user);
        //return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {

       var token = localStorage.getItem('token');

       var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Basic ${btoa(token)}`)
      }

        const url = 'http://localhost:8080/cyberoficina/api/auth/users';
        //const url = `${environment.apiUrl}/users`;

        //let users = this.http.get(url);

        //return users;

        //return this.http.get<User[]>(`${environment.apiUrl}/users`);

        return this.http.get<User[]>(url, header)
        .pipe(map(users => {
            console.log(users);
                return users;
            }));
            
    }


    getById(id: string){

        const url = `http://localhost:8080/cyberoficina/api/auth/user/${id}`;
    
        //return this.http.get<User>(`${environment.apiUrl}/users/${id}`);

        return this.http.get<User>(url);
    }

    update(id, params) {

        const url = `http://localhost:8080/cyberoficina/api/auth/editUser/${id}`;

        return this.http.put(url, params)

        //return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
