$(document).ready(function () {
  $('.icon-menu').click(function (event) {
    $(".icon-menu,.header__menu-list").toggleClass("active");
    $('body').toggleClass("lock");
  });
});