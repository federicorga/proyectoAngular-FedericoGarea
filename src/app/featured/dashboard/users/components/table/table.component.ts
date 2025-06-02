// users/components/table/table.component.ts
import { Component, OnInit } from '@angular/core';


import { User } from '../../../../auth/interfaces/User';
import { UsersService } from '../../../../../core/services/user.service';
import { AuthService } from '../../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from '../../../students/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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
   

  constructor(private usersService: UsersService,  private authService: AuthService, private dialog: MatDialog ) {
    this.authUser = this.authService.authUser$;
  }

  ngOnInit(): void {
    this.usersService.fetchUsersFromApi(); // <- necesario
    this.usersService.users$.subscribe(data => this.dataSource = data);
  }
  

 deleteUser(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: `¿Estás seguro de que querés eliminar el usuario "${id}"?` }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.usersService.deleteUser(id);
      }
    });
  }

editUser(user: User) {
  const dialogRef = this.dialog.open(EditUserDialogComponent, {
    width: '300px',
    data: { ...user } // se pasa una copia
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.usersService.editUser(result);
    }
  });
}

  


  
}

