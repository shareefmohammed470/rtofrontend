import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleinfoService {

  constructor(private httpclient: HttpClient) {
  
   }
   url =  'https://rtobackendapi.azurewebsites.net/';
  //  url =  'http://localhost:58928/';

   RegisterVehicle(obj){
    return this.httpclient.post<any>(this.url +'api/Registration/RegisterVehicle',obj);
   }
}
