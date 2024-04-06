import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {
  results:any;
  constructor(
    private http: HttpClient
  ) {
    
  }
  
  ngOnInit() {
    this.results = this.http.get("https://jsonplaceholder.typicode.com/posts");
    console.log(this.results);
  }
}
