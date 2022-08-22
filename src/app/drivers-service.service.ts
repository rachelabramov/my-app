import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DriversDataComponent } from './drivers-data/drivers-data.component';

export interface Drivers {
  name;
  Tz;
  street;
  city;
}

@Injectable({
  providedIn: 'root',
})

export class DriversServiceService {

  constructor(private http: HttpClient) {}

//  updateNewDriver(Newname: any,NewTz:any,Newstreet:any,Newcity:any) {
    
//     this.driversData.drivers.push({ name: Newname, Tz: NewTz,street:Newstreet,city:Newcity });
//   }

  getdrivers() {
    debugger;
    return this.http.get<any>('assets/Drivers.json')
      .toPromise()
      .then(res => <Drivers[]>res.data)
      .then(data => { return data; });
    }
    
}
