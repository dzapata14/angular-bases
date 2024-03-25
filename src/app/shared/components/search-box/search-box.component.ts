import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder:string ="";

  @ViewChild('txtInput') txtInput!: ElementRef;

  @Input()
  public initialValue: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer.
    pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      console.log('debouncer value', value);
      this.emitValue();
    })

    this.txtInput.nativeElement.value = this.initialValue;
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  public emitValue():void {
    this.onValue.emit(this.txtInput.nativeElement.value);
  }

  public onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }

}
