import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  user: User = {
    username: null,
    email: null,
    password: null,
  };
  constructor(private _userService: UserService, private _route: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    this._userService.register(this.user).subscribe(data => {
      console.log('aqui');
      if( data == 'ok'){
        console.log("el dato es ",data);
        this._route.navigate(['/login']);
      } else {
        console.log('aqui');
        alert("Email not available")
      }
    })
  }

}
