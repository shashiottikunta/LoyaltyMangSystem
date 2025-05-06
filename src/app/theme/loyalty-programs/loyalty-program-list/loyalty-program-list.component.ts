import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http-service/http.service';
import { NotificationService } from '../../services/notification-service/notification.service';

@Component({
  selector: 'app-loyalty-program-list',
  templateUrl: './loyalty-program-list.component.html',
  styleUrls: ['./loyalty-program-list.component.css']
})
export class LoyaltyProgramListComponent {
  loyaltyForm:FormGroup;
  loyaltyList:any;
  id:any;
  constructor(private fb:FormBuilder, private router:Router, private httpService:HttpService, private notify:NotificationService) {
    this.loyaltyForm = this.fb.group({
      name:'',
      description:'',
      startDate:'',
      endDate:'',
      minPurchase:'',
      status:"",
    })  
  }
  addLoyalty(){
    this.router.navigate(['/loyalty-add']);

  }

  ngOnInit(){
    this.httpService.doGet('loyalty-programs').subscribe((res:any)=>{
      this.loyaltyList = res.loyalty_programs
    })
  }

  updateLoyalty(item:any){
    this.httpService.doGet('loyalty-programs/'+item.id).subscribe((res:any)=>{
      console.log(res)
      this.id = res.id
      this.loyaltyForm.patchValue({
        name:res?.name,
        description:res?.description,
        startDate:res?.start_date,
        endDate:res?.end_date,
        minPurchase:res?.min_purchase_amount,
        status:res?.status ? res?.status : 'Inactive'
      })
    })
  }

  update() {
    let payload = {
      "description": this.loyaltyForm.get('description')?.value,
      "end_date": this.loyaltyForm.get('endDate')?.value,
      "min_purchase_amount": this.loyaltyForm.get('minPurchase')?.value,
      "name": this.loyaltyForm.get('name')?.value,
      "points_per_purchase": this.loyaltyForm.get('minPurchase')?.value,
      "start_date": this.loyaltyForm.get('startDate')?.value,
      "status": this.loyaltyForm.get('status')?.value
    };
    this.httpService.doPost('loyalty-programs/' + this.id, payload).subscribe(
      (response: any) => {
        if (response.errorMessage) {
          // Check for specific error message from API
          if (response.errorMessage === 'Only one loyalty program can be active at a time') {
            this.notify.showErrorNotification('Error', 'You can only have one active loyalty program. Please deactivate the current one before activating a new one.');
          } else {
            // Generic error message handling
            this.notify.showErrorNotification('Error', response.errorMessage);
          }
        } else {
          // On success
          this.notify.showSucessNotification('Success', 'Loyalty program updated successfully.');
          this.router.navigate(['/loyalty-programs-list']);
        }
      },
      (error) => {
        this.notify.showErrorNotification('Error', "Only one loyalty program can be active at a time");
      }
    );
  }
  
}
