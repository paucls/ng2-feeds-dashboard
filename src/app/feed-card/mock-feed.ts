import { Feed } from './feed';

export const MOCK_FEED: Feed = {
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
