import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../featured/auth/interfaces/User';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private dataSubject = new BehaviorSubject<User[]>([]);
  users$ = this.dataSubject.asObservable();

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  // GET
  fetchUsersFromApi(): void {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (users) => {
        this.dataSubject.next(users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  // POST
  addUser(user: User): void {
    this.http.post<User>(this.apiUrl, user).subscribe({
      next: () => {
        this.fetchUsersFromApi();
      },
      error: (error) => {
        console.error('Error adding user:', error);
      },
    });
  }

  // PUT
  editUser(user: User): void {
    this.http.put(`${this.apiUrl}/${user.id}`, user).subscribe({
      next: () => {
        this.fetchUsersFromApi();
      },
      error: (error) => {
        console.error('Error updating user:', error);
      },
    });
  }

  // DELETE
  deleteUser(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.fetchUsersFromApi();
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      },
    });
  }

  // Promise utility
  getUsersPromise(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.http.get<User[]>(this.apiUrl).subscribe({
        next: (users) => resolve(users),
        error: (error) => reject(error),
      });
    });
  }
}
