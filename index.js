const getElementBySelector = (selector) => document.querySelector(selector);

getElementBySelector('.open').addEventListener('click', () => {
  getElementBySelector('.nav-list').classList.add('active');
})

getElementBySelector('.close').addEventListener('click', () => {
  console.log('hey')
  getElementBySelector('.nav-list').classList.remove('active');
})