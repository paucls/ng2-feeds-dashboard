import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { Feed } from './feed';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
  providers: [FeedService]
})
export class FeedCardComponent implements OnInit {

  feed: Feed;

  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
    this.feedService
      .getFeed('http://elpais.com/tag/rss/futbol/a/')
      .subscribe(feed => this.feed = feed);
  }

}
