# Bugs
1. JSON returned when hitting the healtcheck is formatted wrong and incomplete. The endpoint http://localhost:9876/v1/health returns JSON such as {"status": "up"} instead of { status: 'healthy', database: 'connected' } per the specification. Database connection in not being reported, status key is retuned in quotes and "up" is used in place of 'healthy'
2. The route http://localhost:9876/login does not resolve. /login should resolve to the expected endpoint per the specification. 
3. The coloring, of the login and register buttons does not match the specification mock-up. The spacing and relative sizing does not match the specification either, but relative size and spacing is a less important matter.
<img src="/screenshots/login1.png" width="500px" >
4. 
