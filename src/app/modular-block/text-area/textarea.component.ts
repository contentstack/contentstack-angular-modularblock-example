import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextAreaComponent implements OnInit {
  constructor() { }
  @Input() textarea: any;
  ngOnInit(): void { }
}
