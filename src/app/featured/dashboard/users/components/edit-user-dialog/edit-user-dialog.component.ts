import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../auth/interfaces/User';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  standalone:false,
})
export class EditUserDialogComponent {
  roles = ['admin', 'user'];

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
