import {Component, OnInit} from '@angular/core';
import {FeedService} from './feed.service';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
  providers: [FeedService]
})
export class FeedCardComponent implements OnInit {

  feed;

  constructor(private feedService:FeedService) {
  }

  ngOnInit() {
    this.feed = this.feedService.getFeed('http://elpais.com/tag/rss/futbol/a/');
  }

}
