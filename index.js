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
    const url = "http://api.unsplash.com/search/photos?client_id=iZH2_OrwSBNV3pq3n6cBSv37PCsoP8hm1Y3Vi80OOKM&query=birthday";
    fetch(url, { mode: "no-cors" }).then(console.log);
}

myForm.addEventListener("submit", e => {
    e.preventDefault();
    setText(e);
    setImage(e);
    

    //theBody.style.backgroundImage = "url(https://tse3.mm.bing.net/th?id=OIP.GC-l3l2nSg--IYzesm-m_QHaE7&pid=Api)";
    //theBody.style.width =
})





