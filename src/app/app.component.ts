import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MilesTrial';
  data = new FormGroup(
    {
      "user_name": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      "user_email": new FormControl('', [Validators.required, Validators.email]),
      "user_password": new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(14)])
    }

  );

  constructor(
    private api: ApiService
  ) {

  }
  ngOnInit(){
    //just for resetting the token
    localStorage.removeItem('token');
  }
  addUsers() {
    if (this.data.invalid) {
      alert("Fill the form");
    } else {
      console.log(this.data.value);
      this.api.addUsers(this.data.value).subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.error(err);
        }
      })
    }
  }

}
