var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var btn3 = document.getElementById('bt3');

button1.addEventListener('click', () => {
    Notis.show('Position Test', NotifyLength.SHORT)
    .linearGrad('to right', 'blue', 'cyan')
    .displayAt(Pos.END)
    .edgeFrame('cyan')
    .notisAnim('slide-back-down');
});
button2.addEventListener('click', () => {
    Notis.show('Position Test', NotifyLength.SHORT)
    .notisAnim('slide-back-up')
    .displayAt(Pos.BASE);
});
btn3.addEventListener('click', () => {
    Notis.show('Position Tests', NotifyLength.SHORT, Theme.BRIGHT)
});