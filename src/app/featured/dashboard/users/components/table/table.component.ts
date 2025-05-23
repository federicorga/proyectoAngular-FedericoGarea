// users/components/table/table.component.ts
import { Component, OnInit } from '@angular/core';


import { User } from '../../../../auth/interfaces/User';
import { UsersService } from '../../../../../core/services/user.service';

@Component({
  selector: 'user-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'role', 'isActive', 'actions'];
  dataSource: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.users$.subscribe(data => this.dataSource = data);
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
}
