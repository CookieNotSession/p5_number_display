//CookieNotSession Pratice

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
