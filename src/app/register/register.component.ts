import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Register } from '../models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerFormGroup : FormGroup = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl('')
    }
  );

  constructor(private authService : AuthService) {

  }

  registerUser() : void {
    var data : any = this.registerFormGroup.value;
    this.authService.register(new Register(data['email'], data['password'])).subscribe();
    window.alert('User Registered successfully');
  }

}
