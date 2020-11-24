import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() { }
  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;
  ngOnInit(): void { }
}
