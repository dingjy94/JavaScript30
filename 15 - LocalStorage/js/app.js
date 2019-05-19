const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
  e.preventDefault();

  const itemName = e.currentTarget.querySelector('[name="item"]').value;

  const item = {
    name: itemName,
    done: false
  };

  items.push(item);
  appendItem(item);
  localStorage.setItem('items', JSON.stringify(items));
  e.currentTarget.reset();
};

const appendItem = (item) => {
  const html = getItemNode(item);
  itemsList.appendChild(html);
};

const getItemNode = (item, index = items.length - 1) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type='checkbox' data-index=${index} id='item${index}' ${item.done ? 'checked' : ''}>
    <label for='item${index}'>${item.name}</label>
  `;

  return li;
};

const loadItems = () => {
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => fragment.appendChild(getItemNode(item, index)));
  clearItems();
  itemsList.appendChild(fragment);
};

const clearItems = () => {
  while(itemsList.lastChild) {
    itemsList.removeChild(itemsList.lastChild);
  }
};

const handleItemChecked = (e) => {
  if (!e.target.matches('input')) return;

  const item = e.target;
  const index = item.dataset.index;
  items[index].done = e.target.checked;
  localStorage.setItem('items', JSON.stringify(items));
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', handleItemChecked);
loadItems();
