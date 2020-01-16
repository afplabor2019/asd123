import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AdvertisementComponent } from '../advertisement/advertisement.component';
import { ContactComponent } from '../contact/contact.component';
import { EmailComponent } from '../email/email.component';
import { LogosComponent } from '../logos/logos.component';
import { ProductsComponent } from '../products/products.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, HomeComponent, AboutComponent, AdvertisementComponent, ContactComponent, EmailComponent, LogosComponent, ProductsComponent, SlideshowComponent],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});