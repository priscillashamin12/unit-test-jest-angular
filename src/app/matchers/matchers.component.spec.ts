import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // toBe -> strict equality
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  });

  // toEqual -> check values in Object
  it('Object values', () => {
    const data = {name:"Tech"}
    expect(data).toEqual({name:"Tech"});
  });

  // Truthiness 
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // Numbers 
  it('two plus two', () => {
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.1;
    // expect(value).toBe(0.3); //This won't work. toBe & toEqual must not be used.
    expect(value).toBeCloseTo(0.2); //It works as it rounds off.
  });

  //Strings
  it('there is no D in tech', () => {
    expect('tech').not.toMatch(/D/); 
  });

  it('there is no "ech" in tech', () => {
    expect('tech').toMatch(/ech/); 
  });

  //Arrays and Iterables
  it('the shopping list has milk on it', () => {
    const shoppingList = [
      'butter',
      'salt',
      'milk'
    ]
    expect(shoppingList).toContain('milk'); 
    expect(new Set(shoppingList)).toContain('milk'); 
  });

  //Exception
  it('compiling android goes as expected', () => {
    expect(() => component.compilerAndroidCode()).toThrow(); 
    expect(() => component.compilerAndroidCode()).toThrow(Error); 

    // You can also use the exact error msg or regexp
    expect(() => component.compilerAndroidCode()).toThrow('you are using Old Angular'); 
    expect(() => component.compilerAndroidCode()).toThrow(/Angular/); 
  });
});
