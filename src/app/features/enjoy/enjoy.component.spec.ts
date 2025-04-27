import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyComponent } from './enjoy.component';

describe('EnjoyComponent', () => {
  let component: EnjoyComponent;
  let fixture: ComponentFixture<EnjoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnjoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnjoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
