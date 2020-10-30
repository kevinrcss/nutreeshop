(function (d) {
    const menuButton = d.getElementById('menu-button'),
            menuNav = d.getElementById('menu-nav');

    if(menuButton && menuNav){
        menuButton.addEventListener('click', (e)=>{
            e.preventDefault();
            menuButton.classList.toggle('open')
            menuNav.classList.toggle('open');
        })
    }
})(document);

(function (d) {
    const mainMenu = d.getElementById("menu");
    if (mainMenu) {
        mainMenu.addEventListener("click", (e) => {
            e.preventDefault();
            let element = e.target;
            if (element.classList.contains('menu__link')){
                e.target.parentNode.classList.toggle("selected");
            }
            // console.log(e.target.getAttribute('aria-expanded'))
        });
    }
})(document);
