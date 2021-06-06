import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  constructor(private stepService: StepService, private Dataservice: DataService){}
  gender:number=0;
  ngOnInit(): void {
  }

  genderSelect(gender:number){
    this.gender=gender;
  }

  Gender(){
    this.Dataservice.setGender(this.gender);
    this.stepService.nextStep();
  }
  Genderb(){this.stepService.backStep();}
}
