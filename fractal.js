var a, b, canvas, draw, rep, sx, sy, x, y;

canvas = document.getElementById('myCanvas');

draw = function() {
  var a, anahoda, b, bnahoda, context, elem, x, xnahoda, y, ynahoda;
  xnahoda = Math.round(Math.random());
  ynahoda = Math.round(Math.random());
  anahoda = Math.round(Math.random());
  bnahoda = Math.round(Math.random());
  if (xnahoda === 1 && x > 0) {
    x = x - 1;
  } else {
    if (x < sx) {
      x = x + 1;
    }
  }
  if (ynahoda === 1 && y > 0) {
    y = y - 1;
  } else {
    if (y < sy) {
      y = y + 1;
    }
  }
  if (anahoda === 1) {
    a = x + 1;
  } else {
    a = x - 1;
  }
  if (bnahoda === 1) {
    b = y + 1;
  } else {
    b = y - 1;
  }
  elem = document.getElementById('myCanvas');
  context = elem.getContext('2d');
  context.strokeStyle = '#00f';
  if (ynahoda === 1 || xnahoda === 1) {
    context.strokeStyle = '#0f0';
  }
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(a, b);
  context.stroke();
};

rep = function() {
  window.setInterval('draw()', 1);
};

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

x = Math.round(window.innerWidth / 2);

y = Math.round(window.innerHeight / 2);

a = x;

b = y;

sx = x * 2;

sy = y * 2;

window.setInterval('rep()', 1);
