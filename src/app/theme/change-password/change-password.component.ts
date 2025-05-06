import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../theme/services/http-service/http.service';
import { NotificationService } from '../../theme/services/notification-service/notification.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwordForm :FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder, private httpService:HttpService, private notify:NotificationService) {
    
  
    this.passwordForm = this.fb.group({
      currentPassord:'',
      newPassword:'',
    })
  }

  save(){
    let payload = {
      "new_password":this.passwordForm.get('newPassword')?.value,
      "old_password":this.passwordForm.get('currentPassord')?.value
      
    }
    this.httpService.doPost('change-password', payload).subscribe((response: any) => {
      if (response.errorMessage) {
        this.notify.showErrorNotification('', response.errorMessage);
      } else {
        this.notify.showSucessNotification('', 'Success');
        this.router.navigate(['/login']);
      }
      
    })
  }
}
