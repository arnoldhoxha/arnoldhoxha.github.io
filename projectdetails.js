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
                <h1>Details for 'PyAD' project</h1>
            `;
            projectDetailsContainer.innerHTML = `
            <h1>Active Directory User Management API with Python Flask</h1>

            <h2>Overview:</h2>
            <p class="title">The Active Directory User Management API is a Python Flask project designed to provide a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on user accounts in an Active Directory environment. This project simplifies user management tasks by allowing seamless integration with external systems through HTTP requests.</p>
        
            <h2>Key Features:</h2>
            <ul>
                <li>Create User</li>
                <li>Read User</li>
                <li>Update User</li>
                <li>Delete User</li>
                <li>Authentication and Authorization</li>
            </ul>
        
            <h2>Technologies Used:</h2>
            <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>Active Directory Integration</li>
                <li>JWT (JSON Web Token)</li>
                <li>HTTP Methods</li>
            </ul>
        
            <h2>API Endpoints:</h2>
            <ul>
                <li><code>POST /api/users</code>: Create a new user</li>
                <li><code>GET /api/users/{username}</code>: Retrieve user details</li>
                <li><code>PUT /api/users/{username}</code>: Update user details</li>
                <li><code>DELETE /api/users/{username}</code>: Delete user</li>
            </ul>
        
            <h2>Use Cases:</h2>
            <ul>
                <li>External systems can integrate with the API to automate user provisioning and de-provisioning.</li>
                <li>Administer Active Directory user accounts remotely using custom scripts or applications.</li>
            </ul>
        
            <h2>Benefits:</h2>
            <ul>
                <li>Streamlines user management processes by providing a centralized API interface.</li>
                <li>Enhances security through token-based authentication and authorization checks.</li>
                <li>Facilitates integration with various platforms and tools that support HTTP requests.</li>
            </ul>
        
            <h2>Getting Started:</h2>
            <ul>
                <li>Clone the project repository from GitHub.</li>
                <li>Install the required Python dependencies using <code>pip install -r requirements.txt</code>.</li>
                <li>Configure the Active Directory connection settings in the Flask application.</li>
                <li>Run the Flask application (<code>python app.py</code>) and start making API requests.</li>
            </ul>
        
            <h2>Documentation:</h2>
            <p>Detailed API documentation is available in the project's README file.</p>
        
            <h2>Contributing:</h2>
            <p>Contributors are swelcome! Follow the contribution guidelines outlined in the project repository.</p>       
            `;
            break;
            case '2':
                projectTitleDiv.innerHTML = `
                    <h1>Details for 'Ansible configuration' project</h1>
                `;
                projectDetailsContainer.innerHTML = `
                <h1>Deploying docker container with ansible yaml file</h1>
    
                <h2>Overview:</h2>
                <p class="title">This guide illustrates the process of 
                creating a Docker container using Ansible for configuration 
                management and a Dockerfile for defining the container's image.</p>
            
                <h2>Steps:</h2>
                <h3>1. Create Ansible YAML File (ansible-playbook.yml):</h3>
                <p>Define the Ansible playbook to configure the container. 
                Below is a simple example that installs required dependencies.</p>
                <code>
                    ---<br>
                       - name: Configure Docker Container<br>
                        hosts: dockercloud<br>
                    tasks:<br>
                    - name: Install Dependencies<br>
                    &#160;&#160;apt:<br>
                    &#160;&#160;&#160;name: ['python3', 'python3-pip']<br>
                    &#160;&#160;&#160;state: present<br>
                </code>
            
                <h3>2. Create Dockerfile:</h3>
                <p>Create a Dockerfile to specify the container's image. 
                Customize it based on your application requirements.</p>
                <code>
                        # Use an official base image<br>
                        FROM ubuntu:latest<br>
                        <br>
                        # Set the working directory<br>
                        WORKDIR /app<br>
                        <br>
                        # Copy Ansible playbook to the container<br>
                        COPY ansible-playbook.yml .<br>
                        <br>
                        # Install Ansible<br>
                        RUN apt-get update \<br>
                        &#160;&#160;&& apt-get install -y ansible \<br>
                        &#160;&#160;&& rm -rf /var/lib/apt/lists/*<br>
                
                        # Run Ansible playbook<br>
                        CMD ansible-playbook ansible-playbook.yml<br>
                </code>
            
                <h2>3. Build Docker Image:</h2>
                <p>Build the Docker image using the following command:</p>
                <code>
                &#160;&#160;docker build -t my-ansible-container .
                </code>
            
                <h2>4. Run Docker Container:</h2>
                <p>Run the Docker container based on the built image:</p>
                <code>
                &#160;&#160; docker run -it my-ansible-container
                </code>
        
                <h2>Contributing:</h2>
                <p>Contributors are welcome! Follow the contribution guidelines outlined in the project repository.</p>       
                `;
            break;
        
        default:
            projectDetailsContainer.innerHTML = `<p>Project details not found.</p>`;
    }
}
