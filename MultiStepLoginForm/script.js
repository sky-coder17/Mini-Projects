'use strict';

// Selecting
const allForms = document.querySelectorAll('.fieldset');
const btnNext = document.querySelector('.form-login__next');
const btnBack = document.querySelector('.form-submit__back');
const formTitle = document.querySelector('.form__title');
const formText = document.querySelector('.form__info');
const inputEmail = document.querySelector('.form-login__email');
const inputPass = document.querySelector('.form-submit__pass');
const popup = document.querySelector('.popup');

// Initialization
inputEmail.value = inputPass.value = '';
let form = 1;

// Functions
const move = function (value) {
  allForms.forEach(
    (f, i) => (f.style.transform = `translateX(${(i - value) * 100}%)`)
  );
};

const toggleClasses = function (formNumber, feild, type) {
  if (feild.value) return;

  document
    .querySelector(`[data-input="${formNumber}"]`)
    .classList[type]('input-wrapper--active');
  document
    .querySelector(`[data-num="${formNumber}"]`)
    .classList[type]('placeholder--active');
};

// Event handler
btnNext.addEventListener('click', function (e) {
  e.preventDefault();

  if (!inputEmail.value) {
    popup.style.transition = 'opacity 0.8s';
    popup.style.opacity = 1;
    return setTimeout(() => (popup.style.opacity = 0), 3000);
  }

  move(1);
  formTitle.textContent = 'Welcome';
  formText.textContent = inputEmail.value;

  form = 2;
  toggleClasses(form, inputPass, 'add');
  inputPass.focus();
});

btnBack.addEventListener('click', function (e) {
  e.preventDefault();

  move(0);
  formTitle.textContent = 'Login';
  formText.textContent = 'Please login to use the platform';

  form = 1;
});

document
  .querySelector('.form-submit__checkbox')
  .addEventListener('change', function () {
    this.style.backgroundColor = 'yellow';
    inputPass.type === 'password'
      ? (inputPass.type = 'text')
      : (inputPass.type = 'password');
  });

document.querySelector('.form').addEventListener('click', function (e) {
  const target = e.target.closest('.input-wrapper');
  const target2 = e.target.closest('.row--checkbox');

  if (target) {
    form === 1 && inputEmail.focus();
    form === 1 && toggleClasses(form, inputEmail, 'add');
    form === 2 && toggleClasses(form, inputPass, 'add');
  }

  if (!target && !target2 && !(e.target === btnNext)) {
    form === 1 && toggleClasses(form, inputEmail, 'remove');
    form === 2 && toggleClasses(form, inputPass, 'remove');
  }
});
