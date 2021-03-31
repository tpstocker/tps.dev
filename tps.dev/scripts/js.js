const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
document.getElementById('Qcontainer').scrollLeft += 20;
};
buttonLeft.onclick = function () {
document.getElementById('Qcontainer').scrollLeft -= 20;
};
