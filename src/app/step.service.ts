import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StepService {
  step: number = 0;
  private subject = new Subject<any>();
  constructor() { }


  nextStep(): void{
    this.step++;
    this.subject.next(this.step);
  }
  backStep(): void{
    this.step--;
    this.subject.next(this.step);
  }

  onChange(): Observable<any> {
    return this.subject.asObservable();
  }

  
}
