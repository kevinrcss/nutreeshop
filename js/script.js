(function (d) {
    const menuButton = d.getElementById('menu-button'),
            menuNav = d.getElementById('menu-nav');

    if(menuButton && menuNav){
        menuButton.addEventListener('click', (e)=>{
            e.preventDefault();
            menuNav.classList.toggle('open');
        })
    }
})(document);

(function (d) {
    const mainMenu = d.getElementById("main-menu");
    if (mainMenu) {
        mainMenu.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentNode.classList.toggle("selected");
        });
    }
})(document);
