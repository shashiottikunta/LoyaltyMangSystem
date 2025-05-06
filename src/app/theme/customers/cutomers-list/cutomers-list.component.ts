import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http-service/http.service';
import { NotificationService } from '../../services/notification-service/notification.service';
import * as $ from 'jquery';

interface DataItem {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-cutomers-list',
  templateUrl: './cutomers-list.component.html',
  styleUrls: ['./cutomers-list.component.css']
})
export class CutomersListComponent {
  @ViewChild('exampleModalLong', { static: false })
  exampleModalLong!: ElementRef;

  customersList:any;
  customerForm:FormGroup;
  userID:any;
 
  constructor(private router: Router, private http: HttpClient, private fb:FormBuilder, private httpService:HttpService, private notify:NotificationService) {
    this.customerForm = this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      totalTransctions:'',
      amount:'',
      pointOccured:'',
      pointsAvailable:'',
      badge:'',
      status:''
    })
  } 
   
  

  addCustomer(){
    this.router.navigate(['/customer-add']);
  }
  viewCustomer(){
  }

  ngOnInit(): void {
    this.httpService.doGet('customers').subscribe((res:any)=>{
      this.customersList = res.customers;
    })
  }

  

  update(){
    let payload = {
      first_name:this.customerForm.get('firstName')?.value,
      last_name:this.customerForm.get('lastName')?.value,
      email:this.customerForm.get('email')?.value,
      phone:this.customerForm.get('phoneNumber')?.value,
      transaction_count:this.customerForm.get('totalTransctions')?.value,
      transaction_amount:this.customerForm.get('amount')?.value,
      total_loyalty_points_incurred:this.customerForm.get('pointOccured')?.value,
      loyalty_points_available:this.customerForm.get('pointsAvailable')?.value,
      status:this.customerForm.get('status')?.value
    }
    this.httpService.doPost('customers/'+ this.userID, payload).subscribe((res:any)=>{
      if(res.message){
        this.notify.showSucessNotification('', res.message)

      }else{
        this.notify.showErrorNotification('', res.errorMessage)
      }

    })


  }

  updateEmployee(item:any){
    this.httpService.doGet('customers/'+item.user_id).subscribe((res:any)=>{
      this.userID=item.user_id
      this.customerForm.patchValue({
        firstName:res?.first_name,
        lastName:res?.last_name,
        email:res?.email,
        phoneNumber:res?.phone,
        totalTransctions:res?.transaction_count,
        amount:res?.transaction_amount,
        pointOccured:res?.total_loyalty_points_incurred,
        pointsAvailable:res?.loyalty_points_available,
      })
      
    })
    
  }



}
