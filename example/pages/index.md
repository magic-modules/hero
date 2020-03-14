# ${state.title}

this is the [@magic-modules](https://github.com/magic-modules) Hero component.

${state.description}

<GitBadges>@magic-modules/hero</GitBadges>

## installation

`npm install @magic-modules/hero`

## usage

in a page or module View

`<Hero state src="/img/hero.jpg"></Hero>`

### #usage-minimal minimal interface

will use state.title and state.description as default values for heading and branding.

```
&lt;Hero state src="/img/hero.jpg" width="500px" height="300px">&lt;/Hero>
```

renders

<Hero state src="/img/hero.jpg" width="500px" height="300px"></Hero>

## #usage- default arguments

@magic tries to keep the default arguments for the Hero sane.

```
&lt;Hero
  state
  src="/img/hero.jpg" // hero background image
  heading="string"    // fallback: props.heading || state.hero.title || state.title.
  branding="string"   // fallback: props.branding || state.hero.branding || state.description.
  height="100vh"      // default height, span over full view heigh
  width="100vw">      // default width, span over full view width
&lt;/Hero>
```

## #usage-hide hide heading or branding

you can hide various parts of the hero by setting their prop values to false.
if you do not pass title or branding as false,
the state.title and state.description variables will be used.

```
&lt;Hero
  state
  heading="false"
  branding="false">
&lt;/Hero>
```

## #usage- custom size

usually you might want to style the hero using your css.js files,',
but, if, as in this page,',
you want to instantiate them using dynamic properties,',
you can instead pass width and height values to the Hero module.',

```
&lt;Hero
  height="300px"
  width="500px">
&lt;/Hero>
```

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/hero/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
