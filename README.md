# NotisJS🍞

A Lightweight customizable toast library for front-end developers.

## 🔗 CDN
https://cdn-notisjs.netlify.app/Notis.min.js

## 👨‍💻 How to:
*link the JS file with your HTML:* 

Download the Notis.min.js / Notis.js file above, you can use the CDN i provided too. Go to html and write 
`<script src="Notis.min.js"></script>` 

*Show message:*

In your JS file write: 

Short message:

`Notis.show('Your message', NotifyLength.SHORT);`

Long message:

`Notis.show('Your message', NotifyLength.LONG);`

> Note: You can't use raw millisecond values like 3000. Only NotifyLength.SHORT (4 sec) or NotifyLength.LONG (7 sec) are allowed.
