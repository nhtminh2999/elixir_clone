import logo from '../../../assets/logo-dark.png';

export const headerModel = {
  logo,
  homePagePath: '/',
  navigation: [
    {
      id: 0,
      title: 'Home',
      path: '#home'
    },
    {
      id: 1,
      title: 'Intro',
      path: '#intro'
    },
    {
      id: 3,
      title: 'About',
      path: '#about',
      sub: [
        {
          id: 0,
          title: 'Why choose Elixir',
          path: '#why-choose-elixir',
        },
        {
          id: 1,
          title: 'Things you get',
          path: '#things-you-get',
        },
        {
          id: 2,
          title: 'Global Leadership',
          path: '#global-leadership',
        },
      ]
    },
    {
      id: 2,
      title: 'Service',
      path: '#menu',
    },

    {
      id: 4,
      title: 'News',
      path: '#news',
    },
    {
      id: 5,
      title: 'Contact',
      path: '#contact',
    },
  ]
}