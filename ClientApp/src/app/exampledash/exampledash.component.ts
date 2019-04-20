import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../account';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exampledash',
  templateUrl: './exampledash.component.html',
  styleUrls: ['./exampledash.component.css']
})
export class ExampledashComponent implements OnInit {

     displayAccounts: account[];
     singleAccount: account[];
     id: number;

     displayUsers: User[];
     singleUser: User[];

  constructor(private accountService: AccountService,
              private userService: UserService,      ) { }

  ngOnInit() {
     this.id = 2;
     this.getAccounts();
     this.getAccountID();
     this.getUserIndex();
     this.getUserByID();
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

getUserIndex(): void {
  this.userService.getAllUsers()
  .subscribe(displayUsers => this.displayUsers = displayUsers);
}

getUserByID(): void {
  this.userService.getUser("robert")
  .subscribe(singleUser => this.singleUser = singleUser);
}


  }


