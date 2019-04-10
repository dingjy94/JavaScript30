# JS and CSS Clock

## Requirment
Implement a clock.

## Improvement
- different hands has different style.
- split css and js file from html.

## Basic Guide
- use `Date` to get every minute's time
- use `setInterval()` to set callback to update the clock
- use `transform: rotate(xxdeg)` to rotate the hands, also you need to set `transform-origin`
- second also influnce minute hand and hour hand, minute also influnce hour hand

## Relevent Resources
- [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
- [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
