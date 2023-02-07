import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {

 public progresso1: number = 30;
 public progresso2: number = 45;

  constructor() {}


  public get getProgresso1() : string {
    return `${this.progresso1}%`;
  }

  public get getProgresso2() : string {
    return `${this.progresso2}%`;
  }

  public receberValor1( value: number): void {
    this.progresso1 = value;
    console.log('recebendo valor...', value);

  }

  public receberValor2( value: number): void {
    this.progresso2 = value;
    console.log('recebendo valor...', value);

  }



}
