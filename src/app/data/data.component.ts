import { Component, OnInit } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  serviceData:any;
  errorMessage:any;

  constructor(private fakeservice:FakeService) { }

  ngOnInit(): void {
    this.getServiceData()
  }

  getServiceData(){
    this.fakeservice.getDataV1().subscribe({
      next: data => {
        this.serviceData = data;
      },
      error:err =>{
        this.errorMessage = err.statusText;
      },
      complete:() => {
        console.log("Finished")
      }
  });
  }
}
