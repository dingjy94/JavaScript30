# JavaScript Drum Kit

## Requirment
When click key, corresponds button on screen should place a highlight effect, and the corresponds radio should be played.

## Improvement
- `keyCode` is deprecated now, so changed to `key`.
- hover effect on button.
- User can click the button on screen to trigger the effect change and sound.

## Basic Guide
- add listener to listen to `keydown` event on `window`.
- get `key` value, use `querySelector` to find correspond button (div) and radio.
- trigger the highlight effect by add class, call `play()` to play radio, you also have to set radio start point first.
- remove the highlight effect after the animation finished. (listent to `transitionend` event).
- listen to `click` event on button, you should be carful of the different between `e.target` and `e.eventTarget`.

## Relevent Resources
- [keydown](https://developer.mozilla.org/en-US/docs/Web/Events/keydown)
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [NodeList.forEach()](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)
- [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [TransitionEvent](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent)
- [e.target VS e.currentTarget](https://stackoverflow.com/questions/5921413/difference-between-e-target-and-e-currenttarget)
