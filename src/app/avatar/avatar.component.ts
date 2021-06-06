import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  constructor(private stepService: StepService, private Dataservice: DataService){}
  public id:number=0;
  ngOnInit(): void {
  }
  avatarSelect(newid:number){
    this.id=newid;
  }
  Avatar(){
    this.Dataservice.setAvatar(this.id);
    this.stepService.nextStep();
  }
  Avatarb(){
    
    this.stepService.backStep();
  }
}
