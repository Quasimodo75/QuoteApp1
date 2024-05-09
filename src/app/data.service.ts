import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // this is the api url 

    private apiUrl = ' https://type.fit/api/quotes'; 
  
    constructor(private http: HttpClient) {}
  
    getData(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/data`);
    }
  
    postData(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/data`, data);
    }
  
   
  }
