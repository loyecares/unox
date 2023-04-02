const displayMobileMenu = () => {
    document.querySelector('.mobile-menu').style.display = "block";
    // gsap.to(document.querySelector('.mobile-menu'), {
    //   display: 'block',
    //   // height: '100%',
    //   duration: 8
    // })
}

const closeMobileMenu = () => {
    document.querySelector('.mobile-menu').style.display = "none";
    // gsap.to(document.querySelector('.mobile-menu'), {
    //   display: 'none',
    //   duration: 0
    // })
}

document.querySelector('.nav-products').addEventListener('mouseover', () => {
    document.querySelector('.hover-tab.products-tab').style.display = "block";
})

document.querySelector('.nav-more').addEventListener('mouseover', () => {
    document.querySelector('.hover-tab.more-tab').style.display = "block"
})

document.querySelector('.nav-products').addEventListener('mouseout', () => {
    document.querySelector('.hover-tab.products-tab').style.display = "none";
})

document.querySelector('.nav-more').addEventListener('mouseout', () => {
    document.querySelector('.hover-tab.more-tab').style.display = "none"
})