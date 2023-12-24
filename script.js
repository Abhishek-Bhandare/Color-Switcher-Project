const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const myBody = document.querySelector('body')

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      myBody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      myBody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      myBody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      myBody.style.backgroundColor = e.target.id
    }
  })
});