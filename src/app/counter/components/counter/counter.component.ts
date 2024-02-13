import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="aumentar(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="aumentar(-1)">-1</button>`
})
export class CounterComponent {
  public counter:number = 10;

  aumentar(valor:number):void {
    this.counter+=valor;
  }

  reset= ():void => {
    this.counter = 10;
  }
}
