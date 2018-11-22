# p5_number_display
Seven-Segment Display about the coding challenge #117 and try to learn some p5 js

### 利用js呈現的seven-segment display
<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/7-segment_abcdef.svg/2000px-7-segment_abcdef.svg.png height=400px>
### The individual segments of a seven-segment display
<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/7_Segment_Display_with_Labeled_Segments.svg/220px-7_Segment_Display_with_Labeled_Segments.svg.png height=400px>

### Displaying letters
<img src=https://i.imgur.com/WfhAsJ4.png height=500px>




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
