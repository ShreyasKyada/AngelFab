let btn = document.getElementsByClassName('nav-box')[0];
let click = false;


if (btn.classList.contains('close') == true) {
    console.log("done");
}

btn.addEventListener('click', () => {
    if (!click) {
        btn.classList.add('click');
        if (btn.classList.contains('close') == true) {
            btn.classList.remove('close');
        }
        click = true;
    }
    else {
        btn.classList.remove('click');
        if (btn.classList.contains('close') == false) {
            btn.classList.add('close');
        }
        click = false;
    }
});

