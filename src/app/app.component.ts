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
      .bufferTime(250) // 250ms以内のイベントを配列にまとめる
      .map(x => x.length) // 配列を配列の長さに変換
      .filter(length => length >= 2)
      .do(_ => console.log('double click'))
      .map(_ => 1)
      .scan((acc, value) => acc + value)
      .subscribe(value => this.value = value);
  }
}
