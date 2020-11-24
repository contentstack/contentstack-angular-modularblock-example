import { Component, OnInit } from '@angular/core';
import { ContentstackService } from '../modules/contentstack/contentstack.service';

const CONTENT_TYPE_UID = 'landing_pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private cs: ContentstackService) { }

  entryText: any = {};
  getEntry() {
    this.cs
      .stack()
      .ContentType(CONTENT_TYPE_UID)
      .Query()
      .includeReference([
        'modular_blocks.products.reference',
        'modular_blocks.products.reference.categories',
        'modular_blocks.category_sales.categories.category',
        'modular_blocks.trending.categories.category'
      ])
      .toJSON()
      .find()
      .then(
        entry => {
          this.entryText = entry[0][0];
        },
        err => {
          console.log(err, 'err');
        }
      );
  }
  ngOnInit() {
    this.getEntry();
  }
}
