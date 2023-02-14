import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form-filling',
  templateUrl: './form-filling.component.html',
  styleUrls: ['./form-filling.component.scss']
})
export class FormFillingComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
