const myForm = document.querySelector('#myForm');

const theBody = document.querySelector('body');

myForm.addEventListener("submit", e => {
    e.preventDefault();
    const greetingMessage = e.target.greeting.value;

    const birthday = e.target.birthday.value;
    const christmas = e.target.christmas.value;
    const anniversary = e.target.anniversary.value;

    const fullMessage = e.target.message.value;

    
    if(birthday === "on") {
        theBody.textContent = `${greetingMessage}. Happy Birthday! ${fullMessage}`;
    }
    else if(christmas === "on") {
        theBody.textContent = `${greetingMessage}. Merry Christmas! ${fullMessage}`;
    }
    else if(anniversary === "on") {
        theBody.textContent = `${greetingMessage}. Happy Anniversary! ${fullMessage}`;
    }
    else {
        theBody.textContent = `${greetingMessage}. ${fullMessage}`;
    }
})


