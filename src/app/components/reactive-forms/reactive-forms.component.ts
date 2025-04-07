import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  public formulario: FormGroup;

constructor(private fb: FormBuilder){
  this.formulario=this.fb.group({
    name:["", [Validators.minLength(3), Validators.required]],
    email:["",[Validators.email,  Validators.required]],
    mensaje:["",[Validators.minLength(10),Validators.required]]
  })
}

public submit(){
  console.log(this.formulario.value);
  console.log(this.formulario.controls['name'].errors);
  console.log(this.formulario.controls['email'].errors);
  console.log(this.formulario.controls['mensaje'].errors)
}
}
