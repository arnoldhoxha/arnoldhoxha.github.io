
window.addEventListener('load', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    var typingEffect = new Typed(".multiText", {
        strings: ["Python Dev", "Devops", "Sysadmin"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    });

    function startDownload() {
        // Your existing code for downloading
    }
    

});
