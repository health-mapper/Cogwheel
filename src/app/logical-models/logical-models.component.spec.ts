import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalModelsComponent } from './logical-models.component';

describe('LogicalModelsComponent', () => {
  let component: LogicalModelsComponent;
  let fixture: ComponentFixture<LogicalModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicalModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
