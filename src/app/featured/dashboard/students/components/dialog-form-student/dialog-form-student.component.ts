import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../interfaces/Student';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-form-student',
  templateUrl: './dialog-form-student.component.html',
  standalone: false,
  styleUrls: ['./dialog-form-student.component.scss']
})
export class DialogFormStudentComponent {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogFormStudentComponent>
  ) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      note: [0, [Validators.maxLength(2)]],
      isActive: ["Inactivo", [Validators.required]],
      picture: ['https://www.w3schools.com/bootstrap4/img_avatar1.png'],
      course: ['', [Validators.required]],
    });
  }

  onSubmit() { // Validar el formulario antes de enviar los datos
    if (this.formGroup.valid) {
      const student: Student = {
        id: 0, // ID se asignará en el backend
        firstName: this.formGroup.value.firstName,
        lastName: this.formGroup.value.lastName,
        email: this.formGroup.value.email,
        note: this.formGroup.value.note,
        isActive: this.formGroup.value.isActive,
        picture: this.formGroup.value.picture,
        course: this.formGroup.value.course
      };

      this.dialogRef.close(student);
    } else {
      alert('Formulario inválido, por favor verifique los campos.');
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  
  get firstNameControler() {
    return this.formGroup.get('firstName');
  }
  get isNameInvalid() {
    return this.firstNameControler?.touched && this.firstNameControler?.invalid;
  }

  get lastNameControler() {
    return this.formGroup.get('lastName');
  }
  get isLastNameInvalid() {
    return this.lastNameControler?.touched && this.lastNameControler?.invalid;
  }

  get ageControler() {
    return this.formGroup.get('age');}
  get isAgeInvalid() {
    return this.ageControler?.touched && this.ageControler?.invalid;}
  
  get emailControler() {
    return this.formGroup.get('email');
  }
  get isEmailInvalid() {
    return this.emailControler?.touched && this.emailControler?.invalid;
  }

  get noteControler() {
    return this.formGroup.get('note');
  }
  get isNoteInvalid() {
    return this.noteControler?.touched && this.noteControler?.invalid;
  }
  get isActiveControler() {
    return this.formGroup.get('isActive');
  }
  get isIsActiveInvalid() {
    return this.isActiveControler?.touched && this.isActiveControler?.invalid;
  }
  
  get pictureControler() {
    return this.formGroup.get('picture');
  }
}
