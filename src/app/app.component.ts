import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Request, RequestMethod } from '@angular/http';


@Component({
  selector: 'app-root',
  template: ``,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = 0;

  constructor(private http: Http) {
  }

  ngOnInit() {

    // Observable.returnValue(`https://api.github.com/users`);
    // this.http.get(`https://api.github.com/users`)
    //   .map(res => res.json())
    //   .take(3)
    //   .subscribe(console.log);
    // Observable.of([5, 6, 3, 4])
    // .flatMap(value => Observable.of(value))
    // .take(3)
    // .subscribe(console.log);

    // Observable.from([1, 2, 3, 4, 5, 6])
    // .groupBy(value => value % 2 === 0)
    // .flatMap(observable => observable.toArray())
    // .subscribe(console.log);

    // Observable.from([1, 2, 3, 4, 5, 6])
    // .take(3)
    // .subscribe(console.log);


    this.http.get(`https://api.github.com/users`)
      .map(res => res.json())
      .flatMap(observable => Observable.from(observable))
      .take(3)
      // .map(user => user.login)
      .subscribe(console.log);
  }
}
