import IMask from 'imask';

function inputMask() {
  const maskInputs = document.querySelectorAll('.js-inputmask');
  const maskInputs01 = document.querySelectorAll('.js-inputmask-01');

  if (maskInputs.length > 0) {
    maskInputs.forEach(input => {
      var maskOptions = {
        mask: '+{38}(000)000-00-00',
        lazy: false,
      };
      var mask = IMask(input, maskOptions);
    });
  }
  ////
  if (maskInputs01.length > 0) {
    maskInputs01.forEach(input => {
      var maskOptions = {
        mask: '+{80}(000)000-00-00',
        lazy: false,
      };
      var mask = IMask(input, maskOptions);
    });
  }
}
inputMask();
