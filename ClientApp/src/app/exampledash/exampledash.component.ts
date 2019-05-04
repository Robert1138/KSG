import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../account';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


const ELEMENT_DATA: User[] = [
  {Id: 1, Username: 'Hydrogen', Lawyer: 1.0079, Email: 'H'},
  {Id: 2, Username: 'bib', Lawyer: 8, Email: 'B'},  
];




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

     display: User[];

  constructor(private accountService: AccountService,
              private userService: UserService,      ) { }

  ngOnInit() {
     this.id = 2;
     this.getAccounts();
     this.getAccountID();
     this.getUserIndex();
     this.getUserByID();
     this.getUserTable();
     console.log("datasource has " + this.dataSource);
console.log("displayusers is " + this.displayUsers);
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


getUserTable(): void {
  this.userService.getAllUsers()
  .subscribe(displayUsers => this.dataSource = displayUsers);
}



displayedColumns: string[] = ['Id', 'Username', 'Lawyer' ,'Email'];
dataSource = this.displayUsers;





  }


