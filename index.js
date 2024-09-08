

const menuBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('cancel-btn');

console.log(menuBtn, cancelBtn)
menuBtn.addEventListener('click', ()=> {

    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('d-none');
})

cancelBtn.addEventListener('click', ()=> {

    const navbar = document.querySelector('.navbar');
    navbar.classList.add('d-none');
})

