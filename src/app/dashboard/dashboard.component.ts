import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [LocalStorageService]
})
export class DashboardComponent implements OnInit {

  feedUrl: string = '';
  feedUrls: Array<string>;
  showAddFeedForm: boolean = false;

  private DEFAULT_FEED_URLS = [
    'http://elpais.com/tag/rss/futbol/a/',
    'http://www.superdeporte.es/elementosInt/rss/2',
    'http://ep00.epimg.net/rss/tags/ultimas_noticias.xml',
    'http://estaticos.elmundo.es/elmundo/rss/portada.xml'
  ];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.loadFeedUrls();
  }

  private loadFeedUrls() {
    this.feedUrls = this.localStorageService.get('feedUrls');

    if (!this.feedUrls) {
      this.localStorageService.save('feedUrls', this.DEFAULT_FEED_URLS);
      this.feedUrls = this.localStorageService.get('feedUrls');
    }
  }

  addFeedUrl(feedUrl: string) {
    this.feedUrls.push(feedUrl);
    this.localStorageService.save('feedUrls', this.feedUrls);

    this.showAddFeedForm = false;
  }

  clearForm() {
    this.feedUrl = '';
    this.showAddFeedForm = false;
  }

}
