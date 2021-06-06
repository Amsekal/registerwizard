import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor(private stepService: StepService, private Dataservice: DataService){}


  s1:string="";
  s2:string="";
  s3:string="";
  l1:string="";
  l2:string="";
  l3:string="";
  ll1:string="";
  ll2:string="";
  ll3:string="";
  lic:string="";
  ss1:string="";
  ss2:string="";
  ss3:string="";
  all:string="";



  Skill:boolean=false;
  Language:boolean=false;

Skills( s1:string,
s2:string,
s3:string,
l1:string,
l2:string,
l3:string,
ll1:string,
ll2:string,
ll3:string,
lic:string,
ss1:string,
ss2:string,
ss3:string){
  this.all=s1+' '+ss1+', '+s2+' '+ss2+', '+s3+' '+ss3+', '+l1+' '+ll1+', '+l2+' '+ll2+', '+l3+' '+ll3+', '+'License= '+lic;
  this.Dataservice.setSkills(this.all);
  this.stepService.nextStep();
}
Skillsb(){this.stepService.backStep();}
  ngOnInit(): void {
  }

  toggleSkill(){
    this.Skill=!this.Skill;
  }

  toggleLanguage(){
    this.Language=!this.Language;
  }
}

