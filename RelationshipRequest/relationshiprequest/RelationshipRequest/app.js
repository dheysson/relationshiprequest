window.onload = function() {
  const parent = document.querySelector('#sky')
  var heartColor = '#fff'

  function instantiateHeart() {
    const heart = document.createElement('p')
    heart.innerHTML = '❤'
    heart.classList.add('heart')
    heart.style.color = heartColor
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.transform = `rotateZ(${Math.floor(Math.random() * 360)}deg)`
    heart.style.fontSize = Math.random() * 25 + 'px'
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'
    parent.appendChild(heart)
  }

  setInterval(instantiateHeart, 50)

  const noButton = document.querySelectorAll('button')[1]
  noButton.addEventListener('mouseover', () => {
    noButton.style.left = Math.round(Math.random() * 80) + '%' 
    noButton.style.top = Math.round(Math.random() * 80) + '%' 
  })

  noButton.addEventListener('click', () => {
    noButton.style.left = Math.round(Math.random() * 80) + '%' 
    noButton.style.top = Math.round(Math.random() * 80) + '%' 
  })
  
  const yesButton = document.querySelectorAll('button')[0]
  yesButton.addEventListener('click', () => {
    document.querySelector('span').innerHTML = 'Essa foi a melhor escolha que você já fez!'
    yesButton.remove()
    noButton.remove()
    heartColor = '#f00'
    document.querySelector('iframe').style.display = 'inherit'
  })
}