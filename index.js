let start = new Date().getTime();

const makeShapeAppear = () => {
    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
}

setTimeout(makeShapeAppear, Math.random() * 2000);

document.getElementById("shape").onclick = () => {
    document.getElementById("shape").style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    makeShapeAppear();
}