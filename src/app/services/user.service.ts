import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  //metodo para registrarse
  register(user: User){
    console.log('user es:', user)
    let urlRegister = 'http://localhost:8080/api/user/register'
    let body = JSON.stringify(user);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
   return this.http.post(urlRegister, body, { headers})
       .pipe(
         map(res => {
           console.log(res.text());
           return res.text(); }
           ));

  }

  //metodo para logearse
  login(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:8080/api/user/login/'+ user.email +'/'+ user.password,{headers:headers})
      .pipe(
        map(res => res.text() ? res.json() : res)
      );

  }

  //metodo para extraer el usuario de la sesion
  isLogedIn(){
    if (sessionStorage.getItem('user')){
      return true;
    } else{
      return false;
    }
  }

}
