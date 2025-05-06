import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http-service/http.service';
import { NotificationService } from '../../services/notification-service/notification.service';

@Component({
  selector: 'app-loyalty-add',
  templateUrl: './loyalty-add.component.html',
  styleUrls: ['./loyalty-add.component.css']
})
export class LoyaltyAddComponent {
  loyaltyForm:FormGroup;
  customersList:any;
  constructor(private fb:FormBuilder, private router:Router, private httpService:HttpService, private notify:NotificationService) {
    this.loyaltyForm = this.fb.group({
      name:'',
      description:'',
      startDate:'',
      endDate:'',
      minPurchase:'',
    })  
  }

  saveLoyalty(){
    let payload ={
    "description": this.loyaltyForm.get('description')?.value,
    "end_date": this.loyaltyForm.get('endDate')?.value,
    "min_purchase_amount":this.loyaltyForm.get('minPurchase')?.value,
    "name": this.loyaltyForm.get('name')?.value,
    "points_per_purchase": this.loyaltyForm.get('minPurchase')?.value,
    "start_date": this.loyaltyForm.get('startDate')?.value,
    }
    this.httpService.doPost('loyalty-programs', payload).subscribe((response: any) => {
      if (response.errorMessage) {
        this.notify.showErrorNotification('', response.errorMessage);
      } else {
        this.notify.showSucessNotification('', 'Success');
        this.router.navigate(['/loyalty-programs-list']);
      }
      
    })

  }

  goBack(){
    this.router.navigate(['/loyalty-programs-list']);
  }
}
