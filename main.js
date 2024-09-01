function moveButton() {
    console.log("working");
    var x = Math.random() * (window.innerWidth - document.getElementById('left').offsetWidth) - 500;
    console.log(x);
    var y = Math.random() * (window.innerHeight - document.getElementById('left').offsetHeight) - 500;
    document.getElementById('left').style.left = `${x}px`;
    document.getElementById('left').style.top = `${y}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}