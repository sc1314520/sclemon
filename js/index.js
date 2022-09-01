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
});

