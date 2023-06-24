import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, combineLatest } from 'rxjs';
import {Router} from '@angular/router'
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggedIn= new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signUp){
    return this.http.post('http://localhost:3000/login',data
    ,{observe:'response'}).subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['products'])
    })
  }
  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true);
      this.router.navigate(['products'])
    }
    else{
      this.router.navigate(['login'])
    }
  }

  userLogin(data:login){
    console.warn(data)
    return this.http.get(`http://localhost:3000/login?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.warn("Loggin")
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['products'])
        console.warn("hi")
        this.reloadUser()
      }
      else{
        console.warn("fail")
        window.alert("INVALID DETAILS")
      }
    })
  }
}
