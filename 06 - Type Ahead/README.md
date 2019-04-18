# Type Ahead

## Requirment
User input a state or city name. You should show each matched city name, state name and population of the city. The search should autocomplete, which means user don't have to input full name.

## Improvement
- split js file from html.
- change the autocomplete function, so that only show cities or states start with the input string
- when the search box is empty, reset the suggestions result

## Basic Guide
- use `fetch` to fetch data, and `json()` to parse
- use `input` event to get user input
- use regular expression to find matched cities and states
- use `innerHTML` to show the matched suggestions

## Relevent Resources
- [String.prototype.match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [Input Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

