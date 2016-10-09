import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  feed;

  constructor() {
  }

  ngOnInit() {
    this.feed = {
      status:'ok',
      feed:{
        title:'Noticias sobre Fútbol',
        link:'http://elpais.com/tag/futbol/a',
        description: 'Últimas noticias sobre Fútbol'
      },
      items:[
        {title:'México, sin jugar bien, gana a Nueva Zelanda (2-1)', link:'', pubDate:''},
        {title:'El ‘trumpismo’ contamina el fútbol', link:'', pubDate:''},
        {title:'Tostao: “Neymar será el mejor jugador de la historia de Brasil tras Pelé”', link:'', pubDate:''}
      ]
    };
  }

}
