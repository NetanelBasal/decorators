import { Injectable } from "@angular/core";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Http } from "@angular/http";

@Injectable()
export class PostsService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http : Http ) {
  }

  getPosts() {
    return this.http.get(this.URL);
  }
}