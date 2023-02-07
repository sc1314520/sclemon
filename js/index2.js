$(document).ready(function () {
    $('.home').hover(function (event) {
        event.preventDefault();
        $('.home-text').addClass("animate__lightSpeedInLeft");
      });
      $('.home').hover(function (event) {
        event.preventDefault();
        $('.home-text2').addClass("animate__lightSpeedInRight");
      });
    $('.about').hover(function (event) {
        event.preventDefault();
        $('.about h1').addClass("animate__bounceIn");
      });
      $('.skills').hover(function (event) {
        event.preventDefault();
        $('.skills h1').addClass("animate__bounceIn");
      });
      $('.project').hover(function (event) {
        event.preventDefault();
        $('.project>h1').addClass("animate__bounceIn");
        $('.content').addClass("animate__fadeIn");
      });
      // basic 
      $('.ph').hover(function (event) {
        event.preventDefault();
        $('.chart-block-all').addClass("animate__fadeInUp");
      });
      $('.main-content-all').hover(function (event) {
        event.preventDefault();
        $('.my-intro').addClass("animate__fadeInUp");
      });
      $('.c2').hover(function (event) {
        event.preventDefault();
        $('.achievement').addClass("animate__fadeInUp");
      });
      //-----------------------------------------//
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


      $('.edu-click').click(function (event) {
        event.preventDefault();
        $('.edu-open').addClass("edu-open-2");
      });
      $('.close-button4').click(function (event) {
        event.preventDefault();
        $('.edu-open').toggleClass("edu-open-2");
      });
      // basic
      $('.r1').click(function (event) {
        event.preventDefault();
        $('.r1').addClass("change");
        $('.r1').siblings().removeClass("change");
        $('.my-intro-text').css("font-size","22px");
      });
      $('.r2').click(function (event) {
        event.preventDefault();
        $('.r2').addClass("change");
        $('.r2').siblings().removeClass("change");
        $('.my-intro-text').css("font-size","18px");
      });
      $('.r3').click(function (event) {
        event.preventDefault();
        $('.r3').addClass("change");
        $('.r3').siblings().removeClass("change");
        $('.my-intro-text').css("font-size","14px");
      });



      //--------------------------------------------//
      //查詢
      $('.search-ico-1').click(function (event) {
      let search=document.getElementById("search-select").value;
      if(search=="all"){
        $('#1').show().siblings().show();
        $('#1').css("display","flex").siblings().css("display","flex");
      }
      else if(search==1){
        $('#1').show().siblings().hide();
        $('#1').css("display","flex");
      }
      else if(search==2){
        $('#2').show().siblings().hide();
        $('#2').css("display","flex");
      }
      else if(search==3){
        $('#3').show().siblings().hide();
        $('#3').css("display","flex");
      }
      else if(search==4){
        $('#4').show().siblings().hide();
        $('#4').css("display","flex");
      }
      else if(search==5){
        $('#5').show().siblings().hide();
        $('#5').css("display","flex");
      }
      else if(search==6){
        $('#6').show().siblings().hide();
        $('#6').css("display","flex");
      }
      else if(search==7){
        $('#7').show().siblings().hide();
        $('#7').css("display","flex");
      }
      else if(search==8){
        $('#8').show().siblings().hide();
        $('#8').css("display","flex");
      }
      else if(search==9){
        $('#9').show().siblings().hide();
        $('#9').css("display","flex");
      }
      else if(search==10){
        $('#10').show().siblings().hide();
        $('#10').css("display","flex");
      }
      else if(search==11){
        $('#11').show().siblings().hide();
        $('#11').css("display","flex");
      }
      else if(search==12){
        $('#12').show().siblings().hide();
        $('#12').css("display","flex");
      }
      else if(search==13){
        $('#13').show().siblings().hide();
        $('#13').css("display","flex");
      }
      else if(search==14){
        $('#14').show().siblings().hide();
        $('#14').css("display","flex");
      }
      else if(search==15){
        $('#15').show().siblings().hide();
        $('#15').css("display","flex");
      }
      
        $('.page').hide();
        $('.page-c').hide();
      });
      
      // 技巧過程
      $('.skills-text-mark').click(function (event) {
        event.preventDefault();
        $('.skills-text-mark-block').addClass("skills-text-mark-block-2");
      });
      $('.skills-btn-1').click(function (event) {
        event.preventDefault();
        $('.skills-text-mark-block').toggleClass("skills-text-mark-block-2");
      });

      //換頁
      let i=1;
      $('.down').click(function (event) {
        event.preventDefault();
        if(i<5){
          i++;
          if(i==2){
            $('#10').toggleClass("page-close");
            $('#11').toggleClass("page-close");
            $('#12').toggleClass("page-close");
            $('#13').toggleClass("page-close");
            $('#14').toggleClass("page-close");
            $('#15').toggleClass("page-close");
          }
          if(i==3){
            $('#7').toggleClass("page-close");
            $('#8').toggleClass("page-close");
            $('#9').toggleClass("page-close");
            $('#10').toggleClass("page-close");
            $('#11').toggleClass("page-close");
            $('#12').toggleClass("page-close");
          }
          else if(i==4){
            $('#4').toggleClass("page-close");
            $('#5').toggleClass("page-close");
            $('#6').toggleClass("page-close");
            $('#7').toggleClass("page-close");
            $('#8').toggleClass("page-close");
            $('#9').toggleClass("page-close");
          }
          else if(i==5){
            $('#1').toggleClass("page-close");
            $('#2').toggleClass("page-close");
            $('#3').toggleClass("page-close");
            $('#4').toggleClass("page-close");
            $('#5').toggleClass("page-close");
            $('#6').toggleClass("page-close");
          }
        }
        let x =document.getElementById("page-c");
        x.innerHTML="(目前頁數為："+i+")";
      });
      $('.up').click(function (event) {
        event.preventDefault();
        if(i>1){
          i--;
          if(i==4){
            $('#1').toggleClass("page-close");
            $('#2').toggleClass("page-close");
            $('#3').toggleClass("page-close");
            $('#4').toggleClass("page-close");
            $('#5').toggleClass("page-close");
            $('#6').toggleClass("page-close");
          }
          else if(i==3){
            $('#4').toggleClass("page-close");
            $('#5').toggleClass("page-close");
            $('#6').toggleClass("page-close");
            $('#7').toggleClass("page-close");
            $('#8').toggleClass("page-close");
            $('#9').toggleClass("page-close");
          }
          else if(i==2){
            $('#7').toggleClass("page-close");
            $('#8').toggleClass("page-close");
            $('#9').toggleClass("page-close");
            $('#10').toggleClass("page-close");
            $('#11').toggleClass("page-close");
            $('#12').toggleClass("page-close");
          }
          else if(i==1){
            $('#10').toggleClass("page-close");
            $('#11').toggleClass("page-close");
            $('#12').toggleClass("page-close");
            $('#13').toggleClass("page-close");
            $('#14').toggleClass("page-close");
            $('#15').toggleClass("page-close");
          }
        }
        let x =document.getElementById("page-c");
        x.innerHTML="(目前頁數為："+i+")";
      });

});
