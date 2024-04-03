import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  generi:string[] = [
    'uomo',
    'donna',
    'altro',
  ]

  form!:FormGroup

  constructor(private fb:FormBuilder ) {}

  ngOnInit() {

    this.form = this.fb.group({
      nome: this.fb.control(null),
      cognome: this.fb.control(null),
      password: this.fb.control(null),
      confermaPassword: this.fb.control(null),
      genere: this.fb.control(null),
      immagineProfilo: this.fb.control(null),
      biografia: this.fb.control(null),
      username: this.fb.control(null)
    })

  }

}
