$(document).ready(function () {
  var navHeight = $('#navbar').outerHeight(true);
  $('#image-slider-home').css('padding-top', navHeight);
});

$(document).ready(function() {
  $('#image-slider-home').carousel({
    interval: 5 * 1000,
    pause: false
  });
});

$(document).ready(function() {
  $('#image-slider-about').carousel({
    interval: 2 * 1000,
    pause: false
  });
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1 * 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = entry.target;
        var maxCount = Number(target.textContent.substring(0, target.textContent.length - 1));
        var suffix = target.textContent.substring(target.textContent.length - 1);
        var currentCount = 0;
        var incrementTime = 3 * 1000 / maxCount;

        function updateCount() {
          target.textContent = currentCount + suffix;
          if (currentCount < maxCount) {
            currentCount++;
            setTimeout(updateCount, incrementTime);
          }
        }

        updateCount();
        observer.unobserve(target);
      }
    });
  });

  document.querySelectorAll('.stats-number').forEach(function (element) {
    observer.observe(element);
  });
});