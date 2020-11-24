import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  constructor() { }
  @Input() trending: any;
  ngOnInit(): void { }
}
