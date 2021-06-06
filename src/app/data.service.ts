import { Injectable } from '@angular/core';
import {Datas} from './data'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public datas : Datas = 
    {
      name: "",
      accostname: "",
      picture: {} as File,
      avatar: 1,
      gender: 0,
      birthinfo: "",
      contact: "",
      skills: "",
    };

  setName(name:string,accost:string){
    this.datas.name=name;
    this.datas.accostname=accost;
    console.log(this.datas);
  }
  
  setProfile(picture:File){
    this.datas.picture=picture;
    console.log(this.datas);
  }

  setAvatar(avatar:number){
    this.datas.avatar=avatar;
    console.log(this.datas);
  }

  setGender(gender:number){
    this.datas.gender=gender;
    console.log(this.datas);
  }

  setBirth(birth:string){
    this.datas.birthinfo=birth;
    console.log(this.datas);
  }

  setContact(contact:string){
    this.datas.contact=contact;
    console.log(this.datas);
  }
  setSkills(skill:string){
    this.datas.skills=skill;
    console.log(this.datas);
  }
  }
