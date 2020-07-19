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
      }
]);

