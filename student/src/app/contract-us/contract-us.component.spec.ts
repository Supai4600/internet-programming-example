import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUsComponent } from './contract-us.component';

describe('ContractUsComponent', () => {
  let component: ContractUsComponent;
  let fixture: ComponentFixture<ContractUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
