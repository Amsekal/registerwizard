import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {StepService} from '../step.service';

@Component({
  selector: 'app-regionr',
  templateUrl: './regionr.component.html',
  styleUrls: ['./regionr.component.scss']
})
export class RegionrComponent implements OnInit {

  constructor(private stepService: StepService)  {}
  
  ngOnInit(): void {
  }

  nextStep(){
    this.stepService.nextStep();
  }

}
