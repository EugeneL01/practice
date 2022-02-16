let start = new Date().getTime();

const getRandomColor = () => {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const makeShapeAppear = () => {
  if (Math.random() > 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0";
  }
  const top = Math.random() * 200;
  document.getElementById("shape").style.top = top + "px";

  const left = Math.random() * 1000;
  document.getElementById("shape").style.left = left + "px";

  const size = Math.random() * 300 + 100;
  document.getElementById("shape").style.width = size + "px";
  document.getElementById("shape").style.height = size + "px";

  document.getElementById("shape").style.backgroundColor = getRandomColor();

  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
};

const appearAfterDelay = () => {
  setTimeout(makeShapeAppear, Math.random() * 2000);
};

let arr = [];

appearAfterDelay();
document.getElementById("shape").onclick = () => {
  document.getElementById("shape").style.display = "none";

  let end = new Date().getTime();
  let timeTaken = (end - start) / 1000;

  arr.push(timeTaken);
  const avgTime = arr.reduce((a,b) => a + b) / arr.length;

  document.getElementById("timeTaken").innerHTML = timeTaken + "s";
  document.getElementById("avgTime").innerHTML = avgTime + "s";

  appearAfterDelay();
};