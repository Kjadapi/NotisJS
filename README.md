# NotisJS🍞

A Simple lightweight customizable toast library for front-end developers. no css file required
> This lib is still beta so if there is any issue just report it😁

## 🔗 CDN Via jsDelivr
https://cdn.jsdelivr.net/gh/Kjadapi/NotisJS/Notis/Notis.min.js?=v0.1beta2

## 👨‍💻 How to:
*link the JS file with your HTML:* 

Download the Notis.min.js / Notis.js files, you can use the CDN i provided too. Go to html and write 
`<script src="Notis.min.js"></script>` 

*Show message:*

In your JS file write these codes: 

(Short message):
`Notis.show('Your message', NotifyLength.SHORT);`

(Long message):
`Notis.show('Your message', NotifyLength.LONG);`

> Note: You can't use raw millisecond values like 3000. Only `NotifyLength.SHORT` (4 sec) or `NotifyLength.LONG` (7 sec) are allowed.

## ✨ Customization 

There are many ways to customize the look of the Notis toast:

• Predefined Color Templates (PCT). 
    
    A predefined theme designed to enhance the message style without much effort.
    Use PCT presets to quickly style your message:
    
    Notis.show('Hello', NotisLength.SHORT, Theme.DARK);

    
    Available PCT's:
    • Theme.DEFAULT - Gray bg / White text
    • Theme.DARK - Black bg / White text
    • Theme.BRIGHT - White bg / Black text
    • Theme.BLUE - Blue bg / White text
    • Theme.PURPLE - Purple bg / White text
    • Theme.INDIGO - Indigo bg / White text
    • Theme.LIGHT_BLUE - LightBlue bg / Black text
    • Theme.WT_LIGHT_BLUE - LightBlue bg / White text
  ️
• Custom Styling:
    
    You can fully customize the style with:
    
    .themeCol() // Define your own custom background color 
    
    .themeTxt() // Define your own custom text color
    
    .edgeFrame() // Add & adjust the border color
    
    .linearGrad() // Add a background linear gradient effect

    
    Example:↓
    Notis.show('Custom', NotifyLength.SHORT)
      .themeCol('#333') // Bg color
      .themeTxt('white') // Text color
      .edgeFrame('magenta'); // Border effect

    
    For gradient background:
    
    Notis.show('Gradient', NotifyLength.SHORT)
      .linearGrad('to right', 'blue', 'cyan');
    
• Positioning the Message:

    To change the position of the message, use displayAt(); :

    
    Notis.show('Positioned', NotifyLength.SHORT)
      .displayAt(Pos.HEADEND);

    
    Available positions:
    • Pos.HEAD, Pos.BASE  (top / bottom center)
    • Pos.HEADSTART, Pos.HEADEND (top left / right)
    • Pos.BASESTART, Pos.BASEEND (bottom left / right)
    • Pos.START, Pos.END (center left / right)

  
• Animation:
   
    To add the animation, you use notisAnim(), example:

    
    Notis.show('Slide!', NotifyLength.SHORT)
      .notisAnim('slide-back-up');

    
    Available animations (more to come):
    • fade-in-out
    • slide-up
    • slide-down
    • slide-back-up
    • slide-back-down

## 📝 DevNotes 
See `INFO.txt` for more information
