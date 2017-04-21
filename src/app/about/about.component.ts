import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <h1>About page</h1>
      <button (click)="store.dispatch({type: 'INCREMENT'})" class="btn btn-default">+</button>
      <button (click)="store.dispatch({type: 'DECREMENT'})" class="btn btn-default">-</button>
      <h4>{{ counter$ | async }}</h4>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  counter$ = this.store.select('about');

  constructor( public store : Store<any> ) {

  }

  ngOnInit() {
  }

}
