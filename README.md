# Interspecies Future Website

Repository for the Interspecies Future website and CMS.

## About

- [Eleventy](https://www.11ty.dev/) is the static site generator
- [Sanity](https://www.sanity.io/) is the CMS. Content is editable at [interspecies.sanity.studio](https://interspecies.sanity.studio/)
- This is a monorepo using [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
- The Sanity CMS configuration is in [`/studio`](/studio) and the Eleventy frontend code is in [`/web`](/web)
- All commands listed below can be run from the root repo directory

## Init

Install NPM dependencies:
```
npm install
```

## Dev

Start front-end dev server and watch for changes:
```
npm run web
```

Run sanity dev server:
```
npm run studio
```

## Build

Run front end build script (this is used by Netlify to deploy the site):
```
npm run build --workspace=web
```

Run the Sanity build process:
```
npm run build --workspace=studio
```

## Deploy

- Commits on the master branch automatically deploy the site on Netlify (https://interspecies.netlify.app/)

- Publishing content in Sanity also causes the site to deploy via a Netlify Webhook.

- Update the sanity studio in produciton (https://interspecies.sanity.studio/)

  ```
  cd studio && sanity deploy
  ```
  This requires [@sanity/cli](https://www.sanity.io/docs/getting-started-with-sanity-cli) to be installed locally.
