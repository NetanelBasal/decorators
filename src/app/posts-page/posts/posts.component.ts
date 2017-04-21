import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../posts.reducer";

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>
    <p *ngFor="let post of posts">{{post.title}}</p>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  @Input() posts : Post[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
