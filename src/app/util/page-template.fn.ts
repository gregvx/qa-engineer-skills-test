export const pageTemplate = (content: string, headAdditions?: string) => `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Swell Authentication Service</title>
    <meta name="description" content="A simple HTML5 Template for new projects.">
    <meta name="author" content="SwellCX">
    <link rel="stylesheet" href="public/css/styles.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <style>
      body {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("/public/img/photo-1614866805247-82e1851d36f9.jpeg") center center / cover;
      }

      .app-content {
        background: white;
        border-radius: 5px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
ß     }

      #logo {
        width: 50%;
        margin-bottom: 1rem;
      }
    </style>
    ${headAdditions || ''}
  </head>

  <body>
    <main class="app-content">
      <img id="logo" src="/public/img/logo.svg" alt="logo" />
      ${content}
    </main>
  </body>
  </html>
`;
