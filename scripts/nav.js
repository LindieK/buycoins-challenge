window.onload = () => {
    let icon = document.getElementById("menu-icon");
    let nav = document.getElementById("hamburger-menu");

    const toggleNav = () => {
    
        if(nav.classList.contains("showNav")){
            nav.classList.remove("showNav");
        }
        else{
            nav.classList.add("showNav");
        }
    };
    
    icon.onclick = toggleNav;
}

