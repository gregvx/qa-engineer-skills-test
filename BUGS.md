# Bugs
1. JSON returned when hitting the healthcheck is formatted wrong and incomplete. The endpoint http://localhost:9876/v1/health returns JSON such as {"status": "up"} instead of { status: 'healthy', database: 'connected' } per the specification. Database connection is not being reported, status key is returned in quotes and "up" is used in place of 'healthy'. Using keys without quotes as the specification suggests may be unadvisable. Further clarification regarding the formatting of returned JSON in the specification should be obtained.  

2. The route http://localhost:9876/login does not resolve. /login should resolve to the expected endpoint per the specification.  

3. The register page has a Register button and a Login button in the specification which does not conform to standard authentication flow patterns. The specification should be verified on this matter. The app currently has a register button and a cancel button, which behaves as expected.  

4. The coloring of the login and register buttons do not match the specification mock-up. The spacing, relative sizing, radius of login box, etc do not match the specification either. Note actual vs. spec in the following images:  
<img src="/screenshots/login1.png" width="500px" >
<img src="/screenshots/login1spec.png" width="500px" >

5. When a user attempts to log in, the page is not actually verifying a username and password against a real database, but rather, the page is just checking to see if the username matches a hardcoded test username. The password is not actually checked.  

6. When an unrecognized username (one not hardcoded as a test username) is provided, an error is displayed but this error display has differences throughout (color, font, sizing, etc) from the original specification. Note the actual vs. spec in the following images:
<img src="/screenshots/error1.png" width="500px" >
<img src="/screenshots/error1spec.png" width="500px" >

7. When a user attempts to log in with a blank username and password, the UI displays a popup bubble asking for the email address (username) field to be completed rather than displaying the log-in error as specified.  

8. The specification mentions what should happen if the user clicks "forgot password" however, the specification does not show a "forgot passowrd" link or button. The specification itself should be clarified to show how this functionality should be implimented and the app needs the routing and forgot password flow added.  

9. The registration page lacks a field for password confirmation and has multiple formating and layout errors/differeces from the specification. The most glaring is perhaps the misspelling of the word "Register". The following images show the actual vs. spec:
<img src="/screenshots/register1.png" width="500px" >
<img src="/screenshots/register1spec.png" width="500px" >

10. The registration form does not actually work or save any data to a database. Implementation is not complete.  

11. The registration form validates the data on the email address field but just leaves the field label red if in error, instead of displaying a message as shown in the specification.  

12. Any user can view the home page without actually logging in by just entering the /home route in their address bar.
