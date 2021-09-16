let bars = document.getElementsByClassName('bars')[0];
let hamburge = document.getElementsByClassName('hamburge')[0];
let men = document.getElementsByClassName('menP')[0];
let women = document.getElementsByClassName('womenP')[0];
let hamburgeCategoriesPopup1 = document.getElementsByClassName('hamburge-categories-popup')[0];
let hamburgeCategoriesPopup2 = document.getElementsByClassName('hamburge-categories-popup')[1];
let hamburgeListContainer1 = document.getElementsByClassName('hamburge-list-container')[0];
let hamburgeListContainer2 = document.getElementsByClassName('hamburge-list-container')[1];
let hamburgeList1 = document.getElementsByClassName('hamburge-list')[0];
let hamburgeList2 = document.getElementsByClassName('hamburge-list')[1];
let hamburgeList3 = document.getElementsByClassName('hamburge-list')[2];
let tempHeight;
bars.addEventListener('click', () => {
    hamburge.classList.toggle('open');
    hamburgeList1.classList.toggle('open');
    hamburgeList2.classList.toggle('open');
    hamburgeList3.classList.toggle('open');
    hamburgeListContainer1.classList.toggle('open');
    hamburgeListContainer2.classList.toggle('open');
    if (!hamburge.classList.contains('open')) {
        hamburge.removeAttribute('style');
        if(hamburgeCategoriesPopup1.classList.contains('open'))
            hamburgeCategoriesPopup1.classList.remove('open');
        if(hamburgeCategoriesPopup2.classList.contains('open'))
            hamburgeCategoriesPopup2.classList.remove('open');
    }
});

men.addEventListener('click', () => {
    hamburgeCategoriesPopup1.classList.toggle('open');
    if (hamburgeCategoriesPopup2.classList.contains('open'))
        hamburge.setAttribute('style', 'height: 400px');
    else if (hamburgeCategoriesPopup1.classList.contains('open'))
        hamburge.setAttribute('style', 'height: 350px');
    else
        hamburge.setAttribute('style', 'height: 205px');
    if ((!hamburgeCategoriesPopup1.classList.contains('open')) && hamburgeCategoriesPopup2.classList.contains('open'))
        hamburge.setAttribute('style', 'height: 350px');
});

women.addEventListener('click', () => {
    hamburgeCategoriesPopup2.classList.toggle('open');
    if (hamburgeCategoriesPopup1.classList.contains('open'))
        hamburge.setAttribute('style', 'height: 400px');
    else if (hamburgeCategoriesPopup2.classList.contains('open'))
        hamburge.setAttribute('style', 'height: 350px');
    else
        hamburge.setAttribute('style', 'height: 205px');
    if ((!hamburgeCategoriesPopup2.classList.contains('open')) && hamburgeCategoriesPopup1.classList.contains('open'))
        hamburge.setAttribute('style', 'height: 350px');
});