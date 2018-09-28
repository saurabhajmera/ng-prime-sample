import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablescrolldemoComponent } from './tablescrolldemo.component';

describe('TablescrolldemoComponent', () => {
  let component: TablescrolldemoComponent;
  let fixture: ComponentFixture<TablescrolldemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablescrolldemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablescrolldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
