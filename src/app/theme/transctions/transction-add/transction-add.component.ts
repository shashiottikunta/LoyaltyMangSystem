import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http-service/http.service';
import { NotificationService } from '../../services/notification-service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transction-add',
  templateUrl: './transction-add.component.html',
  styleUrls: ['./transction-add.component.css']
})
export class TransctionAddComponent {
  transctionForm:FormGroup;
  customersList:any;
  transctionList:any;
  constructor(private fb:FormBuilder, private http:HttpClient, private httpService:HttpService, private notify:NotificationService, private router:Router) {

    this.transctionForm = this.fb.group({
      customer:'',
      purchaseDate:'',
      amount:'',
    })
  }

  saveTransction(){
    let payload ={
      "customer_id":this.transctionForm.get('customer')?.value,
      "purchase_date":this.transctionForm.get('purchaseDate')?.value,
      "purchase_amount":Number(this.transctionForm.get('amount')?.value)
    }
    this.httpService.doPost('transactions', payload).subscribe((response: any) => {
      if (response.errorMessage) {
        this.notify.showErrorNotification('', response.errorMessage);
      } else {
        this.notify.showSucessNotification('', 'Success');
        this.router.navigate(['/transctions-list']);
      }
      
    })

  }

  ngOnInit(){
    this.httpService.doGet('customers').subscribe((res:any)=>{
      this.customersList = res.customers;
    })
   

  }
}
