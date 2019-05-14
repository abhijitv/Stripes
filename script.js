/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const penColor = document.querySelector('input[name="penColor"]');
const penWidth = document.querySelector('input[name="penWidth"]');
const Saver = document.querySelector('#saver');

ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.linCap = 'round';
ctx.lineWidth = 5;

let pen = {
  x: 0,
  y: 0,
  down: false,
};


function saveFile() {
  console.log('saving file');
  let image = canvas.toDataURL();
  document.getElementById('myImage').src = image;
}

function draw(e) {
  console.log('move');
  if (!pen.down) return;
  ctx.lineWidth = penWidth.value;
  ctx.strokeStyle = penColor.value;
  ctx.beginPath();
  ctx.moveTo(pen.x, pen.y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [pen.x, pen.y] = [e.offsetX, e.offsetY];
}

function penDown(e) {
  pen.down = true;
  [pen.x, pen.y] = [e.offsetX, e.offsetY];
  console.log(e);
}

function noDown() {
  console.log('out');
  pen.down = false;
}

Saver.addEventListener('click', saveFile);
canvas.addEventListener('mousedown', penDown);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', noDown);
canvas.addEventListener('mouseout', noDown);
