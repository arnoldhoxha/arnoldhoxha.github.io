function showProjectDetails(projectNumber) {
    window.location.href = `projects.html?project=${projectNumber}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectNumber = urlParams.get('project');
    const projectCards = document.querySelectorAll('project-card');
    const projectTitles = [];

    projectCards.forEach(function (card) {
        const projectTitleElement = card.querySelector('h3');
        const projectTitle = projectTitleElement ? projectTitleElement.textContent : 'se kap';
        projectTitles.push(projectTitle);
    });

    console.log(projectTitles);
    loadProjectDetails(projectNumber, projectTitles[projectNumber - 1]);
});


function loadProjectDetails(projectNumber, projectTitle) {
    const projectDetailsContainer = document.getElementById("project-details-container");
    const projectTitleDiv = document.getElementById("project-title");
    switch (projectNumber) {
        case '1':
            projectTitleDiv.innerHTML = `
                <h1>Details for '${projectTitle}' project</h1>
            `;
            projectDetailsContainer.innerHTML = `
                <h2>Project 1 Details</h2>
                <p>Detailed information about Project 1...</p>
                <!-- Add more details as needed -->
            `;
            break;
        case '2':
            projectDetailsContainer.innerHTML = `
                <h2>Project 2 Details</h2>
                <p>Detailed information about Project 2...</p>
                <!-- Add more details as needed -->
            `;
            break;
        
        default:
            projectDetailsContainer.innerHTML = `<p>Project details not found.</p>`;
    }
}
