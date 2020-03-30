import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDescComponent } from './quote-desc/quote-desc.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import {FormsModule} from '@angular/forms';
import { LeaderDirective } from './leader.directive';
import { DateCounterPipe } from './date-counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDescComponent,
    QuoteFormComponent,
    LeaderDirective,
    DateCounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
