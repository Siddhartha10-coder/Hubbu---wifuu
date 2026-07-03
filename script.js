window.onload = function () {

    let currentPage = 0;

    const pages = document.querySelectorAll(".page");

    document.getElementById("loading").style.display = "block";
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("book").style.display = "none";

    pages.forEach((page,index)=>{
        page.style.display = index===0 ? "block":"none";
    });

    setTimeout(()=>{
        document.getElementById("loading").style.display="none";
        document.getElementById("lockscreen").style.display="block";
    },2500);

    window.checkPass=function(){

        if(document.getElementById("password").value==="2824"){

            document.getElementById("lockscreen").style.display="none";
            document.getElementById("book").style.display="block";

        }else{

            document.getElementById("wrong").innerHTML="❌ Wrong Passcode";

        }

    }

    window.nextPage=function(){

        pages[currentPage].style.display="none";

        currentPage++;

        if(currentPage<pages.length){

            pages[currentPage].style.display="block";

        }

    }

    window.playMusic=function(){

        window.open("https://youtu.be/dQw4w9WgXcQ","_blank");

    }

}
