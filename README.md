# SVELTE-COURSE

Udemy - Svelte.js - The Complete Guide -course project

## Install

clone the repo and cd to project folder

```
    $ npm install
```

## Run

```
   $ npm run dev
```

Running this command may end up crashing the terminal (at least in Windows 10) if the default port is already in use.

If so, replace next line in your projects ``rollup.config.js`` -file

```javascript
!production && livereload('public'),
```
with this line.

```javascript
!production && livereload({ watch: 'public', port: 5002 }),
```

Choose a port number that works for you.

The default address for development server is ``http://localhost:5000``