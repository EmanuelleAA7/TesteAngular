import { Component, OnInit } from '@angular/core';
import { Login}    from '../login';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

login = new Login();

// model = new Login('aaa', 'teste');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
// get diagnostic() { return JSON.stringify(this.model); }




}



