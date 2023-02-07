import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent {

  @Input()
  public colorBtn: string = 'btn btn-primary';

  //recebe valor
  @Input()
  public progresso: number = 10;

  //emite valor
  @Output()
  emitirValor: EventEmitter<number> = new EventEmitter<number>();


  constructor() {}

  public incrementProgress(value: number): void {
    console.log(this.progresso);

    if (this.progresso < 100) {
      this.emitirValor.emit(this.progresso += value);
      return;
    }

    this.emitirValor.emit(this.progresso = 100);
  }

  public decrementProgress(value: number): void {
    console.log(this.progresso);
    if ((this, this.progresso <= 0)) {
      this.emitirValor.emit(this.progresso = 0);
      return;
    }
    this.emitirValor.emit(this.progresso -= value);
  }

  public onChange(value: number): void {
    console.log('change: ', value);

    if(value > 100){
      this.progresso = 100;
    } else if(value < 0) {
      this.progresso = 0;
    } else if(value === null || value === undefined) {
      this.progresso = 0;
    }
    else {
      this.progresso = value;
    }

    this.emitirValor.emit(this.progresso);

  }
}
