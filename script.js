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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});