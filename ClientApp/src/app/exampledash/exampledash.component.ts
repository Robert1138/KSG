import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../account';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { AboutComponent } from '../about/about.component';


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

     isForms: boolean;
     isUsers: boolean;
     isViewPDF: boolean;
     isAccounts: boolean;

  constructor(private accountService: AccountService,
              private userService: UserService,      ) { }

  ngOnInit() {
     this.id = 2;
     this.isForms = true;
     this.isUsers = false;
     this.isViewPDF = false;
     this.isAccounts = false;
     this.getAccounts();
     this.getAccountID();
     this.getUserIndex();
     this.getUserByID();
     this.getUserTable();
     
    
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

newUser(username: string, password: string, lawyer: number, email: string): void {
  console.log("sending that post request");      
  this.userService.addUser(username, password, lawyer, email)
  .subscribe();
}

btnForms() {
  this.isForms = true;
  this.isUsers = false;
  this.isViewPDF = false;
  this.isAccounts = false;
}
btnUsers() {
  this.isForms = false;
  this.isUsers = true;
  this.isViewPDF = false;
  this.isAccounts = false;
}
btnViewPDF() {
  this.isForms = false;
  this.isUsers = false;
  this.isViewPDF = true;
  this.isAccounts = false;
}

 btnAccounts() {
   console.log("acountsbuttonclicked");
    this.isForms = false;
    this.isUsers = false;
    this.isViewPDF = false;
    this.isAccounts = true;

  }

}


