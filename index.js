let start = new Date().getTime();

document.getElementById("shape").onclick = () => {
    document.getElementById("shape").style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
}