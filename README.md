# SVELTE-COURSE

Udemy - Svelte.js - The Complete Guide -course project

---

## Install

clone the repo and cd to project folder

```
    $ npm install
```

Create a Firebase project with realtime database and add ``env.js`` -file with following markup, to the root directory of the Svelte project.

Replace the ``<YOUR_FIREBASE_PROJECT_DATABASE_URL_HERE>`` with your Firebase Database Url.

```javascript
const environment = {
    FIREBASE_BASE_URL: '<YOUR_FIREBASE_PROJECT_DATABASE_URL_HERE>'
};

export default environment;
```

---

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