const resize = require('../lib')()
const p = document.querySelector('p')

resize.on('start', () => {
  console.log('start')
  p.innerHTML = 'Resizing'
  document.body.style.backgroundColor = 'lightgreen'
})

resize.on('end', () => {
  console.log('end')
  p.innerHTML = 'Not resizing'
  document.body.style.backgroundColor = '#ff5555'
})
