var a = new Date();

var x = document.querySelector('.dateClass')
console.log(x)

x.innerHTML = a.toLocaleTimeString()

var tag = document.getElementById('demo');
var button = document.querySelector('button');
button.addEventListener('click', function () {
    tag.classList.toggle('demo');
});
var openToState = false;
function myFunction() {
    if (openToState == true) {
        openToState = false;
        document.querySelector(".openTo").style.display = "none"
    } else {
        openToState = true;
        document.querySelector(".openTo").style.display = "block"

    }


}

var tag = document.getElementById('image');
var button = document.querySelector('button');
button.addEventListener('click', function () {
    tag.classList.toggle('image');
});

function myFunction1() {
console.log('test')


}
