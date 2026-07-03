let currentPage = 0;

const pages = document.querySelectorAll(".page");

pages.forEach((page, index) => {
  if (index !== 0) {
    page.style.display = "none";
  }
});

function checkPass() {
  const pass = document.getElementById("password").value;

  if (pass === "2824") {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("book").style.display = "block";
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
