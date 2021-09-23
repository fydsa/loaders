const dot_one = document.querySelector("div > div:nth-child(1)");
const loader = document.querySelector(".loader");

setInterval(() => {
  let dot_one_blink_animation = dot_one.style.animation;

  if (!dot_one_blink_animation.includes("blink-animation")) {
    dot_one.style.animation = "blink-animation 1s infinite 0s";
  } else {
    dot_one.style.animation = "none";
  }
}, 3000);

setInterval(() => {
  let loader_rotate_up = loader.style.animation;

  if (!loader_rotate_up.includes("loader-rotate-up")) {
    loader.style.animation = "loader-rotate-up 3s ease-out 0s forwards";
  } else {
    loader.style.animation = "none";
  }
}, 4000);

// setInterval(() => {
//   let loader_rotate_down = loader.style.animation;

//   if (!loader_rotate_down.includes("loader-rotate-down")) {
//     loader.style.animation = "loader-rotate-down 1s ease-out 0s forwards";
//   } else {
//     loader.style.animation = "none";
//   }
// }, 4000);
