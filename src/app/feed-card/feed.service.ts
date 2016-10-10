import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Feed } from './feed';
// import { MOCK_FEED } from './mock-feed';

@Injectable()
export class FeedService {

  private rss2jsonApiEndpoint: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: Http) { }

  getFeed(url: String): Observable<Feed> {
    return this.http.get(this.rss2jsonApiEndpoint + url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let feed = response.json();
    return feed || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
