import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../posts.reducer";
import { NgLog } from "../../angular-events-logger";

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>
    <p *ngFor="let post of posts">{{post.title}}</p>
  `,
  styles: []
})
@NgLog()
export class PostsComponent implements OnInit {
  @Input() posts : Post[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
