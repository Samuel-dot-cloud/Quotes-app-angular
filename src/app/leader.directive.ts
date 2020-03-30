import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import {Quote} from 'src/app/quote';
import {all} from 'q';

@Directive({
  selector: '[appLeader]'
})

export class LeaderDirective {
@Input('appLeader') quotes;
constructor(private el: ElementRef) {


let highestId;
let vote = 0;
const allQuotes = this.quotes[0];
const currentQuote = this.quotes[1];
allQuotes.forEach(quote => {
if (quote.upvote > vote) {
vote = quote.upvote;
highestId = quote.upvote;
}
});

if (currentQuote.upvote === highestId) {
  this.el.nativeElement.style.backgroundColor = 'gold';
  this.el.nativeElement.style.color = 'white';
 }


}



}
