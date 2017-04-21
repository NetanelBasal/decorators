import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Home page</h1>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor( public store : Store<any> ) {

  }

  ngOnInit() {

  }

}
