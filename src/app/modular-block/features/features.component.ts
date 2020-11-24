import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: [
    './features.component.css',
    '../../../../node_modules/ionicons/dist/scss/ionicons.scss',
  ],
})
export class FeaturesComponent implements OnInit {
  constructor() { }
  @Input() features: any;
  ngOnInit(): void { }
}
