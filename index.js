function greetingCard() {
    const body = document.querySelector('body');
    let greetingMessage = document.getElementById('#greeting');

    console.log(greetingMessage);

}

const submitForm = document.querySelector('#submitForm');

submitForm.addEventListener("submit", e => {
    e.preventDefault();
})

submitForm.addEventListener("sumbit",greetingCard )
