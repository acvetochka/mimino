import $ from 'jquery';

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        //duration
        700,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});

// https://animate.style/

//  1. В терміналі прописати команду "npm i jquery"

//  2. Створити у папці js окремий файл, наприклад, "anchor-scroll.js" і вставити в нього код, що на 1-30 рядках цього файлу

//  3. Підключити його до index.js

//  4. За бажанням можна задати анімацію. Для цього у head треба підключити лінк
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
//     і на елементи, що треба анімувати додати клас animate__animated та опціональний клас, наприклад animate__slideOutUp
// Після цього усі переходити по якорям будуть плавні і анімовані
