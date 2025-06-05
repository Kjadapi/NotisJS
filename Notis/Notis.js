/* • Notis.js V0.1 beta
   • © Copyright 2025 Kjadapi
   • Published under MIT License, see LICENSE.txt
   • ! This library is still in beta version
   • Read INFO.txt for more info
*/
window.myMessage = (function() {
  const NotifyLength = {
    SHORT: 4000, 
    LONG: 7000, 
  };
  const Theme = {
    DEFAULT: 'Theme.DEFAULT',
    DARK: 'Theme.DARK',
    BRIGHT: 'Theme.BRIGHT',
    BLUE: 'Theme.BLUE',
    LIGHT_BLUE: 'Theme.LIGHT_BLUE',
    WT_LIGHT_BLUE: 'Theme.WT_LIGHT_BLUE',
    PURPLE: 'Theme.PURPLE',
    VIOLET: 'Theme.VIOLET',
    INDIGO: 'Theme.INDIGO',
  };
  const Pos = {
    BASE: 'Pos.BASE', 
    HEAD: 'Pos.HEAD',
    START: 'Pos.START', 
    END: 'Pos.END',
    HEADSTART: 'Pos.HEADSTART', 
    HEADEND: 'Pos.HEADEND', 
    BASESTART: 'Pos.BASESTART', 
    BASEEND: 'Pos.BASEEND', 
  };
  const windowMargin = parseInt(window.getComputedStyle(document.body).marginLeft);
  
  const easeOut = 'cubic-bezier(0,.45,.03,.96)';
  
  class dpisCoolClass {
    constructor() {
      this.queueAt = [];
      this.isShown = false;
      this.timeout = null;
      this.parentDiv = document.createElement('div');
      this.elementDiv = document.createElement('div');
      this.elementP = document.createElement('p');
      this.elementP.textContent = null;
      this.elementDiv.appendChild(this.elementP);
      this.parentDiv.appendChild(this.elementDiv);
      document.body.appendChild(this.parentDiv);
      this.parentDiv.style.position = 'fixed';
      this.parentDiv.style.display = 'flex';
      this.parentDiv.style.padding = '0';
      this.parentDiv.style.margin = '0';
      this.elementDiv.style.padding = '0';
      this.parentDiv.style.width = '100%';
      this.elementDiv.style.display = 'flex';
      this.elementDiv.style.width = '100%';
      this.elementP.style.fontFamily = 'Arial, Helvetica, sans-serif';
      this.elementP.style.boxShadow = '0 5px 16px 0 rgba(0, 0, 0, 0.08)'
      this.elementP.style.display = 'block';
      this.elementP.style.minWidth = '5px';
      this.elementP.style.position = 'relative';
      // PLS BRO DON'T TOUCH THIS
      this.parentDiv.style.left = `calc(0 - ${windowMargin}px)`;
      //this.parentDiv.style.left = '0';
      this.elementDiv.style.right = '0';
      this.elementP.style.backgroundColor = 'gray';
      this.elementP.style.color = 'white';
      this.elementP.style.padding = '14px';
      this.elementP.style.borderRadius = '17px';
      this.elementP.style.fontSize = '16px';
      this.elementP.style.textAlign = 'center';
      this.elementP.style.border = 'none';
      this.parentDiv.style.pointerEvents = 'none';
      this.elementDiv.style.pointerEvents = 'none';
      this.elementP.style.pointerEvents = 'none';
      this.elementP.style.visibility = 'hidden';
      this.toast = this.elementP;
      this.toast.style.opacity = '0';
      this.elementDiv.style.justifyContent = 'center';
      this.elementDiv.style.margin = '0';
    }
    
    show(message, duration, theme = Theme.DEFAULT) {
      this.toast.style.border = 'none';
      this.toast.style.borderColor = 'initial';
      this.parentDiv.style.top = '72vh';
      this.elementDiv.style.top = '72vh';
      this.elementDiv.style.justifyContent = 'center';
      this.elementDiv.style.margin = '0';
      this.elementP.style.left = `calc(0px - ${windowMargin}px)`;
      if (duration!==NotifyLength.SHORT && duration!==NotifyLength.LONG) {
        throw new Error(`Invalid duration value at > ('${message}', ${duration}); < specifically > ${duration} <. Use NotifyLength.SHORT or NotifyLength.LONG instead!`);
      }
      if (!message || message.trim() === '') {
        throw new Error('Message cannot be empty!');
      }
      switch (theme) {
        case Theme.DEFAULT:
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'grey';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.BRIGHT:
          this.toast.style.color = 'black';
          this.toast.style.backgroundColor = 'white';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.DARK:
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'black';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.BLUE:
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'blue';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.LIGHT_BLUE:
          this.toast.style.color = 'black';
          this.toast.style.backgroundColor = '#79C5DD';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.WT_LIGHT_BLUE:
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = '#79C5DD';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.PURPLE:
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'purple';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.VIOLET:
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'violet';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
        case Theme.INDIGO: 
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'indigo';
          this.toast.style.border = 'none';
          this.toast.style.backgroundImage = 'none'
          break;
      }
      this.toast.innerText = message;
      this.length = duration;
      this.notisAnim('fade-in-out');
      return this;
    }
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
    notisAnim(anm, dur = this.length) {
      if (dur!==this.length) {
        throw new Error('An error occured, switching back to fade-in-out');
      }
      switch (anm) {
        default:
          console.error(`Animation property "${anm}" is unrecognized, switching back to fade-in-out`);
        case 'fade-in-out':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transition ='opacity 0s';
          this.toast.style.opacity = '0';
          void this.toast.offsetWidth;
          this.toast.style.visibility = 'visible';
          this.toast.style.transition = 'opacity 0.3s ease-in-out'
          this.toast.style.opacity = '1';
          this.timeout = setTimeout(() => {
            this.toast.style.transition = 'opacity 0.4s ease-in-out';
            this.toast.style.opacity = '0';
            setTimeout(() => {
              this.toast.style.visibility = 'hidden';
              this.toast.style.willChange = 'auto';
            }, 400);
          }, dur);
          break;
        case 'slide-up':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(177px)';
          this.toast.style.transition ='opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          requestAnimationFrame(() => {
            this.toast.style.visibility = 'visible';
            this.toast.style.opacity = '1';
            this.toast.style.transform = 'translateY(0px)';
            this.toast.style.transition = `transform 0.25s ${easeOut}, opacity 0.2s ease-in-out`;
          });
          this.timeout = setTimeout(() => {
            this.toast.style.transition = 'opacity 0.4s ease-in-out';
            this.toast.style.opacity = '0';
            setTimeout(() => {
              this.toast.style.visibility = 'hidden';
              this.toast.style.willChange = 'auto';
            }, 400);
          }, dur);
          break;
        case 'slide-down':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(-160px)';
          this.toast.style.transition = 'opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          requestAnimationFrame(() => {
            this.toast.style.visibility = 'visible';
            this.toast.style.opacity = '1';
            this.toast.style.transform = 'translateY(0px)';
            this.toast.style.transition = `transform 0.21s ${easeOut}, opacity 0.3s ease-in-out`;
          });
          this.timeout = setTimeout(() => {
            this.toast.style.transition = 'opacity 0.4s ease-in-out';
            this.toast.style.opacity = '0';
            setTimeout(() => {
              this.toast.style.visibility = 'hidden';
              this.toast.style.willChange = 'auto';
            }, 400);
          }, dur);
          break;
        case 'slide-back-up':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(295px)';
          this.toast.style.transition = 'opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          requestAnimationFrame(() => {
            this.toast.style.visibility = 'visible';
            this.toast.style.opacity = '1';
            this.toast.style.transform = 'translateY(-30px)';
            this.toast.style.transition = `transform 0.25s ${easeOut}, opacity 0.1s ease-in-out`;
            setTimeout(() => {
              this.toast.style.transform = 'translateY(0px)';
              this.toast.style.transition = `transform 0.2s cubic-bezier(.48,0,.57,1)`;
            }, 310);
          });
          this.timeout = setTimeout(() => {
            this.toast.style.transition = 'opacity 0.4s ease-in-out';
            this.toast.style.opacity = '0';
            setTimeout(() => {
              this.toast.style.visibility = 'hidden';
              this.toast.style.willChange = 'auto';
            }, 400);
          }, dur);
          break;
        case 'slide-back-down':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(-195px)';
          this.toast.style.transition = 'opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          requestAnimationFrame(() => {
            this.toast.style.visibility = 'visible';
            this.toast.style.opacity = '1';
            this.toast.style.transform = 'translateY(23px)';
            this.toast.style.transition = `transform 0.25s ${easeOut}, opacity 0.2s ease-in-out`;
            setTimeout(() => {
              this.toast.style.transform = 'translateY(0px)';
              this.toast.style.transition = `transform 0.2s cubic-bezier(.48,0,.57,1)`;
            }, 283);
          });
          this.timeout = setTimeout(() => {
            this.toast.style.transition = 'opacity 0.4s ease-in-out';
            this.toast.style.opacity = '0';
            setTimeout(() => {
              this.toast.style.visibility = 'hidden';
              this.toast.style.willChange = 'auto';
            }, 400);
          }, dur);
          break;
      }
      return this;
    }
    themeCol(col) {
      this.toast.style.backgroundColor = col;
      return this;
    }
    themeTxt(txt) {
      this.toast.style.color = txt;
      return this;
    }
    edgeFrame(frm) {
      this.toast.style.border = '1px solid';
      this.toast.style.borderColor = frm;
      return this;
    }
    linearGrad(direction, ...colors) {
      this.toast.style.backgroundImage = `linear-gradient(${direction}, ${colors.join(', ')})`;
      return this;
    }
    displayAt(pos) {
      switch (pos) {
        default:
          throw new Error(`Unidentified position property`)
        case Pos.BASE:
          this.parentDiv.style.top = '72vh';
          this.elementDiv.style.top = '72vh';
          this.elementDiv.style.margin = '0';
          break;
        case Pos.HEAD:
          this.parentDiv.style.top = '3vh';
          this.elementDiv.style.top = '3vh';
          this.elementDiv.style.margin = '0';
          break;
        case Pos.START:
          this.elementDiv.style.justifyContent = 'left';
          this.elementDiv.style.marginLeft = '30px';
          this.parentDiv.style.top = '50vh';
          this.elementDiv.style.top = '50vh';
          break;
        case Pos.END:
          this.elementDiv.style.justifyContent = 'right';
          this.elementDiv.style.marginRight = '30px';
          this.parentDiv.style.top = '50vh';
          this.elementDiv.style.top = '50vh';
          break;
        case Pos.BASESTART:
          this.parentDiv.style.top = '72vh';
          this.elementDiv.style.top = '72vh';
          this.elementDiv.style.justifyContent = 'left';
          this.elementDiv.style.marginLeft = '30px';
          break;
        case Pos.BASEEND:
          this.parentDiv.style.top = '72vh';
          this.elementDiv.style.top = '72vh';
          this.elementDiv.style.justifyContent = 'right';
          this.elementDiv.style.marginRight = '30px';
          break;
        case Pos.HEADSTART:
          this.parentDiv.style.top = '3vh';
          this.elementDiv.style.top = '3vh';
          this.elementDiv.style.justifyContent = 'left';
          this.elementDiv.style.marginLeft = '30px';
          break;
        case Pos.HEADEND:
          this.parentDiv.style.top = '3vh';
          this.elementDiv.style.top = '3vh';
          this.elementDiv.style.justifyContent = 'right';
          this.elementDiv.style.marginRight = '30px';
          break;
      };
      return this;
    }
  }
  return {
    Notis: new dpisCoolClass(), 
    Theme, 
    NotifyLength, 
    Pos, 
  };
})();
const {Notis, Theme, Pos, NotifyLength} = myMessage;