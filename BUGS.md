# Bugs
1. JSON returned when hitting the healtcheck is formatted wrong and incomplete. The endpoint http://localhost:9876/v1/health returns JSON such as {"status": "up"} instead of { status: 'healthy', database: 'connected' } per the specification. Database connection in not being reported, status key is retuned in quotes and "up" is used in place of 'healthy'
2. The route http://localhost:9876/login does not resolve. /login should resolve to the expected endpoint per the specification. 
3. The coloring of the login and register buttons do not match the specification mock-up. The spacing, relative sizing, radius of login box, etc do not match the specification either. Note actual vs. spec in the following images:
<img src="/screenshots/login1.png" width="500px" >
<img src="/screenshots/login1spec.png" width="500px" >
4. When a user attempts to log in, the page is not actually verifying a username and password against a real database, but rather, the page is just checking to see if the username matches one of a hardcoded list of test usernames. The password is not actually checked.
5. When an unrecognized username (one not hardcoded in the set of known test usernames) is provided, an error is displayed but this error display has differences throughout (color, font, sizing, etc) from the original specification. Note the actual vs. scpec in the following images:
<img src="/screenshots/error1.png" width="500px" >
<img src="/screenshots/error1spec.png" width="500px" >
6. When a user attempts to log in with a blank username and password, the UI displays a popup bubble asking for the password field to be completed rather that displaying the log in error view as specified.
7. The specification mentions what should happen if the user clicks "forgot password" however, the specification does not show a "forgot passowrd" link or button. The specification itself should be clarified to show how this functionality should be implimented and the app needs the routing and forgot passowrd flow added.
8. The registration page lacks a field for password confirmation and has multiple formating and layout errors/differeces from the specification. The most glaring is perhaps the misspelling of the word "Register" The the following images showing the actual vs. spec:
<img src="/screenshots/register1.png" width="500px" >
<img src="/screenshots/register1spec.png" width="500px" >
