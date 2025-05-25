import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../auth/interfaces/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']  // CORRECTO
})


export class UsersComponent {
    authUser$: Observable<User | null>;
  
    constructor(private authService: AuthService) {
      this.authUser$ = this.authService.authUser$;
    }

}
