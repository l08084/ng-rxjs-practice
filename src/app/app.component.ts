import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `{{ value }}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = 0;

  ngOnInit() {
    Observable.fromEvent(document, 'click')
    .map(_ => 1)
    .scan((acc, value) => acc + value)
    .subscribe(value => this.value = value);
  }
}
