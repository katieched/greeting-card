const myForm = document.querySelector('#myForm');

const theBody = document.querySelector('body');

myForm.addEventListener("submit", e => {
    e.preventDefault();
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
})


