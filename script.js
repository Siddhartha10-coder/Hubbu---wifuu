// ===== Hubbu ❤️ Wifuu =====

const loading = document.getElementById("loading");
const lockscreen = document.getElementById("lockscreen");
const book = document.getElementById("book");

setTimeout(() => {
    loading.style.display = "none";
    lockscreen.style.display = "flex";
}, 3000);

function checkPass() {

    const pass = document.getElementById("password").value;

    if (pass === "2824") {

        lockscreen.style.display = "none";
        book.style.display = "block";

    } else {

        document.getElementById("wrong").innerHTML =
        "❤️ Wrong Passcode... Try Again Wifuu ❤️";

    }

}

function nextPage(){

    alert("🌹 Next Page Coming Soon ❤️");

}
