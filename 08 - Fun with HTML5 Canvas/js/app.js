const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
const colorPicker = document.querySelector('#color');
const lineSize = document.querySelector('#size');
let startX = 0;
let startY = 0;
let isDrawing = false;
// this attribute is in css pixel
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineCap = 'round';
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = lineSize.value;

const handleMouseDown = (e) => {
  [startX, startY] = [e.offsetX, e.offsetY];
  isDrawing = true;
};

const handleMouseUp = () => {
  isDrawing = false;
};

const handleMouseMove = (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [startX, startY] = [e.offsetX, e.offsetY];
};

const handleColorChange = (e) => {
  ctx.strokeStyle = e.target.value;
};

const handleLineSizeChange = (e) => {
  ctx.lineWidth = e.target.value;
};

canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);
canvas.addEventListener('mousemove', handleMouseMove);
colorPicker.addEventListener('change', handleColorChange);
lineSize.addEventListener('change', handleLineSizeChange);
