// let proj;
// fetch('../../portfolio/projects.json')
//     .then(response=>{
//         return response.json();
//     }).then(projects => {
//         console.log(projects);
//         proj=projects;
//         parseData(projects);
//     }).catch(err =>{
//         console.log(`error ${err}`);
//     })


// function parseData(data) {
//     for (let i = 0; i < data.projects.length; i++) {
//         document.getElementById("projects").innerHTML += `
//             <div class="row project" id="${data.projects[i].subdomain || ''}">
//                 <div class="projimg">
//                     <img src="../../portfolio/images/img(${i + 1}).png" alt="${data.projects[i].name}">
//                 </div>
//                 <div class="description">
//                     <h2>${data.projects[i].name}</h2>
//                     <h3 class="subtitle">${data.projects[i].subtitle || 'Subtitle not available'}</h3>
//                     <p class="abstract">${data.projects[i].abstract || 'Abstract not available'}</p>
//                 </div>
//             </div>`;
//     }
// }

// for(b of document.querySelectorAll("#buttons button")){
//     b.addEventListener("click", e=>{
//         console.log(e.target.value);
//         sortProjects(e.target.value);

//     })
// }

// function sortProjects(button){
//     if(button="clear"){
//         for(i=0; i<proj.projects.length; i++){
//             document.getElementById(proj.projects[i].subdomain).style.display = "flex";
//         }
//     } else if(button != undefined){
//         for(i=0; i<proj.projects.length; i++){
//             if(proj.projects[i].category.includes(button)==true){
//                 document.getElementById(proj.projects[i].subdomain).style.display = "flex";
//             } else {
//                 document.getElementById(proj.projects[i].subdomain).style.display = "none";
//             }
//         }
//     } else {
//         console.log("error button bad")
//     }
// }

let proj;

// Fetch the projects JSON data
fetch('./projects.json') // Adjust path if needed
    .then(response => response.json())
    .then((projects) => {
        proj = projects; // Store projects globally
        parseData(projects); // Render projects
    })
    .catch((err) => {
        console.error(`Error loading projects: ${err}`);
    });

// Render projects into the DOM
function parseData(data) {
    const projectsContainer = document.getElementById("projects");
    projectsContainer.innerHTML = ""; // Clear container before rendering

    for (let i = 0; i < data.projects.length; i++) {
        const project = data.projects[i];
        projectsContainer.innerHTML += `
            <div class="row project" id="${project.subdomain}">
                <div class="projimg">
                    <img src="./images/img(${i + 1}).png" alt="${project.name}">
                </div>
                <div class="description">
                    <h2>${project.name}</h2>
                    <h3 class="subtitle">${project.subtitle}</h3>
                    <p class="abstract">${project.abstract}</p>
                </div>
            </div>`;
    }
}

// Add event listeners to buttons
document.querySelectorAll("#buttons button").forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(`Button clicked: ${e.target.value}`); // Debugging
        sortProjects(e.target.value);
    });
});

// Sort and filter projects by category
function sortProjects(category) {
    if (!proj || !proj.projects) {
        console.error("Projects data not loaded yet.");
        return;
    }

    proj.projects.forEach((project) => {
        const projectElement = document.getElementById(project.subdomain);
        if (projectElement) {
            if (category === "clear") {
                projectElement.style.display = "flex"; // Show all projects
            } else if (project.category === category) {
                projectElement.style.display = "flex"; // Show matching category
            } else {
                projectElement.style.display = "none"; // Hide non-matching
            }
        }
    });
}


// TRANSITION STUFF 
document.addEventListener("DOMContentLoaded", () => {
    // Attach click event listeners to all navbar links
    const navLinks = document.querySelectorAll("a.nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default navigation
            const href = link.getAttribute("href"); // Get the target href

            // Add fade-out class
            document.body.classList.add("fade-out");

            // Wait for the animation to complete, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 1000); // Matches the fadeOut duration (1s)
        });
    });
});