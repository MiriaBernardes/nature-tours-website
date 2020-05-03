const getElementBySelector = (selector) => document.querySelector(selector);

getElementBySelector('.open').addEventListener('click', () => {
  getElementBySelector('.nav-list').classList.add('active');
})

getElementBySelector('.close').addEventListener('click', () => {
  getElementBySelector('.nav-list').classList.remove('active');
})