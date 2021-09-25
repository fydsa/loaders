const dot_one = document.querySelector("div > div:nth-child(1)");
const dot_five = document.querySelector("div > div:nth-child(5)");

const loader = document.querySelector(".loader");

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;
  let dot_five_blink_animation = dot_five.style.animation;

  if (!dot_one_blink_animation.includes("blink-animation")) {
    dot_one.style.animation = "blink-animation 0.5s infinite";
    dot_five.style.animation = "blink-animation 0.5s infinite";
  } else {
    dot_one.style.animation = "none";
    dot_five.style.animation = "none";
  }
}, 1000);

setInterval(() => {
  let loader_rotate_up = loader.style.animation;

  if (!loader_rotate_up.includes("loader-rotate-up")) {
    loader.style.animation = "loader-rotate-up 3s ease-out 1s";
  } else {
    loader.style.animation = "none";
  }
}, 4000);

setInterval(() => {
  let loader_rotate_down = loader.style.animation;

  if (!loader_rotate_down.includes("loader-rotate-down")) {
    loader.style.animation = "loader-rotate-down 3s ease-out 1s";
  } else {
    loader.style.animation = "none";
  }
}, 8000);

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;

  if (!dot_one_blink_animation.includes("resize-animation")) {
    dot_one.style.animation = "resize-animation 0.7s infinite 0.1s";
  } else {
    dot_one.style.animation = "none";
  }
}, 5000);
