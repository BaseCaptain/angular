import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-form-project';
  angularFormTest : FormGroup | any;

  ngOnInit(): void {
      this.angularFormTest = new FormGroup({
        name : new FormControl('', Validators.required),
        email : new FormControl('',Validators.email),
        phone : new FormControl('',Validators.minLength(10))
      })
  }

  // question in angular
  // 1. Pipes in angular
  // 2. Communication between components
  // 3. Authguard
  // 4. Interceptor
}
