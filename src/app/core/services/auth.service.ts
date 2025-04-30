import { Injectable } from '@angular/core';

import { User } from '../../featured/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();

  private TOKEN = 'my_secret_token';

  private users = [
    {
      email: 'fg@gmail.com',
      password: '1234',
      role: 'admin',
    },
    {
      email: 'emi@gmail.com',
      password: '1234',
      role: 'admin',
    },
    {
      email: 'sofi@gmail.com',
      password: '1234',
      role: 'admin',
    },
    {
      email: 'pepe@gmail.com',
      password: '1234',
      role: 'user',
    },
  ];

  constructor() {}

  login(email: string, password: string): boolean {
    // Chequear que los datos sean correctos
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return false;
    }

    this._authUser.next(user);

    localStorage.setItem('token', this.TOKEN);
    // localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  getRole() {
    return this.authUser$;
  }

  // Método para obtener el nombre del usuario
  getUserName(): string {
    const user = this._authUser.getValue();
    return user ? user.email : '';  // Retorna el nombre del usuario, o un string vacío si no está logueado
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');

    return of(token === this.TOKEN);
  }

  logout() {
    this._authUser.next(null);
  }
}
