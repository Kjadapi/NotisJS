/* • Notis.js V0.2-beta
   • © Copyright 2025 Kjadapi
   • Published under MIT License, see LICENSE.txt
   • ! This library is still in beta version
   • Read INFO.txt for more info
*/
window.NotisMessage = (function() {
  const NotifyLength = {
    SHORT: 4000, 
    LONG: 7000, 
  };
  const Theme = {
    GREY: 'Theme.GREY',
    DARK: 'Theme.DARK',
    BRIGHT: 'Theme.BRIGHT',
    BLUE: 'Theme.BLUE',
    LIGHT_BLUE: 'Theme.LIGHT_BLUE',
    WT_LIGHT_BLUE: 'Theme.WT_LIGHT_BLUE',
    PURPLE: 'Theme.PURPLE',
    VIOLET: 'Theme.VIOLET',
    INDIGO: 'Theme.INDIGO',
    DEFAULT: 'Theme.DEFAULT', 
  };
  const windowMargin = parseInt(window.getComputedStyle(document.body).marginLeft);
  
  const easeOut = 'cubic-bezier(0,.45,.03,.96)';
  
  class dpisCoolClass {
    constructor() {
      this.categoryMap = {};
      this.queueAt = [];
      this.chainQueue = [];
      this.isShown = false;
      this.isQueued = false;
      this.queueEnabled = false;
      this.timeout = null;
      this.timeout2 = null;
      this.timeout3 = null;
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
      this.elementDiv.style.right = '0';
      this.elementP.style.backgroundColor = 'grey';
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
      if (this.queueEnabled && this.isShown) {
        this.isQueued = true;
        const copy = [...this.chainQueue];
        const queueFuncs = [];
        this.queueAt.push(() => {
          this.isQueued = false;
          this.show(message, duration, theme);
          for (const func of queueFuncs) func();
        });
        this.chainQueue = queueFuncs;
        return this;
      }
      this.toast.style.border = 'none';
      this.toast.style.borderColor = 'initial';
      this.displayAt('base');
      this.elementP.style.left = `calc(0px - ${windowMargin}px)`;
      if (duration!==NotifyLength.SHORT && duration!==NotifyLength.LONG) {
        throw new Error(`[Notis]: Invalid duration value at > ('${message}', ${duration}); < specifically > ${duration} <. Use NotifyLength.SHORT or NotifyLength.LONG instead!`);
      }
      if (!message || message.trim() === '') {
        throw new Error('[Notis]: Message cannot be empty!');
      }
      switch (theme) {
        case Theme.GREY:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'grey';
          this.toast.style.border = 'none';
          break;
        case Theme.BRIGHT:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'black';
          this.toast.style.backgroundColor = 'white';
          this.toast.style.border = 'none';
          break;
        case Theme.DARK:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'black';
          this.toast.style.border = 'none';
          break;
        case Theme.BLUE:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'blue';
          this.toast.style.border = 'none';
          break;
        case Theme.LIGHT_BLUE:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'black';
          this.toast.style.backgroundColor = '#79C5DD';
          this.toast.style.border = 'none';
          break;
        case Theme.WT_LIGHT_BLUE:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = '#79C5DD';
          this.toast.style.border = 'none';
          break;
        case Theme.PURPLE:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'purple';
          this.toast.style.border = 'none';
          break;
        case Theme.VIOLET:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'violet';
          this.toast.style.border = 'none';
          break;
        case Theme.INDIGO:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = 'indigo';
          this.toast.style.border = 'none';
          break;
        case Theme.DEFAULT:
          this.toast.style.backgroundImage = 'none';
          void this.toast.offsetHeight;
          this.toast.style.color = 'white';
          this.toast.style.backgroundColor = '#7A1B97';
          this.toast.style.border = '1.5px solid';
          this.toast.style.borderColor = '#FF1393';
          break;
      }
      this.toast.innerText = message;
      this.length = duration;
      this.isShown = true
      this.notisAnim('fade-in-out');
      for (var cat in this.categoryMap) {
        var val = this.categoryMap[cat];
        switch (cat) {
          default:
            console.error('[Notis]: no value is present');
            break;
          case 'themeCol':
            this.themeCol(val);
            break;
          case 'themeTxt':
            this.themeTxt(val);
            break;
          case 'edgeFrame':
            this.edgeFrame(...val);
            break;
          case 'linearGrad':
            this.linearGrad(...val);
            break;
          case 'notisAnim':
            this.notisAnim(val);
            break;
          case 'displayAt':
            this.displayAt(val);
            break;
        }
      }
      this.chainQueue = [];
      return this;
    }
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
    nextQueue() {
      if (this.queueAt.length === 0) return;
        const next = this.queueAt.shift();
        if (typeof next === 'function') next();
    }
    setDefaults(obj) {
      for (var key in obj) {
        switch (key) {
          case 'placement':
            this.queueEnabled = obj[key] === 'queue';
            break;
          default:
            this.categoryMap[key] = obj[key];
        }
      }
    }
    notisAnim(anm, dur = this.length) {
      if (dur !== this.length) {
        throw new Error(`[Notis]: An error occured at > ${dur} < value must be same as Notis.show() duration or dont apply values at all`);
      }
      if (this.isQueued) {
        this.chainQueue.push(() => {
          this.notisAnim(anm, dur = this.length)
        });
      } else {
      if (dur!==this.length) {
        throw new Error(`[Notis]: An error occured at > ${dur} < value must be same as Notis.show() duration or dont apply values at all`);
      }
      switch (anm) {
        default:
          console.error(`[Notis]: Animation property "${anm}" is unrecognized!`);
          this.isShown = false;
          this.nextQueue();
          break;
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
              this.isShown = false;
              this.nextQueue();
            }, 400);
          }, dur);
          break;
        case 'slide-up':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(177px)';
          this.toast.style.transition ='opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          void this.toast.offsetWidth
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
              this.isShown = false;
              this.nextQueue();
            }, 400);
          }, dur);
          break;
        case 'slide-down':
          this.clearTimeout();
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(-160px)';
          this.toast.style.transition = 'opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          void this.toast.offsetWidth
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
              this.isShown = false;
              this.nextQueue();
            }, 400);
          }, dur);
          break;
        case 'slide-back-up':
          this.clearTimeout();
          if (this.timeout2) {
            clearTimeout(this.timeout2);
            this.timeout2 = null;
          }
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(295px)';
          this.toast.style.transition = 'opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          void this.toast.offsetWidth
          requestAnimationFrame(() => {
            this.toast.style.visibility = 'visible';
            this.toast.style.opacity = '1';
            this.toast.style.transform = 'translateY(-30px)';
            this.toast.style.transition = `transform 0.25s ${easeOut}, opacity 0.15s ease-in-out`;
            this.timeout2=setTimeout(() => {
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
              this.isShown = false
              this.nextQueue();
            }, 400);
          }, dur);
          break;
        case 'slide-back-down':
          this.clearTimeout();
          if (this.timeout3) {
            clearTimeout(this.timeout3);
            this.timeout3 = null;
          }
          this.toast.style.willChange = 'transform, opacity'
          this.toast.style.transform = 'translateY(-195px)';
          this.toast.style.transition = 'opacity 0s, transform 0s';
          this.toast.style.opacity = '0';
          void this.toast.offsetWidth
          requestAnimationFrame(() => {
            this.toast.style.visibility = 'visible';
            this.toast.style.opacity = '1';
            this.toast.style.transform = 'translateY(23px)';
            this.toast.style.transition = `transform 0.25s ${easeOut}, opacity 0.2s ease-in-out`;
            this.timeout3=setTimeout(() => {
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
              this.isShown = false;
              this.nextQueue();
            }, 400);
          }, dur);  
          break;
      }
      }
      return this;
    }
    themeCol(col) {
      if (this.isQueued) {
        this.chainQueue.push(() =>
        this.themeCol(col));
      } else {
        this.toast.style.backgroundColor = col;
      }
      return this;
    }
    themeTxt(txt) {
      if (this.isQueued) {
        this.chainQueue.push(() => 
        this.themeTxt(txt));
      } else {
        this.toast.style.color = txt;
      }
      return this;
    }
    edgeFrame(frm, amount = '1px') {
      if (this.isQueued) {
        this.chainQueue.push(() => 
        this.edgeFrame(frm, amount));
      } else {
        this.toast.style.border = `${amount} solid`;
        this.toast.style.borderColor = frm;
      }
      return this;
    }
    linearGrad(direction, ...colors) {
      if (this.isQueued) {
        this.chainQueue.push(() =>
        this.linearGrad(direction, ...colors));
      } else {
        this.toast.style.backgroundImage = `linear-gradient(${direction}, ${colors.join(', ')})`;
      }
      return this;
    }
    displayAt(position) {
      var pos = position.toLowerCase();
      if (this.isQueued) {
        this.chainQueue.push(() => 
        this.displayAt(position));
      } else {
        switch (pos) {
          default:
            console.error(`[Notis]' Unidentified position property`)
            break;
          case 'base':
            this.parentDiv.style.top = '72vh';
            this.elementDiv.style.top = '72vh';
            this.elementDiv.style.margin = '0';
            this.elementDiv.style.justifyContent = 'center'
            break;
          case 'head':
            this.parentDiv.style.top = '3vh';
            this.elementDiv.style.top = '3vh';
            this.elementDiv.style.margin = '0';
            this.elementDiv.style.justifyContent = 'center'
            break;
          case 'start':
            this.elementDiv.style.justifyContent = 'left';
            this.elementDiv.style.marginLeft = '30px';
            this.parentDiv.style.top = '50vh';
            this.elementDiv.style.top = '50vh';
            break;
          case 'end':
            this.elementDiv.style.justifyContent = 'right';
            this.elementDiv.style.marginRight = '30px';
            this.parentDiv.style.top = '50vh';
            this.elementDiv.style.top = '50vh';
            break;
          case 'base-start':
            this.parentDiv.style.top = '72vh';
            this.elementDiv.style.top = '72vh';
            this.elementDiv.style.justifyContent = 'left';
            this.elementDiv.style.marginLeft = '30px';
            break;
          case 'base-end':
            this.parentDiv.style.top = '72vh';
            this.elementDiv.style.top = '72vh';
            this.elementDiv.style.justifyContent = 'right';
            this.elementDiv.style.marginRight = '30px';
            break;
          case 'head-start':
            this.parentDiv.style.top = '3vh';
            this.elementDiv.style.top = '3vh';
            this.elementDiv.style.justifyContent = 'left';
            this.elementDiv.style.marginLeft = '30px';
            break;
          case 'head-end':
            this.parentDiv.style.top = '3vh';
            this.elementDiv.style.top = '3vh';
            this.elementDiv.style.justifyContent = 'right';
            this.elementDiv.style.marginRight = '30px';
            break;
        }
      }
      return this;
    }
  }
  return {
    Notis: new dpisCoolClass(), 
    Theme, 
    NotifyLength, 
  };
})();
const {Notis, Theme, NotifyLength} = NotisMessage;