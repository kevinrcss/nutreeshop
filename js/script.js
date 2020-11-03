(function (d) {
    const menuButton = d.getElementById('menu-button'),
            menu = d.getElementById('menu');

    if(menuButton && menu){
        menuButton.addEventListener('click', (e)=>{
            e.preventDefault();
            menuButton.classList.toggle('open')
            menu.classList.toggle('open');
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
                e.target.parentNode.classList.toggle("expanded");
            }
        });
    }
})(document);

window.onload = function() {
    fixedMenu();
};


function fixedMenu(){
    const navigationBar = document.getElementById("navigation-bar");
    const brand = document.getElementById("brand");
    if (navigationBar) {
        window.addEventListener("scroll", (e) => {
        if (document.documentElement.scrollTop > navigationBar.offsetTop) {
            navigationBar.classList.add("fixed");
            brand.classList.add("hide");
        }
        else{
            navigationBar.classList.remove("fixed");
            brand.classList.remove("hide");
        }
    });
    }
};




