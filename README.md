# p5_number_display
Seven-Segment Display about the coding challenge #117 and try to learn some p5 js

codepen js file
---
```javascript
let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let index = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(0);
  sevenSegment(nums[index]);
  index = (index + 1) % nums.length;
}

function getColor(val, shift) {
  let r = 255;
  let g = 0;
  let b = 0;
  let a = 40 + 255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}

function sevenSegment(val) {
  push();
  noStroke();
  noFill();
  // A
  fill(getColor(val, 6));
  rect(60, 20, 78, 18, 10, 10);
  // B
  fill(getColor(val, 5));
  rect(140, 40, 18, 98, 10, 10);
  // C
  fill(getColor(val, 4));
  rect(140, 160, 18, 98, 10, 10);
  // D
  fill(getColor(val, 3));
  rect(60, 260, 78, 18, 10, 10);
  // E
  fill(getColor(val, 2));
  rect(40, 160, 18, 98, 10, 10);
  // F
  fill(getColor(val, 1));
  rect(40, 40, 18, 98, 10, 10);
  // A
  fill(getColor(val, 0));
  rect(60, 140, 78, 18, 10, 10);

  pop();
}
```

Digit	Display	gfedcba	abcdefg	a	b	c	d	e	f	g
---
0	0	0x3F	0x7E	on	on	on	on	on	on	off
---
1	1	0x06	0x30	off	on	on	off	off	off	off
2	2	0x5B	0x6D	on	on	off	on	on	off	on
3	3	0x4F	0x79	on	on	on	on	off	off	on
4	4	0x66	0x33	off	on	on	off	off	on	on
5	5	0x6D	0x5B	on	off	on	on	off	on	on
6	6	0x7D	0x5F	on	off	on	on	on	on	on
7	7	0x07	0x70	on	on	on	off	off	off	off
8	8	0x7F	0x7F	on	on	on	on	on	on	on
9	9	0x6F	0x7B	on	on	on	on	off	on	on
A	A	0x77	0x77	on	on	on	off	on	on	on
b	b	0x7C	0x1F	off	off	on	on	on	on	on
C	C	0x39	0x4E	on	off	off	on	on	on	off
d	d	0x5E	0x3D	off	on	on	on	on	off	on
E	E	0x79	0x4F	on	off	off	on	on	on	on
F	F	0x71	0x47	on	off	off	off	on	on	on
