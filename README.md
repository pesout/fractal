# Random fractal generator

- Canvas of native JavaScript is used
- Drawing starts in `[x, y]`
- A line continues to `[x+a, y+b]`
- `a` and `b` are variables containing a random value of `1` or `-1`
 - There's a special occasion - if the fractal reaches a border of the canvas, script makes it generate inside it
- After it, the algorithm saves `a` and `b` to `x` and `y` etc.


