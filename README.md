# Povizio

a web app for [United Way of Central Carolinas](http://www.uwcentralcarolinas.org/) to: create more awareness about poverty in Charlotte:

* create awareness about poverty using real Charlotte data
* simulate tough choices made by those in poverty 
* give links to share, to donate, and volunteer

Povizio is a play on words for poverty, visual awareness, and choices 

# React Base App

This app uses [React](http://facebook.github.io/react/) and [Material UI](http://material-ui.com/#/)

# Setup

* `git clone https://github.com/Skookum/generator-genreact.git`

# Get Hacking

* `npm install`
* `npm start` or `npm run start-windows`
* `open localhost:4000`

## Components

Components are the building blocks of your application. Think of them like Web
Component, but better. They have clear compositional boundaries, care their CSS
and behavior with them, and your application understands these dependencies so
bundling for production is trivial.

**Examples:**

* `yo Genreact:component MyComponentName`

This will generate the following file structure in `./app/components`.

```
|- MyComponentname/
  |- index.js
  |- styles.css
  |- __test__/
    |- index.js
```

### Handlers

Handlers are almost synonymous with a route or URL. Think of these as the entry
point to a specific part of your application.

**Examples:**

* `yo Genreact:handler MyPageHandler`
* `yo Genreact:handler MyPageHandler/MySectionHandler`

The key difference is whether it’s a top-level route or a child route. This
command will create the following structure and attempt to add it to the
appropriate location in your `routes.js file.

### Components: Revisited

You’ve generated a few components and now you have a few pages. We’ve already
seen the structure that a component generates and requires. To generate
additional, section-specific components, you would do the following:

**Examples:**

* `yo Genreact:component MyFlashyComponent`
  --> `./app/components/MyFlashComponent`
* `yo Genreact:component MyPageHandler/MyFlashyComponent`
  --> `./app/MyPageHandler/components/MyFlashComponent`
* `yo Genreact:component MyPageHandler/MySectionHandler/MyFlashyComponent`
  --> `./app/MyPageHandler/MySectionHandler/components/MyFlashComponent`

## A few of the things you get

Pablo Picaso said that great artists steal. Whilst not a copy-paste deal
(plagiarism), this toolchain takes the best practices and experiences we’ve had
creating great consumer products and bundles it together for us in a package
that allows us to not just get up and running quickly, but to iterate
effectively.

A few of the things that you will find in here:

* An amazing development environment. There is hot-reload tooling for both the
  client and server built-in.
* A component architecture with colocated concerns.
* Test suites that are ready to go.
* A UI toolchain. We expect and prefer that you’re data layer be somewhere else.
  The data and UI layers should be able to scale independently as needed.
* SuitCSS conformance checking. CSS in and of itself includes many foot-guns.
  Suit will keep the safety on. (We will likely be exploring other more
  restrictive options in the future)
* Rich documentation and style guide web interface.

Ideally, in this environment you should have less to think about while writing a
component. You don’t need to worry about how compilation happens or how to
ensure that the CSS a component needs gets onto a page. You shouldn’t need to
worry about how the final files are delivered to a client in production. These
are all practices that are understood well, but full of nuance and tradeoffs. We
have tuned—and continue to tune—these characteristics.

## Tools in Use

* Webpack
* React
* react-router
* react-resolver
* jest

## License

This generator and toolchain is MIT Licensed. The projects and tools we bring
together for you each have their own license and terms you should be aware of.
