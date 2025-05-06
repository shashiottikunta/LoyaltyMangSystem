import { Component } from '@angular/core';
import { HttpService } from '../services/http-service/http.service';
import { NotificationService } from '../services/notification-service/notification.service';

@Component({
  selector: 'app-my-rewards',
  templateUrl: './my-rewards.component.html',
  styleUrls: ['./my-rewards.component.css']
})
export class MyRewardsComponent {
  myrewardsList:any=[]
  constructor( private httpService:HttpService, private notify:NotificationService) {
  }

  ngOnInit() {
    this.httpService.doGet('get-user-redemptions/'+localStorage.getItem('user_id')).subscribe((res:any)=>{
      this.myrewardsList= res.redemptions
    })
  }

}
