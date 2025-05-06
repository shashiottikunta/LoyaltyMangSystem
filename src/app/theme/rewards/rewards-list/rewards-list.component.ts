import { Component } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';
import { NotificationService } from '../../services/notification-service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards-list',
  templateUrl: './rewards-list.component.html',
  styleUrls: ['./rewards-list.component.css']
})
export class RewardsListComponent {
  rewardsList:any=[];
  date = new Date();
  role:any;
  rewardData:any;

  constructor( private httpService:HttpService, private notify:NotificationService, private router:Router) {

  }
  ngOnInit() {
    this.role= localStorage.getItem('role');
    this.httpService.doGet('rewards').subscribe((res:any)=>{
      this.rewardsList= res.rewards
      console.log(this.rewardsList)
    })
  }
  redem(item:any){
    let payload = {
      "reward_id": item.id,
      "customer_id": localStorage.getItem('user_id'),
      "date":this.formatDate(this.date),
    }
    this.httpService.doPost('subscribe',payload).subscribe((res:any)=>{
      if(res.errorMessage){
        this.rewardData= res

        this.notify.showErrorNotification('', res.errorMessage);
      }else{
        this.rewardData= res
        this.notify.showSucessNotification('', res.message);
      }
      
    })
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    return `${year}-${month}-${day}`;
  }
  

}
