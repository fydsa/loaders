const dot_one = document.querySelector("div > div:nth-child(1)");

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;

  if (!dot_one_blink_animation.includes("blink-animation")) {
    dot_one.style.animation = "blink-animation 0.6s infinite 0.2s";
  } else {
    dot_one.style.animation = "none";
  }
}, 2000);
