const myForm = document.querySelector('#myForm');

const theBody = document.querySelector('body');

function setText(e) {
    const greetingMessage = e.target.greeting.value;

    const birthday = e.target.birthday.checked;
    const christmas = e.target.christmas.checked;
    const anniversary = e.target.anniversary.checked;

    const fullMessage = e.target.message.value;
    
    if(birthday === true) {
        theBody.textContent = `${greetingMessage}. Happy Birthday! ${fullMessage}`;
    }
    else if(christmas === true) {
        theBody.textContent = `${greetingMessage}. Merry Christmas! ${fullMessage}`;
    }
    else if(anniversary === true) {
        theBody.textContent = `${greetingMessage}. Happy Anniversary! ${fullMessage}`;
    }
    else {
        theBody.textContent = `${greetingMessage}. ${fullMessage}`;
    }
}

function setImage(e) {
    let url;

    const birthday = e.target.birthday.checked;
    const christmas = e.target.christmas.checked;
    const anniversary = e.target.anniversary.checked;
    
    if(birthday === true) {
        url = "https://api.unsplash.com/search/photos?client_id=iZH2_OrwSBNV3pq3n6cBSv37PCsoP8hm1Y3Vi80OOKM&query=birthday"; 
    }
    else if(christmas === true) {
        url = "https://api.unsplash.com/search/photos?client_id=iZH2_OrwSBNV3pq3n6cBSv37PCsoP8hm1Y3Vi80OOKM&query=christmas";
    }
    else if(anniversary === true) {
        url = "https://api.unsplash.com/search/photos?client_id=iZH2_OrwSBNV3pq3n6cBSv37PCsoP8hm1Y3Vi80OOKM&query=anniversary";;
    }

    fetch(url).then(response => response.json()).then(response => {
        const imageURL = response.results[Math.floor(Math.random()*response.results.length)].urls.full; //gets random image based on event
        theBody.style.backgroundImage = `url(${imageURL})`; //changes background image
        theBody.style.backgroundSize = "cover"; //makes background image fit screen
        theBody.style.backgroundRepeat = "no-repeat";
    });
};

myForm.addEventListener("submit", e => {
    e.preventDefault();
    setText(e);
    setImage(e);
})





