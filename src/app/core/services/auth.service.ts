import { Injectable } from '@angular/core';
import { User } from '../../featured/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'; 
import { RootState } from '../store';
import { Store } from '@ngrx/store';
import { setAuthUser,unsetAuthUser } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();

  private TOKEN = 'my_secret_token';
  private apiUrl = `${environment.apiUrl}/users`; 

  constructor(private http: HttpClient, private store: Store<RootState>) {
    this.checkLocalStorage();
  }



  private checkLocalStorage() {
    const token = localStorage.getItem('token');
    if (token === this.TOKEN) {

      this.loadUserFromLocalStorage();
    }
  }

  private loadUserFromLocalStorage() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this._authUser.next(JSON.parse(storedUser));
    }
  }

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

          this.store.dispatch(
      setAuthUser({
        payload: user,
      })
    );

          this._authUser.next(user);
          localStorage.setItem('token', this.TOKEN); 
          localStorage.setItem('user', JSON.stringify(user)); 
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
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 
    this._authUser.next(null);
    this.store.dispatch(unsetAuthUser()); 
  }
}
