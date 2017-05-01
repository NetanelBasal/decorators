import { Observable } from "rxjs/Observable";

function toJSON() {
  return this.map(( response : Response ) => response.json());
}

Observable.prototype.toJSON = toJSON;

declare module "rxjs/Observable" {
  interface Observable<T> {
    toJSON : typeof toJSON;
  }
}