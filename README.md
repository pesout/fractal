# Random fractal generator

- Canvas of native JavaScript is used
- Drawing starts in `[x, y]`
- A line continues to `[x+a, y+b]`
- `a` and `b` are variables containing a random value of `1` or `-1`
 - There's a special occasion - if the fractal reaches a border of the canvas, script makes it generate inside it
- After it, the algorithm saves `a` and `b` to `x` and `y` and so on

[Check out how it works.](http://rawgit.com/pesout/fractal/master/index.html)

It's possible to run this yourself (e.g. in a iframe) by copying this syntax to your HTML file:

```html
<canvas id="myCanvas" style=" position:absolute; left:0px; top:0px;">
	There's no support for canvas. 
</canvas>
<script src="http://rawgit.com/pesout/fractal/master/fractal.js"></script>
```
