import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyItemsComponent } from './many-items.component';

describe('ManyItemsComponent', () => {
  let component: ManyItemsComponent;
  let fixture: ComponentFixture<ManyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManyItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
