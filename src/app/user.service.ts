import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import ChildlInformation from 'src/models/ChildlInformation';
import PersonalInformation from 'src/models/PersonalInformation';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

 currentUser=new PersonalInformation('','','',new Date,'','',[])
 currentChild=new ChildlInformation('',new Date,'')
 addPerson(person:PersonalInformation) 
 {
   return this.http.post<any>(`https://localhost:7271/api/Person`,person);
 }
  setInStorage() {

    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    localStorage.setItem("currentChild", JSON.stringify(this.currentChild));
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentChild");
  }
  getFromStorage() {
    let u = localStorage.getItem("currentUser");
    let v = localStorage.getItem("currentChild");
    if (u == null)
      return null;
    return JSON.parse(u);
  }
 
}
