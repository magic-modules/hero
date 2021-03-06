export const state = {
  title: '@magic-modules/hero',
  description: 'embeds a hero module at the top of your page.',
  logotext: 'Hero',

  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-default-arguments', text: 'default arguments' },
        { to: '-hide', text: 'hide parts' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}

export const style = {
  '.Hero': {
    color: '#000000',
  },
}
