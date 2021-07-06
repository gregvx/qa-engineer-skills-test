import { pageTemplate } from '../util';

export const loginPage = (error?: string) =>
  pageTemplate(
    `
      <form id="login-form" method="post" action="/">
        ${error ? `<p class="error">${error}</p>` : ''}
        <label id="username" class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <input required name="emailAddress" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" class="mdc-text-field__input" aria-labelledby="password">
          <span class="mdc-floating-label" id="my-label">Email address</span>
          <span class="mdc-line-ripple"></span>
        </label>
        <label id="password" class="mdc-text-field mdc-text-field--filled">
          <span class="mdc-text-field__ripple"></span>
          <input required name="password" type="password" class="mdc-text-field__input" aria-labelledby="email-address">
          <span class="mdc-floating-label" id="my-label">Password</span>
          <span class="mdc-line-ripple"></span>
        </label>
        <div class="button-row">
          <div id="register" class="mdc-touch-target-wrapper">
            <a href="/register" class="mdc-button mdc-button--touch">
              <span class="mdc-button__ripple"></span>
              <span class="mdc-button__touch"></span>
              <span class="mdc-button__label">Register</span>
            </a>
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
          .error {
            color: red;
          }
        </style>
      `
  );
