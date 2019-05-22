Test app for Electron issue #16212
===

The issue is that a transparent `BrowserView` stops being transparent once the
page is reloaded.

You can test it by running:

* `npm install`
* `npm start`
* reload one of the browserview through their devtools page

It only affects the one that is reloaded. The only way to fix (AFAICT) is to
recreate the `BrowserView` from scratch.

See [#16212@electron](https://github.com/electron/electron/issues/16212)
