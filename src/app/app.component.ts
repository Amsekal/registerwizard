import { Component } from '@angular/core';
import { Observable, Subject,Subscription } from 'rxjs';
import {StepService} from './step.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Show0:boolean=true;
  Show1:boolean=false;
  Show2:boolean=false;
  Show3:boolean=false;
  Show4:boolean=false;
  Show5:boolean=false;
  Show6:boolean=false;
  Show7:boolean=false;
  Show8:boolean=false;
  Component:number=0;
  title = 'registerwizard';

  

  subscription: Subscription;
  Show = 0;
  constructor(private stepService: StepService) { 
    this.subscription = this.stepService.onChange().subscribe(
      value => this.Show = value
    );
  }




}
