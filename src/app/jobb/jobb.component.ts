import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {Subscription } from 'rxjs';
@Component({
  selector: 'app-jobb',
  templateUrl: './jobb.component.html',
  styleUrls: ['./jobb.component.scss']
})
export class JobbComponent implements OnInit {

  subscription: Subscription;
  Show = 0;
  constructor(private stepService: StepService) { 
    this.subscription = this.stepService.onChange().subscribe(
      value => this.Show = value
    );}

  ngOnInit(): void {
  }

}
