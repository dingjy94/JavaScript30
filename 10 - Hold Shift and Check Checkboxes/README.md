# Hold Shift and Check Checkboxes

## Requirment
Notice: The original requirment seems unnatural for me, so I changed some.

Hold shift and check two checkboxes, the checkboxes between these two will be checked (if was unchecked)/unchecked(if was checked).

## Improvement
- split js file from html.
- Even delegation.

## Some Tips
- You can use ES6 spread (`...`) to convert `HTMLCollections` to normal array, so that you can use `indexOf`
- Add listener to parent to avoid add too many event listener.

## Relevent Resources
- [Event delegation](https://javascript.info/event-delegation)
- [css +](https://stackoverflow.com/questions/1139763/what-does-the-plus-sign-css-selector-mean)

