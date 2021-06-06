import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor(private stepService: StepService, private Dataservice: DataService)  {}
  public nameInput:string="";
  public accost:string="";
  ngOnInit(): void {
  }
  Name(){
    if(!this.nameInput && !this.accost)
    {
      alert("Nincs megadva név");
    } 
    else{
      this.Dataservice.setName(this.nameInput,this.accost);
      this.stepService.nextStep();
    }
  }

}
