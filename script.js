function parallax() {
  var scroll_top = document.documentElement.scrollTop;
  var body_top = document.getElementsByClassName("body-content")[0].offsetTop;
  var header_height = document.getElementsByClassName("header-section")[0].scrollHeight;

  document.getElementById("content").style.marginTop = `${header_height}px`;
  var sisa = header_height-scroll_top;

  document.getElementsByClassName("header")[0].style.height = `${sisa}px`;
}

parallax();
window.scroll(function() {
  parallax();
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showTimeline() {
  var items = document.querySelectorAll(".timeline li");
  console.log(items.length);

  function callbackFunc() {
    for(var i = 0; i < items.length; i++) {
      if(isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}

showTimeline();
// window.scroll(function() {
//   showTimeline();
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


