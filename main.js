// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const removeHidden = document.querySelector('#modal')
  const errorMessage = document.querySelector('#modal-message')
  const heartClick = document.querySelectorAll('.like-glyph')
 
  heartClick.forEach(element => {
  element.addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    if (element.innerHTML === EMPTY_HEART) {
       element.innerHTML = FULL_HEART
       element.className = 'activated-heart'
    } else {
      element.innerHTML = EMPTY_HEART
      elememt.className = 'activated-heart'
    }
  })
  .catch(error => {
    removeHidden.classList.remove('hidden')
    errorMessage.innerHTML = error
    setTimeout(() => {
      removeHidden.classList.add('hidden')
      errorMessage.innerHTML = ''
    }, 3000)
  })
})
})
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
