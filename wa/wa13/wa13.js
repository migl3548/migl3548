const title = document.getElementById('title');
const alt = document.getElementById('alttext');
const img = document.getElementById('img');
const call = document.getElementById('call');



function fetchData(){
    const randomnum = Math.floor(Math.random()*3000)+1;

    fetch(`https://corsproxy.io/?https://xkcd.com/${randomnum}/info.0.json`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
                throw new Error("fail womp womp");
            }
        })
        .then(data => {
            // Update the DOM with the fetched data
            title.innerHTML = `Title: ${data.title}`;
            alt.innerHTML = `Alt: ${data.alt}`;
            img.src = data.img;
            img.alt = data.alt;
        })
        .catch(error => {
            console.error(error);
            alert("fail womp womp");
        });
}

call.addEventListener("click", fetchData);

fetchData();




// p.innerHTML = myData;

