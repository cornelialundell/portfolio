function toggleMenu() {
	$('#menu').slideToggle(300);
	$('.hamburger-shell').toggleClass('menu-open');
	let expanded = $('.hamburger-shell').attr('aria-expanded') == true;
	$('.hamburger-shell').attr('aria-expanded', !expanded);
}
function hideMenu() {
    $('#menu').hide();
    $('.hamburger-shell').removeClass('menu-open')
}

$(function () {
    console.log('hej vad kul att du kollar på min kod:)')
    console.log('mejla mig också')
  //ANIMATION
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.fromTo(
    "h1",
    { y: "50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 0.2, stagger: 1 }
  );

  // HAMBURGER MENU 

  $('.hamburger-shell').click(toggleMenu)
	$('section').click(hideMenu)
	$('.menu-link').click(toggleMenu)

  // VISIT HOVER

  for (let i = 1; i < 7; i++) {
    $(`#link-${i}`)
    .mouseover(() => {
      $(`#visit-${i}`).css("display", "block");
    })
    .mouseout(() => {
      $(`#visit-${i}`).css("display", "none");
    });
      
  }

  // This is to prevent bots from spamming me, tihi.
  const mailto = document.getElementById("mailto");
  let a = "";
  let dot = ".";
  let at = "@";
  mailto.addEventListener("click", () => {
    let cornelia = "cornelia";
    let lundell = "lundell";
    let medieinstitutet = "medieinstitutet";
    let se = "se";
    a += cornelia;
    a += dot;
    a += lundell;
    a += at;
    a += medieinstitutet;
    a += dot;
    a += se;
    mailto.href = `mailto:${a}`;
  });
	
	$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('#about').offset().top - 50) {
      $('.top').css("background-color", "#f7f7f7")
      $('.middle').css("background-color", "#f7f7f7")
      $('.menu-name').css("color", "#f7f7f7")
    } else {
      $('.top').css("background-color", "#333")
      $('.middle').css("background-color", "#333")
      $('.menu-name').css("color", "#333")
    }
});
});
