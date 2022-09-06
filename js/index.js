$(document).ready(function () {
    $('.home').hover(function (event) {
        event.preventDefault();
        $('.home-text').toggleClass("animate__lightSpeedInLeft");
      });
      $('.home').hover(function (event) {
        event.preventDefault();
        $('.home-text2').toggleClass("animate__lightSpeedInRight");
      });
    $('.about').hover(function (event) {
        event.preventDefault();
        $('.about h1').toggleClass("animate__bounceIn");
      });
      $('.skills').hover(function (event) {
        event.preventDefault();
        $('.skills h1').toggleClass("animate__bounceIn");
      });
      $('.project').hover(function (event) {
        event.preventDefault();
        $('.project>h1').toggleClass("animate__bounceIn");
        $('.content').addClass("animate__fadeIn");
      });

      $('.ocpjp-click').click(function (event) {
        event.preventDefault();
        $('.ocp-open').addClass("ocp-open-2");
      });
      $('.close-button').click(function (event) {
        event.preventDefault();
        $('.ocp-open').toggleClass("ocp-open-2");
      });



      $('.fans-click').click(function (event) {
        event.preventDefault();
        $('.fans-open').addClass("fans-open-2");
      });
      $('.close-button2').click(function (event) {
        event.preventDefault();
        $('.fans-open').toggleClass("fans-open-2");
      });


      
      $('.ntnu-click').click(function (event) {
        event.preventDefault();
        $('.ntnu-open').addClass("ntnu-open-2");
      });
      $('.close-button3').click(function (event) {
        event.preventDefault();
        $('.ntnu-open').toggleClass("ntnu-open-2");
      });
});
function VS(){
  let pw=document.getElementById("fans-hide");
  let password = document.getElementById("password").value;
  let t=new Date(1988888820).getFullYear();
  let c=("SC1314520,Ting1314520,5205201314520,NC IS SO CUTE").split(",")[3].length;
  let salt = (document.getElementById("salt").value+c)*t;
  let verify=password*salt;
  if(verify=="340307683017200"){
    pw.style.display="none";
  }
  else{
    alert("驗證碼錯誤");
  }
}

