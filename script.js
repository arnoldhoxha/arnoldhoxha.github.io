
window.addEventListener('load', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    const bx = document.getElementById('iconToggle');

    if (isDarkMode) {
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

    function downloadCv() {
        const fileUrl = 'https://raw.githubusercontent.com/username/repository/master/filename.ext';

        // Update button state
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.classList.add('loading');
        downloadButton.innerText = 'Downloading...';
    
        // Create a temporary link element for the download
        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.download = 'filename.ext';
    
        // Append the link to the body (required for Firefox)
        document.body.appendChild(downloadLink);
    
        // Trigger a click event to start the download
        downloadLink.click();
    
        // Remove the link from the body after the download
        document.body.removeChild(downloadLink);
    
        // Reset button state after a delay
        setTimeout(() => {
            downloadButton.classList.remove('loading');
            downloadButton.innerText = 'Download File';
        }, 2000);
    }
    







});
