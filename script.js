
window.addEventListener('load', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    const bx = document.getElementById('iconToggle');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
   
    if (isDarkMode && prefersDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }else{
        body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            bx.classList.remove('bxs-moon');
            bx.classList.add('bxs-sun');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            bx.classList.remove('bxs-sun');
            bx.classList.add('bxs-moon');

        }
    });

    var typingEffect = new Typed(".multiText", {
        strings: ["Python Dev", "Devops", "Sysadmin"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    });


});

function downloadCv() {
    var pageUrl = "https://drive.google.com/file/d/12m3JduRcMYLbE55G347siHG4IhQ15tZA/view";

    window.open(pageUrl, '_blank');
}