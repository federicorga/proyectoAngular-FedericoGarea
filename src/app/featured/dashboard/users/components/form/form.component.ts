import { Component } from '@angular/core';
import { UsersService } from '../../../../../core/services/user.service';
import { User } from '../../../../auth/interfaces/User';


@Component({
  selector: 'user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  fullName = '';
  email = '';
  role: 'admin' | 'user' = 'user';
  isActive = true;

  constructor(private usersService: UsersService) {}

  submit() {
    const newUser: User = {
      id: Date.now(),
      password: this.password,
      email: this.email,
      role: this.role,
    ,
    };

    this.usersService.addUser(newUser);

   this.role ='user';
   this.password = '';
    this.email = '';
  }
}
