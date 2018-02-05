import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InfoProvider {

  constructor(public http: HttpClient) {
  }

  getInfo(){
    return this.http.get("http://streaming21.hstbr.net/player/vinilfm/info.json");
  }

}
