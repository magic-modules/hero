export const View = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' Hero component. ',
    state.description,
  ]),

  GitBadges('magic-modules/hero'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install magic-modules/hero'),

  h2({ id: 'usage' }, 'usage:'),
  p('in a page or module View'),
  Pre("export const View = () => Hero('/img/hero.jpg')"),

  h3({ id: 'usage-minimal' }, 'minimal interface'),
  p('will use state.title and state.description as default values for heading and branding.'),
  Pre("Hero({ ...state, src: '/img/hero.jpg', width: '500px', height: '300px' })"),
  p('renders'),
  Hero({ ...state, src: '/img/hero.jpg', width: '500px', height: '300px' }),

  h2({ id: 'usage-default-arguments' }, 'default arguments'),
  p('@magic tries to keep the default arguments for the Hero sane.'),

  Pre(`Hero({
  src = '/img/hero.jpg',        // hero background image
  heading = 'string',  // fallback: props.heading || state.hero.title || state.title.
  branding = state.description, // fallback: props.branding || state.hero.branding || state.description.
  height = '100vh',             // default height, span over full view heigh
  width = '100vw',              // default width, span over full view width
})`),

  h2({ id: 'usage-hide' }, 'hide heading or branding'),
  p('you can hide various parts of the hero by setting their prop values to false (or omitting them).'),

  Pre(`
Hero({
  heading: false,
  branding: false,
})`),

  h2({ id: 'usage-custom-size' }, 'custom sizes'),
  p([
    'usually you might want to style the hero using your css.js files,',
    ' but, if, as in this page,',
    ' you want to instantiate them using dynamic properties,',
    ' you can instead pass width and height values to the Hero module.',
  ]),

  Pre(`
Hero({
  height: 'auto',
  width: 'auto',
})`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic-modules/hero/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]

export const style = {
  '.Hero': {
    color: '#000000',
  },
}