import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import {AdminProductsComponent} from '../admin-products/admin-products.component';

import { AdminSubscribersComponent } from '../admin-subscribers/admin-subscribers.component';


describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, AdminProductsComponent, AdminSubscribersComponent ],
      imports: [ FormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem("key", 'YcUcJwNM5sN9iSaNmGvF'); 
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
