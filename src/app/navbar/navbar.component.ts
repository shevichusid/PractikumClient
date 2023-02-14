import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //userName ='';
  constructor(public ser: UserService) { }
  
  ngOnInit(): void {
    //this.ser.currentUser.subscribe(data => { this.userName = data?.firstName })
  }
  logOut() {
   // this.ser.currentUser.next(null);
   // this.ser.removeFromStorage();
  }
}
