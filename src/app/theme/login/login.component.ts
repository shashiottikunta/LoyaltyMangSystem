import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../services/http-service/http.service';
import { NotifierQueueService } from 'angular-notifier/lib/services/notifier-queue.service';
import { NotificationService } from '../services/notification-service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm :FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router, private httpService:HttpService, private notify:NotificationService) {

    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }
  ngOnit(){
    
  }
  login(){
    let payload ={
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    console.log(payload)
    this.httpService.doPost('login', payload).subscribe((response: any) => {
      if (response.errorMessage) {
        this.notify.showErrorNotification('', response.errorMessage);

      } else {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('first_name', response.first_name);
        localStorage.setItem('last_name', response.last_name);
        localStorage.setItem('email', response.email);
        localStorage.setItem('role', response.role);
        localStorage.setItem('role_id', response.role_id);
        localStorage.setItem('user_id', response.user_id);

        this.notify.showSucessNotification('', 'Success');
        this.router.navigate(['/dashboard']);
      }
    });
  }
  
}
