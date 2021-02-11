import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Value_type } from './interface/value-type';
@Injectable({
  providedIn: 'root'
})
export class ServingService {

  readonly url = './assets/data/value.json';
  constructor(private http:HttpClient) { }
  
  getuserdata():Observable<Value_type[]>{
    return this.http.get<Value_type[]>(`${this.url}`)
  }
}
