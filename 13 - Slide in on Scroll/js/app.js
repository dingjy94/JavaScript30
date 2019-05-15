function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const imgs = document.querySelectorAll('.slide-in');

const checkSlide = () => {
  imgs.forEach(img => {
    // image should slide in if half of the image has scrolled in
    const bottomHeight = window.scrollY + window.innerHeight; // height from the bottom of the window to top of the body
    const isHalfIn = bottomHeight > img.offsetTop + img.height / 2;
    const imgBottom = img.offsetTop + img.height; // the image bottom position
    const notPassed = imgBottom > window.scrollY;

    if (isHalfIn && notPassed) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', debounce(checkSlide));
