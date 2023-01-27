!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-backdrop-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();
      document.body.classList.add('modal-open');
      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');
      document.body.classList.remove('modal-open');
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.js-backdrop-modal').classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    },
    false
  );

  overlay.addEventListener('click', function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
}); // end ready

// 1. На кнопку відкриття модалки доати клас js-open-modal, атрибут data-modal="1" (1 це номер модалки, значення довільне)

// 2. В кінці боді створити один спільний бекдроп  з класом js-backdrop-modal, в який вкласти усі модалки

// 3. На кнопки закриття модалок повішати клас js-modal-close

// 4. На саму модалку задати клас modal,
// 	атрибут data-modal="1" (де 1 це довільне значення, але має співпадати з таким самим атрибутом на кнопці, яка відкривала цю модалку)

//5. Створити файл modal.js у папці js, підключити його до index.js та вставиити у нього код з 1-89 рядків цього файлу.
//
// При відкритті модалки на неї і на бекдроп буде додаватися клас active, тому треба відповідні стилі додати на модалку і бекдроп. Є клас active, вони видимі, немає -- невидимі
