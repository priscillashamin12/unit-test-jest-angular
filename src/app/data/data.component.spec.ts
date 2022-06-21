import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeService } from '../services/fake.service';

import { DataComponent } from './data.component';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers:[
        {
            provide:FakeService, useValue: fakeServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fakeServiceMock = {
      getDataV1: jest.fn()
    }
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set service data', () => {
    const expRes = {
      name:"shamin"
    }
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expRes))
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expRes.name)
  });

  it('should getServiceData set error res', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not found'
    })
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(throwError(()=> errorResponse))
    component.getServiceData();
    expect(component.errorMessage).toBe('Not found')
  });
});
