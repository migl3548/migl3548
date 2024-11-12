const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["images/pic1.JPG", "images/pic2.JPG", "images/pic3.JPG", "images/pic4.jpg", "images/pic5.png"];
/* Declaring the alternative text for each image file */
const alttext = ["Marceline", "Marceline2", "Otter", "Fox", "Kuromi"]

/* Looping through images */


for (let i=0; i<5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alttext[i]);
    

    newImage.addEventListener('click', function() { 
        displayedImage.setAttribute('src', filenames[i]);
        displayedImage.setAttribute('alt', alttext[i]);
        
    });

    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const current = btn.getAttribute('class');

    if(current === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        overlay.style.width = '480px';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
        overlay.style.width = '480px';
    }
});