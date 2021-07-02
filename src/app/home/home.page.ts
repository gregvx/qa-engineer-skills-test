import { User } from '../users';
import { pageTemplate } from '../util';

export const homePage = (user: User) =>
  pageTemplate(
    `
    <form id="home-form" action="/" method="get">
      <p>Welcome back, ${user.name}</p>
      <div id="logout" class="mdc-touch-target-wrapper">
          <button class="mdc-button mdc-button--raised">
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__touch"></span>
            <span class="mdc-button__label">Log Out</span>
          </button>
        </div>
    </form>
`,
    `
  <style>
    #home-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  </style>
`
  );
