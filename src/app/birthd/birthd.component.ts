import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {DataService} from '../data.service';


@Component({
  selector: 'app-birthd',
  templateUrl: './birthd.component.html',
  styleUrls: ['./birthd.component.scss']
})
export class BirthdComponent implements OnInit {

  birthc:string="";
  date:string="";
  constructor(private stepService: StepService, private Dataservice: DataService){}
 
  ngOnInit(): void {
  }

  Birth(country:string,date:string){
    this.birthc=country;
    this.date=date;
  if(!this.birthc || !this.date){alert("Missing data");}
else{
    this.birthc=this.birthc+' '+this.date;
    this.Dataservice.setBirth(this.birthc);
    this.stepService.nextStep();}
  }

  Birthb(){
    this.stepService.backStep();
  }
}
