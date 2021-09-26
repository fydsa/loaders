const dot_one = document.querySelector("div > div:nth-child(1)");
const dot_three = document.querySelector("div > div:nth-child(3)");
const dot_five = document.querySelector("div > div:nth-child(5)");
const dot_two_four = document.querySelectorAll("div > div:nth-child(even)");

const loader = document.querySelector(".loader");

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;

  if (!dot_one_blink_animation.includes("blink-animation")) {
    dot_one.style.animation = "blink-animation 0.5s infinite";
    dot_five.style.animation = "blink-animation 0.5s infinite";
  } else {
    dot_one.style.animation = "none";
    dot_five.style.animation = "none";
  }
}, 1000);

setInterval(() => {
  let dot_two_blink_animation = dot_two_four[0].style.animation;

  if (!dot_two_blink_animation.includes("blink-animation")) {
    dot_two_four.forEach((el) => {
      el.style.animation = "blink-animation 0.5s infinite";
    });
  } else {
    dot_two_four.forEach((el) => {
      el.style.animation = "blink-animation 0.5s infinite";
    });
  }
}, 1100);

setInterval(() => {
  let dot_three_blink_animation = dot_three.style.animation;

  if (!dot_three_blink_animation.includes("blink-animation")) {
    dot_three.style.animation = "blink-animation 0.5s infinite";
  } else {
    dot_three.style.animation = "none";
  }
}, 1200);

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
  let dot_one_animation = dot_one.style.animation;

  if (!dot_one_animation.includes("resize-animation-one")) {
    dot_one.style.animation = "resize-animation-one 0.7s infinite 0.1s";
    dot_five.style.animation = "resize-animation-one 0.7s infinite 0.1s";
  } else {
    dot_one.style.animation = "none";
    dot_five.style.animation = "none";
  }
}, 5000);

setInterval(() => {
  let dot_two_animation = dot_two_four[0].style.animation;

  if (!dot_two_animation.includes("resize-animation-two")) {
    dot_two_four.forEach((el) => {
      el.style.animation = "resize-animation-two 0.7s infinite 0.1s";
    });
  } else {
    dot_two_four.forEach((el) => {
      el.style.animation = "resize-animation-two 0.7s infinite 0.15s";
    });
  }
}, 5000);

setInterval(() => {
  let dot_three_animation = dot_three.style.animation;

  if (!dot_three_animation.includes("resize-animation-three")) {
    dot_three.style.animation = "resize-animation-three 1s infinite 0.1s";
  } else {
    dot_three.style.animation = "none";
  }
}, 5000);
