import { writable } from 'svelte/store';

export const articles = writable([
	{
        id: 1,
        title: 'A Year of Web Development',
        subtitle: 'I have rebuilt this blog way too many times.',
        date: '4/18/2020',
        preview: 'webdev-year.svg',
        link: 'webdev-year',
        tags: ['Webdev', 'React']
	},
	{
        id: 2,
        title: '3D Terrain in Deck.gl',
        subtitle: 'Experimental 3D tiles are fun.',
        date: '3/03/2020',
        preview: 'terrain-map.gif',
        link: 'deck-terrain',
        tags: ['Mapping', 'Deck.gl']
    },
    {
        id: 3,
        title: 'Learning DevOps, Unfortunately',
        subtitle: 'Accepting my fate and building robust software.',
        date: '10/26/2019',
        preview: 'learning-devops.png',
        link: 'learning-devops',
        tags: ['Webdev', 'Docker']
      },
      {
        id: 4,
        title: 'Mapping Cyclist Safety in New York City',
        subtitle: 'Is there a relationship between bike path access and cyclist injuries?',
        date: '9/11/2019',
        preview: 'cyclist-safety.svg',
        link: 'cyclist-safety',
        tags: ['Transit', 'sf']
      },                       
      {
        id: 5,
        title: 'Year One in Review',
        subtitle: 'A reflection on my first year (and change) in the real world.',
        date: '8/04/2019',
        preview: 'year-one.png',
        link: 'year-one',
        tags: ['Career']
      },     
      {
        id: 6,
        title: 'MTA Doom and Gloom',
        subtitle: 'Is the subway system as dire as we say it is?',
        date: '4/14/2019',
        preview: 'mta-doom-gloom.gif',
        link: 'MTA-doom-gloom',
        tags: ['Transit', 'Plotly']

      },
      {
        id: 7,
        title: 'Shiny is Cool as Hell',
        subtitle: 'A surprisingly intuitive tool for data democratization.',
        date: '4/2/2019',
        preview: 'shiny-is-cool.jpg',
        link: 'shiny-cool',
        tags: ['Webdev', 'Shiny']


      },
      {
        id: 8,
        title: 'New Year, New (First) Blog',
        subtitle: 'Trying my best.',
        date: '1/24/2019',
        preview: 'new-blog.jpg',
        link: 'new-blog',
        tags: ['Career']
      }
]);

