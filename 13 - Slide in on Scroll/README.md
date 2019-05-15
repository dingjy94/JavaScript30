# Slide in on Scroll

## Requirment
When scroll down to the image (when half of image has been displayed in window), the image slide in. After scrolled out, the image slide out.

## Some tips
- offsetTop = distance of the current element relative to the top of the offsetParent node. In this case, img to the top of body
- window.scrollY + window.innerHeight = distance from top of the whole page to the bottom of the window

## Relevent Resources
- [HTMLElement.offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)
- [scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)
- [innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)

