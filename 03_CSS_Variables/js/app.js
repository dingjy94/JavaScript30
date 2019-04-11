const handleImageModify = (e) => {
  const target = e.currentTarget;
  const id = target.id;
  const sizing = target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${id}`, `${target.value}${sizing}`);
};

document.querySelectorAll('input').forEach((ele) => {
  ele.addEventListener('change', handleImageModify);
  ele.addEventListener('mousemove', handleImageModify);
});
