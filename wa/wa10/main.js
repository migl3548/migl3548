const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 19 fahrenheit outside, so :insertx: decided to stay inside for the day. They were about to watch :inserty: on Netflix, but all of a sudden :insertz:. Bob, a side character, then decided to do some unit conversion. Three Hundred Pounds is equal to 300 pounds.";

const insertX = [
    "Ari",
    "Haru",
    "Former President Bill Clinton"
  ];

  
  const insertY = [
    "Bojack",
    "Black Mirror",
    "Cyberpunk"
  ];

  const insertZ = [
    "fell into an eternal slumber",
    "decided they would rather stand in below freezing temperatures",
    "decided to order something on doordash first"
  ];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem)
                       .replace(/:inserty:/g, yItem)
                       .replace(/:insertz:/g, zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature = Math.round((19 - 32) * (5 / 9)) + ' centigrade';

        newStory = newStory.replace('300 pounds', weight)
                           .replace('19 fahrenheit', temperature);
    }

    

    story.textContent = newStory;
    story.style.visibility = 'visible';
}