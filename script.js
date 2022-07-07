let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 10;
canvas.height = canvas.width * (9 / 16);


canvas.style.border = '5px solid red';

let canvas_width = canvas.width;
let canvas_height = canvas.height;
let offset_x;
let offset_y;

let get_offset = function (e) {
  let canvas_offsets = canvas.getBoundingClientRect();
  offset_x = canvas_offsets.left;
  offset_y = canvas_offsets.top;
};

get_offset();
window.onscroll = function () {
  get_offset();
};
window.onresize = function () {
  get_offset();
};
canvas.onresize = function () {
  get_offset();
};

let images = [];
let current_images_index = null;
let is_dragging = false;
let startX;
let startY;
const cat = new Image();
cat.src = 'assets/cat.png';
const dog = new Image();
dog.src = '/assets/dog.png';

images.push({ src: cat, x: 0, y: 0 });
images.push({ src: dog, x: 200, y: 200 });

let is_mouse_in_image = function (image, x, y) {
  console.log('image', image);
  let image_left = image.x;
  let image_right = image.x + image.src.width;
  let image_top = image.y;
  let image_bottom = image.y + image.src.height;

  if (x > image_left && x < image_right && y > image_top && y < image_bottom) {
    return true;
  }
  return false;
};
let mouse_down = function (e) {
  e.preventDefault();
  startX = parseInt(e.clientX - offset_x);
  startY = parseInt(e.clientY - offset_y);

  let index = 0;
  for (let image of images.reverse()) {
    console.log('1');
    if (is_mouse_in_image(image, startX, startY)) {
      console.log('is in image');
      current_image_index = index;
      is_dragging = true;
      return;
    }
    index++;
  }
};

let mouse_up = function (e) {
  if (!is_dragging) {
    return;
  }
  e.preventDefault();
  is_dragging = false;
};
let mouse_out = function (e) {
  if (!is_dragging) {
    return;
  }
  e.preventDefault();
  is_dragging = false;
};

let mouse_move = function (e) {
  if (!is_dragging) {
    return;
  } else {
    e.preventDefault();
    let mouseX = parseInt(e.clientX - offset_x);
    let mouseY = parseInt(e.clientY - offset_y);

    let dx = mouseX - startX;
    let dy = mouseY - startY;

    console.log(dx, dy);

    let current_image = images[current_image_index];
    current_image.x += dx;
    current_image.y += dy;

    draw_images(current_image_index);

    startX = mouseX;
    startY = mouseY;
  }
};

canvas.onmousedown = mouse_down;
canvas.onmouseup = mouse_up;
canvas.onmouseout = mouse_out;
canvas.onmousemove = mouse_move;

let draw_images = function (currentDragimageIndex) {
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  for (let i = 0; i < images.length; i++) {
    if (i !== currentDragimageIndex) {
      let image = images[i];
      ctx.drawImage(image.src, image.x, image.y);
    }
  }
  if (currentDragimageIndex !== null) {
    let image = images[currentDragimageIndex];
    ctx.drawImage(image.src, image.x, image.y);
  }
};

setTimeout(() => {
  draw_images();
}, 1000);
