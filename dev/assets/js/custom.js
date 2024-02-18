const installGenplan = () => {
    const address = document.querySelector('#address');
    const floor = document.querySelector('#floor');
    const flat = document.querySelector('#flat');
    const builds = document.querySelectorAll('.build-path');
    
    builds.forEach(build => {
        build.addEventListener('mouseover', ()=> {
            const buildAdress = build.getAttribute('data-address');
            const buildFloor =  build.getAttribute('data-floor-quantity');
            const buildFlat = build.getAttribute('data-flat-quantity');
            
            address.innerHTML = buildAdress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })
}

document.querySelector('.genplan') ? installGenplan() : null;


// Burger-Menu 
const headerNav = document.querySelector('.header-nav');
const btnBurger = document.querySelector('.hamburger');

btnBurger.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    btnBurger.classList.toggle('is-active');
})