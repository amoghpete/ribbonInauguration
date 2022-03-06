window.onload = function () 
{
  var video = document.getElementById("video");
  var ribbonImg = document.getElementById("ribbonImg");
  var ribbonLeft = document.getElementById("ribbonLeft");
  var ribbonRight = document.getElementById("ribbonRight");

  ribbonImg.onclick = function () {
    cutFunc();
  };

  ribbonLeft.onclick = function () {
    cutFunc();
  };

  ribbonRight.onclick = function () {
    cutFunc();
  };

  function cutFunc() {

    ribbonImg.style.transform = "translateY(60vh)";
    ribbonLeft.style.transform = "rotate(90deg)";
    ribbonRight.style.transform = "rotate(-90deg)";
    setTimeout(function () {
      video.style.opacity = "1";
      video.style.filter = "blur(0)";
    }, 1500);
    

    if (video.paused){
        setTimeout(function () {
          video.play();
        }, 4000);
    } 
  }
};
