import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyBubbleComponent } from './crazy-bubble.component';

describe('CrazyBubbleComponent', () => {
  let component: CrazyBubbleComponent;
  let fixture: ComponentFixture<CrazyBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrazyBubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrazyBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
