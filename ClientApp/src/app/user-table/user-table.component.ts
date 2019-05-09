import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

displayUsers: User[];

  constructor(private userService: UserService,) { }

  ngOnInit() {
    this.getUserTable();
  }

  getUserTable(): void {
    this.userService.getAllUsers()
    .subscribe(displayUsers => this.dataSource = displayUsers);
  }

  displayedColumns: string[] = ['Id', 'Username', 'Lawyer' ,'Email'];
  dataSource = this.displayUsers;

}
