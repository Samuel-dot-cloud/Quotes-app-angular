import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-desc',
  templateUrl: './quote-desc.component.html',
  styleUrls: ['./quote-desc.component.css']
})
export class QuoteDescComponent implements OnInit {

  @Input () quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(Delete: boolean) {
    this.isDelete.emit(Delete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
