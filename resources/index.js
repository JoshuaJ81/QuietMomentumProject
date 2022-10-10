//MOBILE MENU BUTTON

//const mobileMenu = document.querySelector('.mobile-button');

//const menuItems = document.querySelector('.drop-down');


function toggleMenu() {

    //const mobileMenu = document.querySelector('.mobile-button');

    const menuItems = document.querySelector('.drop-down');

        if(menuItems.style.display === 'none') {
            menuItems.style.display = 'block';
                 
        }

            else {
                menuItems.style.display = 'none';
            }


}

const card = document.querySelector('.card-flip');

card.addEventListener('click', () => {
    card.classList.toggle('flip');
});

const cardOne = document.querySelector('.card-flip1');

cardOne.addEventListener('click', () => {
    cardOne.classList.toggle('flip');
});

const cardTwo = document.querySelector('.card-flip2');

cardTwo.addEventListener('click', () => {
    cardTwo.classList.toggle('flip');
});

const cardThree = document.querySelector('.card-flip3');

cardThree.addEventListener('click', () => {
    cardThree.classList.toggle('flip');
});

const cardFour = document.querySelector('.card-flip4');

cardFour.addEventListener('click', () => {
    cardFour.classList.toggle('flip');
});

const cardFive = document.querySelector('.card-flip5');

cardFive.addEventListener('click', () => {
    cardFive.classList.toggle('flip');
});



//document.querySelectorAll('.card-flip').forEach(n => n.addEventListener('click', () => {
    //card.classList.toggle('flip');
//}))

//const arr = document.getElementsByClassname('.card-flips');

//for (const k = 0; k < arr.length; k++)
   //arr[k].addEventListener('click', () => {
    //arr.classList.toggle('flip');
//});

//const cardAll = document.querySelectorAll('.card-flips');

//document.querySelectorAll('.card-flips').forEach(n => n.addEventListener('click', () => {
    //cardAll.classList.toggle('flip');
    
//}))