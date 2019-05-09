import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  newUser(username: string, password: string, lawyer: number, email: string): void {
    console.log("sending that post request");      
    this.userService.addUser(username, password, lawyer, email)
    .subscribe();
  }

  addUser(username: string, password: string, lawyer: number, email: string) {
    this.newUser(username, password, lawyer, email);
    this.router.navigateByUrl('/dashboard');
  }


}