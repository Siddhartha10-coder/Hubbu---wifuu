const PASSWORD = "2824";

let pages = [];
let currentPage = 0;

window.onload = function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("lockscreen").style.display = "block";

    pages = document.querySelectorAll(".page");

    pages.forEach(page => page.style.display = "none");
};

function checkPass() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        document.getElementById("lockscreen").style.display = "none";
        document.getElementById("book").style.display = "block";

        currentPage = 0;
        pages[0].style.display = "block";
    } else {
        document.getElementById("wrong").innerHTML = "❌ Wrong Passcode";
    }
}

function nextPage() {
    pages[currentPage].style.display = "none";
    currentPage++;

    if (currentPage < pages.length) {
        pages[currentPage].style.display = "block";
    }
}
