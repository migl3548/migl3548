const displayedImage = document.querySelector('.displayed-img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

/* Declaring the array of image filenames and alt texts */
const filenames = ["../../portfolio/images/proj2_1.png", "../../portfolio/images/proj2_2.png", "../../portfolio/images/proj2_3.png", "../../portfolio/images/proj2_4.png"];
const altTexts = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];


let currentIndex = 0;


function updateImage(index) {
    displayedImage.setAttribute('src', filenames[index]);
    displayedImage.setAttribute('alt', altTexts[index]);
}

/* event listeners for nav buttons */
prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + filenames.length) % filenames.length;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % filenames.length;
    updateImage(currentIndex);
});