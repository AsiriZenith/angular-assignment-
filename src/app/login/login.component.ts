import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username_error = false;
  password_error = false;
  constructor(private fb: FormBuilder, private router: Router , private tokenStorage : TokenStorageService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      this.tokenStorage.saveLogingStatus();
      this.router.navigate(['/todo']);
    }
    if(this.loginForm.value.username != 'admin'){
      this.username_error = true;
    }
    if(this.loginForm.value.password != 'admin'){
      this.password_error = true;
    }

  }

  getFormControl(name: any) {
    return this.loginForm.controls[name];
  }
}