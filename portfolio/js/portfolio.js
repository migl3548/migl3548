fetch('../../portfolio/projects.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

// function parseData(data){
//     for(let i=0; i<data.projects.length; i++){
//         document.getElementById("projects").innerHTML += `<div class="row project" id="${data.projects[i].subdomain}">`
//             <div class="projimg"><img src="images/ex/ex (${i+1}).png"></div>
//             <div class="description"><h2>${projects.projects[i].name}</h2><p class = "subtitle">${data.projects[i].subtitle}</p></div>
//             <p>${data.projects[i].abstract}</p></div></div>`;
//     }
// }

// function parseData(data) {
//     for (let i = 0; i < data.projects.length; i++) {
//         document.getElementById("projects").innerHTML += `
//             <div class="row project" id="${data.projects[i].subdomain}">
//                 <div class="projimg">
//                     <img src="../../portfolio/images/img(${i + 1}).png" alt="${data.projects[i].name}">
//                 </div>
//                 <div class="description">
//                     <h2>${data.projects[i].name}</h2>
//                     <p class="subtitle">${data.projects[i].subtitle}</p>
//                 </div>
//                 <p>${data.projects[i].abstract}</p>
//             </div>`;
//     }
// }
function parseData(data) {
    for (let i = 0; i < data.projects.length; i++) {
        document.getElementById("projects").innerHTML += `
            <div class="row project" id="${data.projects[i].subdomain || ''}">
                <div class="projimg">
                    <img src="../../portfolio/images/img(${i + 1}).png" alt="${data.projects[i].name}">
                </div>
                <div class="description">
                    <h2>${data.projects[i].name}</h2>
                    <p class="subtitle">${data.projects[i].subtitle || 'Subtitle not available'}</p>
                    <p class="abstract">${data.projects[i].abstract || 'Abstract not available'}</p>
                </div>
            </div>`;
    }
}

console.log("hello");