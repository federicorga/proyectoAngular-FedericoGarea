// users/components/table/table.component.ts
import { Component, OnInit } from '@angular/core';


import { User } from '../../../../auth/interfaces/User';
import { UsersService } from '../../../../../core/services/user.service';
import { AuthService } from '../../../../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-table',
  templateUrl: './table.component.html',
  standalone:false,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id','email', 'role', 'actions'];
  dataSource: User[] = [];
   authUser: Observable<any>;
   

  constructor(private usersService: UsersService,  private authService: AuthService ) {
    this.authUser = this.authService.authUser$;
  }

  ngOnInit(): void {
    this.usersService.fetchUsersFromApi(); // <- necesario
    this.usersService.users$.subscribe(data => this.dataSource = data);
  }
  

  deleteUser(id: string) {
    this.usersService.deleteUser(id);
  }
}
