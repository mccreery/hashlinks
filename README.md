# HashLinks
HashLinks is a Firefox extension which adds context menu items to directly
access hash links to parts of a webpage.

## What is a hash link?
Webpages are built from blocks called HTML elements. Elements can be given a
unique ID within the page. Adding a '#' and this ID to the end of the page URL
scrolls the page to that element whenever the link is opened.

## Why do I need this extension?
On few pages, the developers add a link near each heading to its hash. You may
have seen these links (for example, on GitHub) marked with a link icon or a #
symbol.

But almost all pages define IDs for headings, content blocks and so on. Usually
the only way to access their hash links is to inspect the HTML code using
developer tools, find the ID and add the suffix manually. HashLinks allows you
to avoid this in a couple of clicks.

## Build
```sh
npm install
npm run build
```

## Credits
Cursor icon made by [Freepik](https://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/)
