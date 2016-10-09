import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from './feed.service';
import { Feed } from './feed';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
  providers: [FeedService]
})
export class FeedCardComponent implements OnInit {

  @Input() url: string;
  feed: Feed;

  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
    this.feedService
      .getFeed(this.url)
      .subscribe(feed => {
        this.feed = feed;
        this.feed.items = (feed.items ? feed.items.slice(0, 5) : []);
      });
  }

}
