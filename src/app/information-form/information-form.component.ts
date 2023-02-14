import { Component, OnInit } from '@angular/core';
import PersonalInformation from 'src/models/PersonalInformation';
import {pharmecyArr} from 'src/models/Pharmecy';
import ChildlInformation from 'src/models/ChildlInformation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss']
})
export class InformationFormComponent implements OnInit {
  
  selectSex:string='';
  sex:any=['male','female']
arr=pharmecyArr;
numChildren:number =0;
//user:PersonalInformation=new PersonalInformation('','','',new Date,'','',0)
//emptyChild:ChildlInformation=new ChildlInformation('',new Date,'')
  constructor(public userService: UserService) { }
  
  ngOnInit(): void {
  }
  save(f: any) {
     this.userService.currentUser = new PersonalInformation('','','',new Date,'','',[]);
     this.userService.currentChild=new ChildlInformation('',new Date,'')
   }
  radioChangeHandler(event:any){
    this.selectSex=event.target.value;
  }
  saveName() {
    if (this.userService.currentUser.firstName!='') {
      this.userService.setInStorage();
     //this.userService.currentUser.next(this.userService.currentUser);
    }

  }
  createArr()
  {
 this.userService.currentUser.children.length=this.numChildren;
 for(let i =0;i<this.numChildren;i++)
 {
  this.userService.currentUser.children.push(new ChildlInformation('',new Date,'')) }
  }
  addPerson()
    {
    this.userService.addPerson(this.userService.currentUser).subscribe((succ)=>{alert("child added succesfully!")},(err)=>{   alert("error")})
     }
}

