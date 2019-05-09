import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerResearchComponent } from './compiler-research.component';

describe('CompilerResearchComponent', () => {
  let component: CompilerResearchComponent;
  let fixture: ComponentFixture<CompilerResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilerResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
