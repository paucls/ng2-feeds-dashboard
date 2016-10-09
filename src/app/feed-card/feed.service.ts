import { Injectable } from '@angular/core';
import { Feed } from './feed';

@Injectable()
export class FeedService {

  private rss2jsonApiEndpoint: string = 'http://rss2json.com/api.json?rss_url=';

  constructor() { }

  getFeed(url: String): Feed {
    return {
      status: 'ok',
      feed: {
        title: 'Noticias sobre Fútbol',
        link: 'http://elpais.com/tag/futbol/a',
        description: 'Últimas noticias sobre Fútbol'
      },
      items: [
        {title: 'México, sin jugar bien, gana a Nueva Zelanda (2-1)', link: '', pubDate: new Date(), guid: '', content: ''},
        {title: 'El ‘trumpismo’ contamina el fútbol', link: '', pubDate: new Date(), guid: '', content: ''},
        {
          title: 'Tostao: “Neymar será el mejor jugador de la historia de Brasil tras Pelé”',
          link: '', pubDate: new Date(), guid: '', content: ''
        }
      ]
    };
  }

}
