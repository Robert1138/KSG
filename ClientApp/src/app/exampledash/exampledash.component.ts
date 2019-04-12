import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../account';

@Component({
  selector: 'app-exampledash',
  templateUrl: './exampledash.component.html',
  styleUrls: ['./exampledash.component.css']
})
export class ExampledashComponent implements OnInit {

     displayAccounts: account[];
     singleAccount: account[];
     id: number;

  constructor(private accountService: AccountService ) { }

  ngOnInit() {
     this.id = 2;
     this.getAccounts();
     this.getAccountID();
    //console.log(this.singleAccount.Father);
  }


  getAccounts(): void {

  this.accountService.getAllAccounts()
                          .subscribe(displayAccounts => this.displayAccounts = displayAccounts);
  }

  getAccountID(): void {

    this.accountService.getAccountById(this.id)
    .subscribe(singleAccount => this.singleAccount = singleAccount);
    
  }
  }


