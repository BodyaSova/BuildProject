// Burger-Menu 
const headerNav = document.querySelector('.header-nav');
const btnBurger = document.querySelector('.hamburger');

btnBurger.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    btnBurger.classList.toggle('is-active');
})

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

    const addBooking = (builds) => builds.forEach(build => {
        const buildLink = build.closest('a')
        const flatQuantity = +build.getAttribute('data-flat-quantity')
        flatQuantity ? flatQuantity >= 0 : buildLink.classList.add('booking')

        buildLink.addEventListener('click', (event)=> {
            if (buildLink.classList.contains('booking')) {
                event.preventDefault()
            }
        })
    })

    addBooking(builds)
}

const installFloor = () => {
    console.log('installFloor');
}

document.querySelector('.genplan') ? installGenplan() : null;
document.querySelector('.floor-plan') ? installFloor() : null
