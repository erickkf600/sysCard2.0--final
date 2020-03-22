import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() value: number;
  @Input() color: string;
  @Output() ok = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onOkClicked() {
    this.ok.emit('OK' + this.value);
  }

}
