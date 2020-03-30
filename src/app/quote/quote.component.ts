import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes: Quote[] = [
new Quote(1, 'Do not fight a lion if you are not one yourself.', 'African proverb.', 'Sam King.', new Date(2020, 2, 30) ),
new Quote(2, 'In life you are either a passenger or a pilot...it is your choice.', 'Author unknown.', 'Sam King.', new Date(2020, 2, 30) ),
new Quote(3, 'If you do not run your own life...someone else will.', 'John Atkinson.', 'Sam King.', new Date(2020, 2, 30) ),
new Quote(4, 'You cannot have your cake and eat it too.', 'John Heywood.', 'Sam King.', new Date(2020, 2, 30) ),
new Quote(5, 'If you cannot do great things,do small things in a great way.', 'Napolean Hill.', 'Sam King.', new Date(2020, 2, 30) ),
];

addNewQuote(quote) {
  const quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.posted = new Date(quote.posted);
  this.quotes.push(quote);
}
toggleDetails(index: number) {
  this.quotes[index].displayDetail = !this.quotes[index].displayDetail ;
}


displayDetail(index: number) {
  this.quotes[index].displayDetail = !this.quotes[index].displayDetail;
}

deleteQuote(isDelete, index)  {
  if (isDelete) {

    const toDelete = confirm(`Are you sure you want to delete the quote: [${this.quotes[index].name}] ?`);

    if (toDelete) {
      this.quotes.splice(index, 1);
    }

  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
