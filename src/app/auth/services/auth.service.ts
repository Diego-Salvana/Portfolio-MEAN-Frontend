import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Auth, AuthResponse } from 'src/app/shared/interfaces/auth.interface';
import { messageError } from 'src/app/shared/helpers/service.helper';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private isLogged = new BehaviorSubject<boolean>(false);
   private baseUrl: string = environment.baseUrl;

   constructor(private http: HttpClient) {}

   get isLogged$() {
      return this.isLogged.asObservable();
   }

   setIsLogged(bool: boolean): void {
      this.isLogged.next(bool);
   }

   login(body: Auth): Observable<AuthResponse> {
      return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, body).pipe(
         tap((resp) => {
            if (resp.token) {
               localStorage.setItem('jwToken', resp.token);
               this.setIsLogged(true);
            }
         }),
         catchError((err: HttpErrorResponse) => {
            const message = err.status === 400 ? 'Usuario o contraseña inválidos' : 'Error de servidor';
            throw messageError(err, message, 'loginToast');
         })
      );
   }

   verifyToken(): Observable<boolean> {
      const token = localStorage.getItem('jwToken');
      const headers = new HttpHeaders({
         authorization: `Bearer ${token}`,
         spinner: 'on',
      });

      return this.http.get<AuthResponse>(`${this.baseUrl}/auth/refresh`, { headers }).pipe(
         map((resp) => {
            localStorage.setItem('jwToken', resp.token);
            this.setIsLogged(true);
            return true;
         }),
         catchError(() => of(false))
      );
   }
}
