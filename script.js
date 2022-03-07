window.onload = function () 
{
  var videoWrap = document.getElementById("videoWrap");
  var venueText = document.getElementById("venueText");
  var video = document.getElementById("video");
  var audio = document.getElementById("audio");
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
    audio.play();
    ribbonImg.style.transform = "translateY(60vh)";
    ribbonLeft.style.transform = "rotate(90deg)";
    ribbonRight.style.transform = "rotate(-90deg)";
    setTimeout(function () {
      videoWrap.style.opacity = "1";
      videoWrap.style.filter = "blur(0)";
      videoWrap.style.height = "75vh";
      venueText.style.paddingBottom = "-15vh"
    }, 500);
    

    if (video.paused){
        setTimeout(function () {
          video.play();
        }, 4000);
        setTimeout(function () {
          videoWrap.style.height = "55vh";
        }, 124000);
    } 
  }
};
