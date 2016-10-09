import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  constructor() { }

  getFeed(url: String) {
    return {
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
