import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder:string ="";

  @ViewChild('txtInput') txtInput!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public emitValue():void {
    this.onValue.emit(this.txtInput.nativeElement.value);
  }

}
