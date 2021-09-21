const dot_one = document.querySelector("div > div:nth-child(1)");
const loader = document.querySelector(".loader");

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;

  if (!dot_one_blink_animation.includes("blink-animation")) {
    dot_one.style.animation = "blink-animation 0.6s infinite 0.1s";
  } else {
    dot_one.style.animation = "none";
  }
}, 2000);

setInterval(() => {
  let loader_rotate_top = loader.style.animation;

  if (!loader_rotate_top.includes("loader-rotate-up")) {
    loader.style.animation = "loader-rotate-up 1.5s ease-in-out 0.1s forwards";
  } else {
    loader.style.animation = "none";
  }
}, 4000);
