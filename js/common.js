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