import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">Angular 4</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left">
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/posts">Posts</a></li>
            <li><a routerLink="/about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class MainNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
