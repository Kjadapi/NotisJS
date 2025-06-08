var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('button3');
var state = true;
btn3.innerHTML = `Queue: ${state}`;

Notis.setDefaults({
    placement: 'queue',
    displayAt: 'base-end', 
    edgeFrame: ['cyan', '2px'], 
    themeCol: 'blue'
});
function ArrayList1() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .displayAt('base');
    console.log('1');
}
function ArrayList2() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('slide-back-up')
    .displayAt('base')
    .themeCol('indigo')
    .edgeFrame('magenta');
    console.log('2')
}
function ArrayList3() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('fade-in-out')
    .themeCol('blue')
    .edgeFrame('magenta')
    .displayAt('base');
    console.log('3')
}
function ArrayList4() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('slide-back-down')
    .displayAt('head-end')
    .linearGrad('to right', 'blue', 'cyan')
    .edgeFrame('cyan');
    console.log('4')
}
function ArrayList5() {
    Notis.show('This is toast', NotifyLength.SHORT);
    console.log('5')
}
function ArrayList6() {
    Notis.show('This is toast', NotifyLength.SHORT)
    .displayAt('base-start')
    .linearGrad('to right', 'blue', 'magenta')
    .notisAnim('slide-up')
    .edgeFrame('magenta', '2px');
    console.log('6')
}
function RandomNotis() {
    const ArrayList = [ArrayList1, ArrayList2, ArrayList3, ArrayList4, ArrayList5, ArrayList6];
    const RandomSequence = ArrayList[Math.floor(Math.random() * ArrayList.length)]
    RandomSequence();
}
button2.addEventListener('click', () => {
    RandomNotis();
});
btn2.addEventListener('click', () => {
    window.location.href = "https://github.com/Kjadapi/NotisJS";
});
btn3.addEventListener('click', () => {
    state = !state;
    btn3.innerHTML = `Queue: ${state}`;
    Notis.queueEnabled = !Notis.queueEnabled;
});