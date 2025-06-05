var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var btn2 = document.getElementById('btn2');

function ArrayList1() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('slide-back-up')
    .displayAt(Pos.BASE);
}
function ArrayList2() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('slide-back-up')
    .displayAt(Pos.BASE)
    .themeCol('indigo')
    .edgeFrame('magenta')
}
function ArrayList3() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('fade-in-out')
    .themeCol('blue')
    .edgeFrame('magenta')
    .displayAt(Pos.BASE);
}
function ArrayList4() {
    Notis.show('Toast Message', NotifyLength.SHORT)
    .notisAnim('slide-down')
    .displayAt(Pos.HEADEND)
    .linearGrad('to right', 'blue', 'cyan')
    .edgeFrame('cyan');
}
function RandomNotis() {
    const ArrayList = [ArrayList1, ArrayList2, ArrayList3, ArrayList4];
    const RandomSequence = ArrayList[Math.floor(Math.random() * ArrayList.length)]
    RandomSequence();
}

button2.addEventListener('click', () => {
    RandomNotis();
});
btn2.addEventListener('click', () => {
    window.location.href = "https://github.com/Kjadapi/NotisJS";
});
