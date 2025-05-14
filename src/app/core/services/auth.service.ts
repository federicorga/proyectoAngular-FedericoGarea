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

  constructor(private http: HttpClient) {
    this.checkLocalStorage();
  }

  private checkLocalStorage() {
    const token = localStorage.getItem('token');
    if (token === this.TOKEN) {
      // Si el token es válido, cargamos el usuario
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

          this._authUser.next(user);
          localStorage.setItem('token', this.TOKEN); // Guarda el token al iniciar sesión
          localStorage.setItem('user', JSON.stringify(user)); // Guarda el usuario en el localStorage
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
    return of(token === this.TOKEN);  // Verifica si el token en localStorage es válido
  }

  logout() {
    localStorage.removeItem('token'); // Elimina el token al cerrar sesión
    localStorage.removeItem('user'); // Elimina el usuario del localStorage
    this._authUser.next(null);
  }
}
