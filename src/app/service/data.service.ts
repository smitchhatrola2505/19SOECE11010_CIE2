import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { iData } from '../Models/User'
@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  url = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http: HttpClient) { }
  
  getData(): Observable<iData[]> {
     return this.http.get<iData[]>(this.url);
  }
  Deleted(m:any){
    return this.http.delete<iData[]>(this.url+'/'+ 'id');
  }
}
