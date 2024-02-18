# Documentation notes

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.

## Internal design notes

### Styles

Tailwind is used for styling. Global styles are defined in `app.css`, variables are defined in `+page.layout.svelte`.

### Auth

Initially in login and register server files all the logic is processed. This is checked on in `index.server.js` and
in `hooks.server.js` on each load. Then, the language is stored in `locals` and can be accessed from any page
from `data` object.

### Language localization

Initially user will select the language on the first load. It will be added to the cookies and prefilled during
registration/login process. Then, it will be stored in `locals` and can be accessed from any page from `data` object.
When the user logins, the language will be updated from the database.
The user can change the language in the profile settings. It will be updated in the database and in the cookies.
`hooks.server.js` is responsible for the language localization. It checks for a cookie that was initially set during the
first visit/fetched from db and sets it if it is not present.
The `lang` value is then available on all server side via `locals` and via cookies on the front end. There we
set `locals` object with `lang` variable. It is
then fetched in `index.layout.server.js`. Then, it will be available in the `data` object on each page.
The default language is set in `hooks.server.js` and is `ru`.
To sum up, the lang value can be accessed in 3 ways:

- from any page from `data` object;
- from any server side file from `locals` object;
- from any client side file from `cookie` object.

## Page notes

### Oil page

Implemented functionality to download the oil data as a PDF file. This can be found in `PDFButton.svelte` component.
This component is not displayed on the page, because I am not sure if it fits the idea of the app.





