import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username !: string;
  paswoord !: string;
  logo = properties.logo;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void{
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      paswoord: ['', Validators.required]
    })
  }

  login(){
    if (this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      for(const key in this.formLogin.controls){
        this.formLogin.controls[key].markAsDirty();
        console.log(key)
      }
      return;
    }
    console.log(this.formLogin.value)
  }
}
