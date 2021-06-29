# Design Specification
The following is a design specification for the authentication server.

## Health check - `http://localhost:9876/v1/health`
The health check route is necessary for monitoring uptime of the application.
- This route should return valid JSON with the application status and database connectivity in a response like so:
```
{ status: 'healthy', database: 'connected' }
```

## Login - `http://localhost:9876/login`
- The login page should contain a form with an input for an email address and password. (design below)
- When a user enters their username or password they have already registered before, they should be taken to the homepage.
- If a user enters a username or password that has never been registered before, they should be shown an error (design below)
- If a user enters a blank username or blank password they should be shown an error that they need to enter both (design below)
- If a user clicks on the forgot password button, they should be taken to the forgot password page.
- If a user clicks on the register button, they should be taken to the registration page

## Register - `http://localhost:9876/register`
- The register page should contain a form for user registration. Users should be able to enter their name, email address, optionally add a picture for an avatar, and set a password. (design below)
- A user should be able to sign up for the authentication service using the registration form.
- The following form fields are required: first name, last name, email address and password. If any of these are invalid, the user should receive an error (design below).
- A user should be optionally allowed to upload a file for their avatar.
- The email address input should only accept valid email addresses.
- If a user successfully registers an account, they should be redirected to the homepage.

## Homepage - `http://localhost:9876`
- The user should be unable to view the homepage if they are not logged in. If they are not logged in, they should be redirected to the login page.
- A logged-in user should be able to
