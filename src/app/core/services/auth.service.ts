import { Injectable } from '@angular/core';
import { User } from '../../featured/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'; // O ajusta la ruta

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();

  private TOKEN = 'my_secret_token';
  private apiUrl = `${environment.apiUrl}/users`; // <- importante

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      this.http.get<User[]>(this.apiUrl).subscribe({
        next: (users) => {
          const user = users.find(
            (u) => u.email === email && u.password === password
          );

          if (!user) {
            observer.next(false);
            observer.complete();
            return;
          }

          this._authUser.next(user);
          localStorage.setItem('token', this.TOKEN);
          observer.next(true);
          observer.complete();
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          observer.next(false);
          observer.complete();
        },
      });
    });
  }

  getRole() {
    return this.authUser$;
  }

  getUser(): User | null {
    return this._authUser.getValue();
  }

  getUserName(): string {
    const user = this._authUser.getValue();
    return user ? user.email : '';
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(token === this.TOKEN);
  }

  logout() {
    this._authUser.next(null);
  }
}
