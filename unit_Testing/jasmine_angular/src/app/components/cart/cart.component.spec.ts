import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { cartService } from 'src/app/services/cart.service';
import { By } from '@angular/platform-browser';

import { DebugElement } from '@angular/core';
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartServiceObj: cartService;
  let button: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartServiceObj = TestBed.inject(cartService);
    button = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test counter value  should start with 0', () => {
    expect(component.counter).toBe(0);
  });
  it('test counter value should equal to 1 after call Counter function', () => {
    component.Counter();
    expect(component.counter).toBe(1);
  });

  it('should call getCart Function from service in ngOnInit', () => {
    spyOn(cartServiceObj, 'getCart');
    component.ngOnInit();
    expect(cartServiceObj.getCart).toHaveBeenCalled();
    expect(cartServiceObj.getCart).toHaveBeenCalledTimes(1);
  });

  it('should emit an event when the button is clicked', () => {
    spyOn(component, 'onClick');
    button.triggerEventHandler('click', null);
    expect(component.onClick).toHaveBeenCalled();
  });
});
