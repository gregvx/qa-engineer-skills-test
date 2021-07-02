import { pageTemplate } from '../util/page-template.fn';

export const loginPage = () =>
  pageTemplate(
    `
      <form id="login-form">
        <label id="username" class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <input type="text" class="mdc-text-field__input" aria-labelledby="my-label">
          <span class="mdc-floating-label" id="my-label">Email address</span>
          <span class="mdc-line-ripple"></span>
        </label>
        <label id="password" class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <input type="text" class="mdc-text-field__input" aria-labelledby="my-label">
          <span class="mdc-floating-label" id="my-label">Password</span>
          <span class="mdc-line-ripple"></span>
        </label>
        <div class="button-row">
          <div id="register" class="mdc-touch-target-wrapper">
            <button class="mdc-button mdc-button--touch">
              <span class="mdc-button__ripple"></span>
              <span class="mdc-button__touch"></span>
              <span class="mdc-button__label">Register</span>
            </button>
          </div>
          <div id="login" class="mdc-touch-target-wrapper">
            <button class="mdc-button mdc-button--raised">
              <span class="mdc-button__ripple"></span>
              <span class="mdc-button__touch"></span>
              <span class="mdc-button__label">Log In</span>
            </button>
          </div>
        </div>
      </form>
      <script>
        mdc.textField.MDCTextField.attachTo(document.querySelector('#username'));
        mdc.textField.MDCTextField.attachTo(document.querySelector('#password'));
      </script>
    `,
    `
        <style>
          #login-form {
            display: flex;
            flex-direction: column;
          }
        </style>
      `
  );
