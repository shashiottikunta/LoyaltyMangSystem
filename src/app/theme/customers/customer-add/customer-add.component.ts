import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http-service/http.service';
import { NotificationService } from '../../services/notification-service/notification.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  customerForm :FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder, private httpService:HttpService, private notify:NotificationService) {
    
  
    this.customerForm = this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:''
    })
  }

  saveCustomer(){
    let payload ={
      first_name:this.customerForm.get('firstName')?.value,
      last_name:this.customerForm.get('lastName')?.value,
      email:this.customerForm.get('email')?.value,
      phone:this.customerForm.get('phoneNumber')?.value,
    }
    this.httpService.doPost('customers', payload).subscribe((response: any) => {
      if (response.errorMessage) {
        this.notify.showErrorNotification('', response.errorMessage);
      } else {
        this.notify.showSucessNotification('', 'Success');
        this.router.navigate(['/customers-list']);
      }
      
    })


  }
  goBack(){
    this.router.navigate(['/customers-list']);
  }

 
}
