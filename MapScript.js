//used from previous map as well, I  used audio buttons so the reader does not need an extension
var myAudio = new Audio('audio/audio.mp3');
var myAudio1 = new Audio('audio/a1.mp3');
var myAudio2 = new Audio('audio/a2.mp3');
var myAudio3 = new Audio('audio/a3.mp3');
var myAudio4 = new Audio('audio/a4.mp3');
var myAudio5 = new Audio('audio/a5.mp3');
var myAudio6 = new Audio('audio/a6.mp3');
var myAudio7 = new Audio('audio/a7.mp3');
var myAudio8 = new Audio('audio/a8.mp3');
var myAudi9 = new Audio('audio/a9.mp3');
var myAudi10 = new Audio('audio/a10.mp3');
var myAudi11 = new Audio('audio/a11.mp3');
var myAudio12 = new Audio('audio/a12.mp3');
var myAudio13 = new Audio('audio/a13.mp3');
var myAudio13 = new Audio('audio/a14.mp3');
var myAudio15 = new Audio('audio/a15.mp3');
var myAudio16= new Audio('audio/a16.mp3');

var myAudio17 = new Audio('audio/a17.mp3');
var myAudio18 =  new Audio('audio/a18.mp3');
var myAudio19 = new Audio('audio/a19.mp3');
var myAudio20 = new Audio('audio/a20.mp3');
var myAudio21 = new Audio('audio/a21.mp3');
var myAudio22= new Audio('audio/a22.mp3');
var myAudio23= new Audio('audio/a23.mp3');
var myAudio24 = new Audio('audio/a24.mp3');
var myAudio25= new Audio('audio/a25.mp3');
var myAudio26 = new Audio('audio/a26.mp3');
var myAudio27 = new Audio('audio/a27.mp3');
var myAudio28 = new Audio('audio/a28.mp3');

var popupsound = new Audio('audio/introAudio.mp3');
let isPlaying = false; // creating a boolean statement to control the audio

//the funciton of hiding and playing the audios when we toggle on the buttons
$(document).ready(function(){
    $(".hide").hide();
    $(".pin-alaska").click(function(){
 
        $(".hide").hide();
        $(".alaska-txt").toggle();
        if (isPlaying == true) {
            myAudio.pause()
          } else {
            myAudio.play();
          }
  });
  $(".pin-arizona").click(function(){
    $(".hide").hide();
    $(".arizona-txt").toggle();
    if (isPlaying == true) {
        myAudio1.pause()
      } else {
        myAudio1.play();
      }
});
$(".pin-arkansas").click(function(){
    $(".hide").hide();
    $(".arkansas-txt").toggle();
    if (isPlaying == true) {
        myAudio2.pause()
      } else {
        myAudio2.play();
      }
});
$(".pin-california").click(function(){
    $(".hide").hide();
    $(".california-txt").toggle();
    if (isPlaying == true) {
        myAudio3.pause()
      } else {
        myAudio3.play();
      }
});
$(".pin-colorado").click(function(){
    $(".hide").hide();
    $(".colorado-txt").toggle();
    if (isPlaying == true) {
        myAudio4.pause()
      } else {
        myAudio4.play();
      }
});
$(".pin-florida").click(function(){
    $(".hide").hide();
    $(".florida-txt").toggle();
    if (isPlaying == true) {
        myAudio5.pause()
      } else {
        myAudio5.play();
      }
});
$(".pin-hawaii").click(function(){
    $(".hide").hide();
    $(".hawaii-txt").toggle();
    if (isPlaying == true) {
        myAudio6.pause()
      } else {
        myAudio6.play();
      }
});
$(".pin-idaho").click(function(){
    $(".hide").hide();
    $(".idaho-txt").toggle();
    if (isPlaying == true) {
        myAudio7.pause()
      } else {
        myAudio7.play();
      }
});

$(".pin-illinois").click(function(){
    $(".hide").hide();
    $(".illinois-txt").toggle();
    if (isPlaying == true) {
        myAudio8.pause()
      } else {
        myAudio8.play();
      }
});
$(".pin-indiana").click(function(){
    $(".hide").hide();
    $(".indiana-txt").toggle();
    if (isPlaying == true) {
        myAudio9.pause()
      } else {
        myAudio9.play();
      }
});
$(".pin-kentucky").click(function(){
    $(".hide").hide();
    $(".kentucky-txt").toggle();
    if (isPlaying == true) {
        myAudio10.pause()
      } else {
        myAudio10.play();
      }
});
$(".pin-maine").click(function(){
    $(".hide").hide();
    $(".maine-txt").toggle();
    if (isPlaying == true) {
        myAudio11.pause()
      } else {
        myAudio11.play();
      }
});
$(".pin-michigan").click(function(){
    $(".hide").hide();
    $(".michigan-txt").toggle();
    if (isPlaying == true) {
        myAudio12.pause()
      } else {
        myAudio12.play();
      }
});
$(".pin-minnesota").click(function(){
    $(".hide").hide();
    $(".minnesota-txt").toggle();
    if (isPlaying == true) {
        myAudio13.pause()
      } else {
        myAudio13.play();
      }
});
$(".pin-missouri").click(function(){
    $(".hide").hide();
    $(".missouri-txt").toggle();
    if (isPlaying == true) {
        myAudio14.pause()
      } else {
        myAudio14.play();
      }
});
$(".pin-montana").click(function(){
    $(".hide").hide();
    $(".montana-txt").toggle();
    if (isPlaying == true) {
        myAudio15.pause()
      } else {
        myAudio15.play();
      }
});
$(".pin-nevada").click(function(){
    $(".hide").hide();
    $(".nevada-txt").toggle();
    if (isPlaying == true) {
        myAudio16.pause()
      } else {
        myAudio16.play();
      }
});
$(".pin-northD").click(function(){
    $(".hide").hide();
    $(".northD-txt").toggle();
    if (isPlaying == true) {
        myAudio17.pause()
      } else {
        myAudio17.play();
      }
});
$(".pin-northC").click(function(){
    $(".hide").hide();
    $(".northC-txt").toggle();
    if (isPlaying == true) {
        myAudio18.pause()
      } else {
        myAudio18.play();
      }
});
$(".pin-ohio").click(function(){
    $(".hide").hide();
    $(".ohio-txt").toggle();
    if (isPlaying == true) {
        myAudio19.pause()
      } else {
        myAudio19.play();
      }
});
$(".pin-oregon").click(function(){
    $(".hide").hide();
    $(".oregon-txt").toggle();
    if (isPlaying == true) {
        myAudio20.pause()
      } else {
        myAudio20.play();
      }
});
$(".pin-southC").click(function(){
    $(".hide").hide();
    $(".southC-txt").toggle();
    if (isPlaying == true) {
        myAudio21.pause()
      } else {
        myAudio21.play();
      }
});
$(".pin-southD").click(function(){
    $(".hide").hide();
    $(".southD-txt").toggle();
    if (isPlaying == true) {
        myAudio22.pause()
      } else {
        myAudio22.play();
      }
});
$(".pin-tennessee").click(function(){
    $(".hide").hide();
    $(".tennessee-txt").toggle();
    if (isPlaying == true) {
        myAudio23.pause()
      } else {
        myAudio23.play();
      }
});
$(".pin-texas").click(function(){
    $(".hide").hide();
    $(".texas-txt").toggle();
    if (isPlaying == true) {
        myAudio24.pause()
      } else {
        myAudio24.play();
      }
});
$(".pin-utah").click(function(){
    $(".hide").hide();
    $(".utah-txt").toggle();
    if (isPlaying == true) {
        myAudio25.pause()
      } else {
        myAudio25.play();
      }
});
$(".pin-virginia").click(function(){
    $(".hide").hide();
    $(".virginia-txt").toggle();
    if (isPlaying == true) {
        myAudio26.pause()
      } else {
        myAudio26.play();
      }
});
$(".pin-washington").click(function(){
    $(".hide").hide();
    $(".washington-txt").toggle();
    if (isPlaying == true) {
        myAudio27.pause()
      } else {
        myAudio27.play();
      }
});
$(".pin-wyoming").click(function(){
    $(".hide").hide();
    $(".wyoming-txt").toggle();
    if (isPlaying == true) {
        myAudio28.pause()
      } else {
        myAudio28.play();
      }
});

});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }



