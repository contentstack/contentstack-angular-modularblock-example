import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  constructor() { }
  @Input() salescategory: any;
  ngOnInit(): void { }
}
