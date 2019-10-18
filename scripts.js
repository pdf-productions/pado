let h = document.getElementById("h1");
let btn = document.getElementById("btn");
let zbtn = document.getElementById("zbtn");
let sw = false;

btn.onclick = () => {
    if (sw) {
        h.textContent = "Paul ist duhm.";
        sw = !sw;
    } else {
        h.textContent = "Dooominik isses.";
        sw = !sw;
    }
};

zbtn.onclick = () => {
    h.textContent = "Hallo Zoe! :D";
};