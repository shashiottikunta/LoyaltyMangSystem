import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-transction-list',
  templateUrl: './transction-list.component.html',
  styleUrls: ['./transction-list.component.css']
})
export class TransctionListComponent {
  transctionForm:FormGroup;
  transactionList:any;
  customersList:any;
  role:any;
  constructor(private router: Router, private http: HttpClient, private fb:FormBuilder , private httpService:HttpService) {
    this.transctionForm = this.fb.group({
      customer:'',
      purchaseDate:'',
      amount:'',
      status:'',
    })
    
  }
  addTransction(){
    this.router.navigate(['/transction-add']);
  }

  ngOnInit(): void {
    this.role= localStorage.getItem('role');
    if(this.role=='Admin'){
    this.httpService.doGet('customers').subscribe((res:any)=>{
      this.customersList = res.customers;
    })
    this.httpService.doGet('transactions').subscribe((res:any)=>{
      this.transactionList = res.transactions;
  })
    }else if(this.role=='Customer'){
      this.httpService.doGet('transactions-by-user/'+localStorage.getItem('user_id')).subscribe((res:any)=>{
        this.transactionList = res.transactions;
    })
    }
  }

 
}
