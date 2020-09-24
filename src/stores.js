import { writable } from 'svelte/store';

export const darkMode = writable(false);

export const articles = writable([
	{
    id: 1,
    title: 'A Year of Web Development',
    subtitle: 'I have rebuilt this blog way too many times.',
    date: '8/29/2020',
    preview: 'webdev-year.svg',
    link: 'webdev-year',
    tags: ['Webdev', 'Svelte']
  },
  {
    id: 2,
    title: 'Data Visualization Patterns',
    subtitle: 'How I build interactive articles, essays, & analyses for the web.',
    date: '8/29/2020',
    preview: 'dataviz-patterns.svg',
    link: 'dataviz-patterns',
    tags: ['Data Viz', 'D3']
	},
  {
    id: 3,
    title: 'Learning DevOps, Unfortunately',
    subtitle: 'Accepting my fate and building robust software.',
    date: '10/26/2019',
    preview: 'learning-devops.svg',
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
    tags: ['Transit', 'Geospatial']
  },                       
  {
    id: 5,
    title: 'Year One in Review',
    subtitle: 'A reflection on my first year (and change) in the real world.',
    date: '8/04/2019',
    preview: 'year-one.svg',
    link: 'year-one',
    tags: ['Career']
  },     
  {
    id: 6,
    title: 'MTA Doom and Gloom',
    subtitle: 'Is the subway system as dire as we say it is?',
    date: '4/14/2019',
    preview: 'mta-doom-gloom.svg',
    link: 'MTA-doom-gloom',
    tags: ['Transit', 'Plotly']
  },
  {
    id: 7,
    title: 'Shiny is Cool as Hell',
    subtitle: 'A surprisingly intuitive tool for data democratization.',
    date: '4/2/2019',
    preview: 'shiny-is-cool.svg',
    link: 'shiny-cool',
    tags: ['Webdev', 'Shiny']
  },
  {
    id: 8,
    title: 'New Year, New (First) Blog',
    subtitle: 'Trying my best.',
    date: '1/24/2019',
    preview: 'new-blog.svg',
    link: 'new-blog',
    tags: ['Career']
  }
]);

export const projects = writable([
	{
    id: 1,
    title: 'Personal Website',
    subtitle: 'Many iterations of this website.',
    preview: 'personal-website.svg',
    link: 'personal-website'
	},
	{
    id: 2,
    title: 'Healthcare Rollcall',
    subtitle: 'A system to track the status of healthcare providers during and after a disaster.',
    preview: 'healthcare-rollcall.svg',
    link: 'healthcare-rollcall'
  },
  {
    id: 3,
    title: 'Mario',
    subtitle: 'A REST API for serving data from an R backend.',
    preview: 'mario.svg',
    link: 'mario'
  },
  {
    id: 4,
    title: 'Shinyhero',
    subtitle: 'An end-to-end pipeline for the DevOps-illiterate.',
    preview: 'shinyhero.svg',
    link: 'shinyhero'
  },
  {
    id: 5,
    title: 'Hiking Buddy',
    subtitle: 'Mapbox + Unity 3D = Me buying an Android developer license.',
    preview: 'hiking-buddy.svg',
    link: 'hiking-buddy'
  },
  {
    id: 6,
    title: 'Sync the City',
    subtitle: 'Synchronizing change throughout the city.',
    preview: 'sync-the-city.svg',
    link: 'sync-the-city'
  },
  {
    id: 7,
    title: 'Default Effect Study',
    subtitle: 'How does transparency in messaging impact renewable energy adoption?',
    preview: 'defaults-study.svg',
    link: 'default-effect-study'
  },
  {
    id: 8,
    title: 'Pro-Environmental Action Lab',
    subtitle: 'My work as a research associate in a sustainability psychology lab.',
    preview: 'pact-lab.svg',
    link: 'pact-lab'
  }
]);
