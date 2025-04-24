import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Student } from '../../../interfaces/Student';


@Component({
  selector: 'app-form-student',
  standalone: false,
  templateUrl: './formStudent.component.html',
  styleUrl: './formStudent.component.scss'
})
export class FormStudentComponent {
  @Output() studentAdd = new EventEmitter<Student>(); //emisor de eventos para el componente padre.
  showFiller = false;
  formGroup: FormGroup;



  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: [,[Validators.minLength(3), Validators.required]],
      lastName: [,[Validators.minLength(3), Validators.required]],
      
      email: [,[Validators.email, Validators.required]],
      note: [0, [Validators.maxLength(2)]], //nota 0 igual a sin nota asignada
      isActive: ["inactivo", [Validators.required]], //inicia inactivo
      picture: ['https://www.w3schools.com/bootstrap4/img_avatar1.png'],
      course: ['', [Validators.required]],
    });
  }


  onSubmit() {
   
    

    if (this.formGroup.valid) {
      alert('Formulario enviado correctamente');
      const student: Student = {//creamos un objeto estudiante con los valores del formulario.
        id: 0, //id inicializado en 0, ya que se asignara en el backend.
        firstName: this.formGroup.value.firstName, 
        lastName: this.formGroup.value.lastName,
        email: this.formGroup.value.email,
        note: this.formGroup.value.note,
        isActive: this.formGroup.value.isActive,
        picture: this.formGroup.value.picture,
        course: this.formGroup.value.course,
       
      }
    this.studentAdd.emit(student); //emitimos el evento al componente padre.
    this.formGroup.reset({
      firstName: '',
      lastName: '',
      email: '',
      note: 0,
      isActive: "Inactivo",
      picture: 'https://www.w3schools.com/bootstrap4/img_avatar1.png',
      course: ''
    });
    } else {
      alert('Formulario inválido, por favor verifique los campos.');
    };
  };
   
  

}
