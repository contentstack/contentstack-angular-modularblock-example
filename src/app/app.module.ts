import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentstackModule } from '../modules/contentstack/contentstack.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './modular-block/category-sales/sales.component';
import { ProductComponent } from './modular-block/products/products.component';
import { TrendingComponent } from './modular-block/trending/trending.component';
import { FeaturesComponent } from './modular-block/features/features.component';
import { TextAreaComponent } from './modular-block/text-area/textarea.component';
import { FormComponent } from './modular-block/form/form.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    ProductComponent,
    TrendingComponent,
    FeaturesComponent,
    TextAreaComponent,
    FormComponent,
  ],
  imports: [BrowserModule, ContentstackModule.initializeApp(environment.config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
