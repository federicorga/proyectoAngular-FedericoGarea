import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  public formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.email, Validators.required]],
      age: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.min(15), Validators.max(80)]],
      email: ['', [Validators.email, Validators.required]],
      note: [0, [Validators.maxLength(2)]], //nota 0 igual a sin nota asignada
      isActive: [false, [Validators.required]], //inicia inactivo
      picture: ['https://www.w3schools.com/bootstrap4/img_avatar1.png'],
    
    });
  }

  public submit() {
    console.log(this.formulario.value);
    console.log(this.formulario.controls['firstName'].errors);
    console.log(this.formulario.controls['email'].errors);
    console.log(this.formulario.controls['lastName'].errors);
    console.log(this.formulario.controls['age'].errors);
    console.log(this.formulario.controls['note'].errors);
  

    if (this.formulario.valid) {
      alert('Formulario enviado correctamente');
      this.formulario.reset();//limpiar el formulario
    }
  }
  get firstNameControler() {
    return this.formulario.get('firstName');
  }
  get isNameInvalid() {
    return this.firstNameControler?.touched && this.firstNameControler?.invalid;
  }

  get lastNameControler() {
    return this.formulario.get('lastName');
  }
  get isLastNameInvalid() {
    return this.lastNameControler?.touched && this.lastNameControler?.invalid;
  }

  get ageControler() {
    return this.formulario.get('age');}
  get isAgeInvalid() {
    return this.ageControler?.touched && this.ageControler?.invalid;}
  
  get emailControler() {
    return this.formulario.get('email');
  }
  get isEmailInvalid() {
    return this.emailControler?.touched && this.emailControler?.invalid;
  }

  get noteControler() {
    return this.formulario.get('note');
  }
  get isNoteInvalid() {
    return this.noteControler?.touched && this.noteControler?.invalid;
  }
  get isActiveControler() {
    return this.formulario.get('isActive');
  }
  get isIsActiveInvalid() {
    return this.isActiveControler?.touched && this.isActiveControler?.invalid;
  }
  
  get pictureControler() {
    return this.formulario.get('picture');
  }


}
