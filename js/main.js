// m-sound: Scroll-Animationen und Showreel-Tonschalter
document.addEventListener('DOMContentLoaded', function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-Reveal
  var els = document.querySelectorAll('.card, .ref-tile, .price-card, blockquote, .gallery img, .thumb-strip figure, .artist-card, .video-frame, .faq details');
  if (!reduce && 'IntersectionObserver' in window && els.length) {
    els.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 6) * 70 + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  // Showreel: Ton an/aus
  var video = document.getElementById('hero-video');
  var toggle = document.getElementById('sound-toggle');
  if (video && toggle) {
    toggle.addEventListener('click', function () {
      video.muted = !video.muted;
      toggle.textContent = video.muted ? 'Ton an' : 'Ton aus';
    });
  }
});
