$(document).ready(function () {
    $(".dropdown-list").hover(
      function () {
        $(this).addClass("dropdown-menu");
      },
      function () {
        $(this).removeClass("dropdown-menu");
      }
    );
  });