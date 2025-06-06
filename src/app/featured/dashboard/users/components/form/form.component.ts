import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../../../../core/services/user.service';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'user-form',
  templateUrl: './form.component.html',
  standalone: false,
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private usersService: UsersService
  ) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['user', [Validators.required]]
    });
  }

  submit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.dialog.open(DialogComponent).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const newUser = {
          id: Date.now().toString(), 
          ...this.formGroup.value
        };

        this.usersService.addUser(newUser);

    
        this.formGroup.reset({
          role: 'user'
        });
      }
    });
  }
}
