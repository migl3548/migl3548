const fortune = document.querySelector('.fortune');

const dog = document.querySelector('.dog');

const reversenum = document.querySelector('.reversenum');

const alphabetical = document.querySelector('.alphabetical')

const upper = document.querySelector('.upper');

function tellFortune(children, partner, location, job) {
    const fortuneText = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    fortune.textContent += fortuneText + " ";
    fortune.style.visibility = 'visible'; // Make visible once all fortunes are added
}

tellFortune(3, 'Ari', 'LA', 'SWE');
tellFortune(2, 'James', 'Kyoto', 'Artist');
tellFortune(1, 'Bill', 'Denver', 'Mime');

function calculateDogAge(age){
    const dogYears = age * 7;
    const dogText = `Your doggie is ${dogYears} years old in dog years! (and ${age} years old in human years).`;
    dog.textContent += dogText + " ";
    dog.style.visibility = 'visible';
}

calculateDogAge(2);
calculateDogAge(6);
calculateDogAge(7);

function reverseNumber(number){
    const reversed = number.split('').reverse().join('');
    reversenum.textContent += reversed + " ";
    reversenum.style.visibility = 'visible';
}

reverseNumber("73465437");
reverseNumber("123");
reverseNumber("857409");

function toAlphabetical(original){
    const alphabeticalized = original.split('').sort().join('');
    alphabetical.textContent += alphabeticalized + " ";
    alphabetical.style.visibility = 'visible';
}

toAlphabetical("Test");
toAlphabetical("alphabetical");
toAlphabetical("thequickbrownfox");

function toUpper(original){
    const newstring = original.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    upper.textContent += newstring + " ";
    upper.style.visibility = 'visible';
}

toUpper("the quick brown fox");
toUpper("this is a sentence");
toUpper("i love fortnite");
