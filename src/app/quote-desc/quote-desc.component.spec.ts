import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDescComponent } from './quote-desc.component';

describe('QuoteDescComponent', () => {
  let component: QuoteDescComponent;
  let fixture: ComponentFixture<QuoteDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
