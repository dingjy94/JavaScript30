const handlePanelClicked = (e) => {
  //const openingPanel = e.querySelector('.open');
  const targetClassList = e.currentTarget.classList;

  if (targetClassList.contains('open')) {
    targetClassList.remove('open');
  } else {
    targetClassList.add('open');
  }
};

document.querySelectorAll('.panel')
        .forEach((panel) => panel.addEventListener('click', handlePanelClicked));
