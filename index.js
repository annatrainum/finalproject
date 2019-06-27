var clear = $(".clear-btn");
var stars = $("#star-container li")

stars.on ('mouseenter', hoverStars);
stars.on('mouseleave', clearHover);
stars.on('click', fillStars);
clear.on('click', clearFill);

function hoverStars() {
  var starNum = $(this).index() + 1;
  stars.removeClass('filled');
  stars.removeClass('hover');
  stars.slice(0, starNum).addClass('filled');
}

function clearHover() {
  stars.removeClass('hover');
}

function clearFill () {
  stars.removeClass('filled');
}
