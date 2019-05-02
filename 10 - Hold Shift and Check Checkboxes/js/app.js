let lastChecked;
const checkboxesArr = [...document.getElementsByTagName('input')];

const handleShiftListClicked = (e) => {
  console.log(e.target.type, e.shiftKey);
  if (e.target.type !== 'checkbox' || !e.shiftKey) {
    return false;
  }

  if (lastChecked === null || lastChecked === undefined) {
    lastChecked = checkboxesArr.indexOf(e.target);
  } else {
    let curIndex = checkboxesArr.indexOf(e.target);
    if (curIndex < lastChecked) {
      const tmp = curIndex;
      curIndex = lastChecked;
      lastChecked = tmp;
    }

    for (let i = lastChecked + 1; i < curIndex; i++) {
      checkboxesArr[i].checked = !checkboxesArr[i].checked;
    }

    lastChecked = null;
  }
};

const inbox = document.getElementsByClassName('inbox')[0];

inbox.addEventListener('click', handleShiftListClicked);
