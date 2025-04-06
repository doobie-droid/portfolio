function SetTheme() {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  } catch (err) {
    console.log(err);
  }
}

const coords = { X: 0, Y: 0 };
const circles = document.querySelectorAll(".circle");

function CreateMouseTrail() {
  const container = document.documentElement;

  for (let i = 0; i < 100; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.opacity = 0;
    container.appendChild(circle);
  }
}
function AnimateCircles() {
  let x = coords.X;
  let y = coords.Y;

  const circles = document.querySelectorAll(".circle");
  circles.forEach(function (circle) {
    if (circle.x === undefined) {
      circle.x = 0;
      circle.y = 0;
    }
  });
  circles.forEach(function (circle, index) {
    const maxX = window.innerWidth - 24;
    const maxY = window.innerHeight - 36;

    const clampedX = Math.max(0, Math.min(x - 12, maxX));
    const clampedY = Math.max(0, Math.min(y - 12, maxY));
    circle.style.scale = (circles.length - index) / circles.length;
    circle.style.left = clampedX + "px";
    circle.style.top = clampedY + "px";

    circle.x = x;
    circle.y = y;
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.05;
    y += (nextCircle.y - y) * 0.05;
  });
  requestAnimationFrame(AnimateCircles);
}

function checkCursorStyle() {
  const el = document.elementFromPoint(coords.X, coords.Y);
  if (!el) return;

  const cursorStyle = getComputedStyle(el).cursor;

  if (
    cursorStyle === "pointer" ||
    cursorStyle === "zoom-in" ||
    cursorStyle === "zoom-out"
  ) {
    hideCircles();
  } else {
    showCircles();
  }
}
function hideCircles() {
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.style.opacity = "0";
  });
}

function showCircles() {
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.style.opacity = "1";
  });
}
function SetMouseTrail() {
  CreateMouseTrail();
  window.addEventListener("mousemove", function (event) {
    coords.X = event.clientX;
    coords.Y = event.clientY;

    checkCursorStyle();
  });
  document.addEventListener("mouseleave", function () {
    hideCircles();
  });
  document.addEventListener("mouseenter", function () {
    showCircles();
  });
}
AnimateCircles();
SetTheme();
SetMouseTrail();
