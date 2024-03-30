import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUsers(data:any){
    return this.http.post("http://localhost/MilesTrialPHP/addUsers.php",data);
  }
}
