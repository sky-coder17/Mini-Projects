'use strict';

// Functions
const activateForm = function (active, inactive) {
  document.querySelector(`.form-${active}`).classList.add('form--active');
  document.querySelector(`.form-${inactive}`).classList.remove('form--active');

  return true;
};

const checkStatusInputs = function (name, type) {
  if (name === 'signup')
    document.querySelector(`.form-signup__name`).disabled = type;

  document.querySelector(`.form-${name}__email`).disabled = type;
  document.querySelector(`.form-${name}__pass`).disabled = type;
  document.querySelector(`.form-${name}__btn`).disabled = type;
};
checkStatusInputs('login', true);

// Event Handler
document.querySelector('.form').addEventListener('click', function (e) {
  const title = e.target;

  if (!title.classList.contains('form-title')) return;

  const { formname } = title.dataset;
  if (formname === 'login') {
    activateForm('login', 'signup');
    checkStatusInputs('login', false);
    checkStatusInputs('signup', true);
  }

  if (formname === 'signup') {
    activateForm('signup', 'login');
    checkStatusInputs('signup', false);
    checkStatusInputs('login', true);
  }
});
