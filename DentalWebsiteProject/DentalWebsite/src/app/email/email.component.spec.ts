import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailComponent } from './email.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailComponent ],
      imports: [ FormsModule, HttpClientModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
