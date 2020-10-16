import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryEquivalencyComponent } from './industry-equivalency.component';

describe('IndustryEquivalencyComponent', () => {
  let component: IndustryEquivalencyComponent;
  let fixture: ComponentFixture<IndustryEquivalencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryEquivalencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryEquivalencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
