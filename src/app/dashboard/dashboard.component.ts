import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  feedUrls: Array<string>;

  constructor() {
    this.feedUrls = [
      'http://elpais.com/tag/rss/futbol/a/',
      'http://www.superdeporte.es/elementosInt/rss/2',
      'http://ep00.epimg.net/rss/tags/ultimas_noticias.xml',
      'http://estaticos.elmundo.es/elmundo/rss/portada.xml'
    ];
  }

  ngOnInit() {
  }

}
