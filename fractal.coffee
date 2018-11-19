###
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
###

canvas = document.getElementById('myCanvas')

draw = ->
  #Variables with random values declatarion
  xnahoda = Math.round(Math.random())
  ynahoda = Math.round(Math.random())
  anahoda = Math.round(Math.random())
  bnahoda = Math.round(Math.random())
  #Drawing, which depends on previous code
  if xnahoda == 1 and x > 0
    x = x - 1
  else
    if x < sx
      x = x + 1
  if ynahoda == 1 and y > 0
    y = y - 1
  else
    if y < sy
      y = y + 1
  if anahoda == 1
    a = x + 1
  else
    a = x - 1
  if bnahoda == 1
    b = y + 1
  else
    b = y - 1
  elem = document.getElementById('myCanvas')
  context = elem.getContext('2d')
  #Color changing for fun
  context.strokeStyle = '#00f'
  if ynahoda == 1 or xnahoda == 1
    context.strokeStyle = '#0f0'
  #Line render
  context.lineWidth = 5
  context.beginPath()
  context.moveTo x, y
  context.lineTo a, b
  context.stroke()
  return

#Function of repeating every millisecond

rep = ->
  window.setInterval 'draw()', 1
  return

canvas.width = window.innerWidth
#The canvas uses the whole browser window
canvas.height = window.innerHeight
#Center of the page
x = Math.round(window.innerWidth / 2)
y = Math.round(window.innerHeight / 2)
a = x
b = y
sx = x * 2
sy = y * 2
#Repeating of repeating :-)
window.setInterval 'rep()', 1
