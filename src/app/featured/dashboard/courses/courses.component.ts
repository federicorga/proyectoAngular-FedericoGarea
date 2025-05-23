import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../auth/interfaces/User';
@Component({
  selector: 'courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  authUser$: Observable<User | null>;

  constructor(private authService: AuthService) {
      this.authUser$ = this.authService.authUser$;
    }
}
