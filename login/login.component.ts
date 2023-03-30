import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcomService } from '../ecom.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private service:EcomService ,private router:Router ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',Validators.required]
      
    });
  }
  login()
  {
    this.service.register(this.loginForm.value).subscribe({
      next(value) {
        console.log(value);
        
      },
    })
    this.router.navigate(['/product']);
  }

}