const code = 'ding';
const cache = [];

const handleKeyPress = (e) => {
  cache.push(e.key);
  cache.splice(-code.length, cache.length - code.length);

  if (cache.join('').includes(code)) {
    cornify_add();
  }
};

window.addEventListener('keyup', handleKeyPress);
