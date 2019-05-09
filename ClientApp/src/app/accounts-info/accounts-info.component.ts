import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { account } from '../account';

@Component({
  selector: 'app-accounts-info',
  templateUrl: './accounts-info.component.html',
  styleUrls: ['./accounts-info.component.css']
})
export class AccountsInfoComponent implements OnInit {

  displayAccounts: account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
console.log("in accounts info");
    this.getAccounts();
console.log("got accounts");
  }



  getAccounts(): void {

    this.accountService.getAllAccounts()
                            .subscribe(displayAccounts => this.dataSource = displayAccounts);
    }
  

    displayedColumns: string[] = ['Actions','Id', 'Father', 'Mother' ,'Sister','Brother', 'Daughter', 'Son', 'Cousin', 'Date Joined'];
    dataSource = this.displayAccounts;

}
