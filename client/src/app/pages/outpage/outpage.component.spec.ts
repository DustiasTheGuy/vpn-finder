import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpageComponent } from './outpage.component';

describe('OutpageComponent', () => {
  let component: OutpageComponent;
  let fixture: ComponentFixture<OutpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
