window.onload = function() {
  const parent = document.querySelector('#sky')

  function instantiateHeart() {
    const heart = document.createElement('p')
    heart.innerHTML = '❤'
    heart.classList.add('heart')
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.transform = `rotateZ(${Math.floor(Math.random() * 360)}deg)`
    heart.style.fontSize = Math.random() * 25 + 'px'
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'
    parent.appendChild(heart)
  }

  setInterval(instantiateHeart, 50)

  const button = document.querySelectorAll('button')[1]

  button.addEventListener('mouseover', () => {
    button.style.left = Math.round(Math.random() * 80) + '%' 
    button.style.top = Math.round(Math.random() * 80) + '%' 
  })

  button.addEventListener('mousedown', () => {
    button.style.left = Math.round(Math.random() * 80) + '%' 
    button.style.top = Math.round(Math.random() * 80) + '%' 
  })
  
}