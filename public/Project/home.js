// Open the sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Close the sidebar
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Close the sidebar if clicked outside of it
window.addEventListener('click', function(e) {
    // Check if the click is on the menu icon or inside the sidebar
    if (!document.getElementById('sdbar').contains(e.target) && !document.getElementById('mySidenav').contains(e.target)){
        // Check if sidebar is open
        if (document.getElementById("mySidenav").style.width != "0px") {
            closeNav();
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
