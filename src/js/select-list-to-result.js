const selectElement = document.querySelector('.js-select');
selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.list-select-result');
  result.value =  event.target.value;
});
selectElement.dispatchEvent(new Event('change'));