import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePubliComponent } from './home-publi.component';

describe('HomePubliComponent', () => {
  let component: HomePubliComponent;
  let fixture: ComponentFixture<HomePubliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePubliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
