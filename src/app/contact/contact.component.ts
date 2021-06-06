import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private stepService: StepService, private Dataservice: DataService){}
  Phonenumber:string="";
  EAdress:string="";
  tw:string="";
  fb:string="";
  p1:string="";
  p2:string="";
  e1:string="";
  e2:string="";
  Phone:boolean=false;
  Email:boolean=false;
  ngOnInit(): void {
  


  }
  Contact(p1:string,p2:string,e1:string,e2:string,fb:string,tw:string){
    this.Phonenumber=p1+p2+',';
    this.EAdress=e1+e2+', '
    this.fb=fb;
    this.tw=tw;
    this.Dataservice.setContact(this.Phonenumber+this.EAdress+' '+fb+' '+tw);
    this.stepService.nextStep();}
  Contactb(){
    this.stepService.backStep();
  }

  togglePhone() {
    this.Phone = !this.Phone;
    
  }

  toggleMail() {
    this.Email = !this.Email;
    
  }
}
