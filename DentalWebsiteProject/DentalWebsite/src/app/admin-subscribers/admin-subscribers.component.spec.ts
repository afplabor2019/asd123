import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscribersComponent } from './admin-subscribers.component';

import { HttpClientModule} from '@angular/common/http';

describe('AdminSubscribersComponent', () => {
  let component: AdminSubscribersComponent;
  let fixture: ComponentFixture<AdminSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubscribersComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
