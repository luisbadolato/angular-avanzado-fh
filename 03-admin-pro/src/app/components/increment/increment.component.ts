import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass = `btn btn-${this.btnClass}`;
  }

  @Input('progressValue') progress: number = 0;
  @Input() btnClass: string = 'primary';

  @Output() valueOutput: EventEmitter<number> = new EventEmitter();

 

  cambiarValor(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      this.valueOutput.emit(100);
      return this.progress = 100;
    } 
    
    if (this.progress <= 0 && valor <= 0) {
      this.valueOutput.emit(0);
      return this.progress = 0;
    } 
    
    this.progress += valor;
    return this.valueOutput.emit(this.progress);
    
  }

  onChange(newValue: number) {

    if(newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.valueOutput.emit(newValue);
    }

  }

}
