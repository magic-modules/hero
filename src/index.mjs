export const View = ({ state, ...props }) => {
  if (typeof props === 'string') {
    props = {
      src: props,
    }
  }

  const {
    src,
    heading = state.title,
    branding = state.description,
  } = props

  CHECK_PROPS({ ...props, src, heading, branding }, propTypes, 'Hero')
  if (!src) {
    return
  }

  const p = {}
  if (!props.class) {
    p.class = 'Hero'
  } else if (!props.class.includes('Hero')) {
    p.class = `Hero ${props.class}`
  }

  if (props.width || props.height) {
    p.style = p.style || {}
    if (props.width) {
      p.style.width = props.width
    }
    if (props.height) {
      p.style.height = props.height
    }
  }

  return div(p, [
    Img({ class: 'HeroImg', src }),
    heading && h1(heading),
    branding && div({ class: 'branding' }, branding),
  ])
}

export const style = {
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',

  'h1, div': {
    position: 'relative',
    textAlign: 'center',
    margin: '1em 0',
  },

  img: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  },
}

export const propTypes = {
  Hero: [
    { type: 'string' },

    { key: 'src', type: 'string' },
    { key: 'width', type: ['string', 'number'] },
    { key: 'height', type: ['string', 'number'] },
    { key: 'heading', type: ['string', 'array'] },
    { key: 'branding', type: ['string', 'array'] },
  ],
}