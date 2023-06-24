import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
getProduct(){
  return this.http.get("https://fakestoreapi.com/products/category/electronics").pipe(map((res:any)=>{
return res;
  }))
}
}
