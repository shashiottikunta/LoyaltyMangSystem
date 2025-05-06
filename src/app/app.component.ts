import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loyaltyMngSystem';

  showSuccessAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Your action was successful!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  showErrorAlert() {
    Swal.fire({
      title: 'Error!',
      text: 'Something went wrong!',
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  }
}
