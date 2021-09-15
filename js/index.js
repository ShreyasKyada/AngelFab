let men = document.getElementsByClassName('men')[0];
let women = document.getElementsByClassName('women')[0];

men.addEventListener('click', () => {
    men.classList.toggle('open');
});

women.addEventListener('click', () => {
    women.classList.toggle('open');
});
