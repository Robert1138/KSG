import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampledashComponent } from './exampledash.component';

describe('ExampledashComponent', () => {
  let component: ExampledashComponent;
  let fixture: ComponentFixture<ExampledashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampledashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampledashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
