# NotisJS🍞

A simple, lightweight, customizable toast library for JavaScript developers. no additional/external CSS file required
> This library is still **beta** so if there is any issue just report it 😁.

See the [Changelog](./CHANGELOG.md) for update information

## 🔗 CDN Via jsDelivr
https://cdn.jsdelivr.net/gh/Kjadapi/NotisJS/Notis/Notis.min.js?=v0.2-beta-2

## 💻 Simple live demo 
https://kjadapi.github.io/NotisJS/demo.html

## 👨‍💻 How to:
*link the JS file with your HTML:* 

Download the Notis.min.js / Notis.js files, you can use the CDN i provided too (recomended). Go to html and write 
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

### Predefined Color Templates (PCT). 
    
    A predefined theme designed to enhance the message style without much effort.
    Use PCT presets to quickly style your message:
    
    Notis.show('Hello', NotifyLength.SHORT, Theme.DARK);

    
    Available PCT's:
    • Theme.DEFAULT - Default theme
    • Theme.GREY - Grey bg / White text
    • Theme.DARK - Black bg / White text
    • Theme.BRIGHT - White bg / Black text
    • Theme.BLUE - Blue bg / White text
    • Theme.PURPLE - Purple bg / White text
    • Theme.INDIGO - Indigo bg / White text
    • Theme.LIGHT_BLUE - LightBlue bg / Black text
    • Theme.WT_LIGHT_BLUE - LightBlue bg / White text
  ️
### Custom Styling:
    
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
      
      ((Optional) you can customize the border width now: edgeFrame('color', 'borderWidth')) 

    
    For gradient background:
    
    Notis.show('Gradient', NotifyLength.SHORT)
      .linearGrad('to right', 'blue', 'cyan');
      
    You can add as many colors as you want
    
### Positioning the Message:

    To change the position of the message, use displayAt(); :

    
    Notis.show('Positioned', NotifyLength.SHORT)
      .displayAt("base-end");

    
    Available positions:
    • "base"   (bottom, center)
    • "head"   (top, center)
    • "start"   (left, center)
    • "end"   (right, center)
    • "base-start"   (bottom, left)
    • "base-end"   (bottom, right)
    • "head-start"   (top, left)
    • "head-end"   (top, right)
    
    Position names are case insensitive
    you can use smth like "hEaD-eNd"

  
### Animation:
   
    To add the animation, you use notisAnim(), example:
    
    Notis.show('Slide!', NotifyLength.SHORT)
      .notisAnim('slide-back-up');
    
    Available animations (more to come):
    • fade-in-out
    • slide-up
    • slide-down
    • slide-back-up
    • slide-back-down
    
### Global styling

    To set the default theme of the Notis message, 
    use Notis.setDefaults({..}). Ex:
    
    Notis.setDefaults({
      themeCol: 'color',   // Adjust the default bg color
      themeTxt: 'color',   // Adjust the default txt color
      edgeFrame: ['color', 'thickness(optional)'],   // Adjust the border color & border width
      notisAnim: 'animation',   // Adjust the default animation
      displayAt: 'position',   // Adjust the default position
      linearGrad: ['direction', 'color, 'color'],   // Adjust the default linear gradient color
      placement: 'queue'   // Make the toast appear one after another (Exclusive)
    })

## 📝 DevNotes 
See [`INFO.txt`](./INFO.txt) for more information
