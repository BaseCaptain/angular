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
  date = new Date();

  ngOnInit(): void {
      this.angularFormTest = new FormGroup({
        name : new FormControl('', Validators.required),
        email : new FormControl('',Validators.email),
        phone : new FormControl('',Validators.minLength(10))
      })
  }

  // question in angular
  // 1. Pipes in angular --- Done
  // 2. Communication between components --- multiple ways
      // query params, input output
  // 3. Authguard
      // to secure your url
  // 4. Interceptor
  // 5. Lazy loading ---- Done

  // TODO
  // need to done
  // query params
  // path varidable
  // diff between normal and standalone application in angular



  // Agile Methodlogy
    // tool --- JIRA
    // Sprint ? -- > 2 week
    // backlog refinement ---> queries regarding task get resolved with Product owner
    // Sprint planning ----> task you are going to pickup in next sprint it is going to discuss
    // Sprint review ---> after your 2 week sprint got over, you will give review of your task to Product owner

    // benefits
    // tujhe doubt resolve hoote before starting your task
    // tujhe dsicussion hun janar tu kuthe task gheshil
    // if review madhe owner ni kahi changes sangitle tr te next sprint madhe cover hun janar
}
