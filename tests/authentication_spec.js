const { idText, isExportDeclaration, createYield } = require("typescript")

var environmentBaseUrl = 'http://localhost:9876'

describe('Health Checks', () => {
    it('Health Check', () => {
        cy.request(environmentBaseUrl + '/v1/health').then(
            (response) => {
                expect(response.body).to.have.property('status', 'healthy')
                expect(response.body).to.have.property('database', 'connected')
            }
        )
    })
})

describe('Route Checks', () => {
    it('root route', () => {
        cy.visit(environmentBaseUrl + '/')
        cy.contains('Log In')
    })
    it('login route', () => {
        cy.visit(environmentBaseUrl + '/login')
        cy.contains('Log In')
    })
    it('registration route', () => {
        cy.visit(environmentBaseUrl + '/register')
        cy.contains('Register')
        cy.url().should('include', "register")
    })
    it('forgot password route', () => {
        cy.visit(environmentBaseUrl + '/forgot')
        //TODO Identify characteristics of forgot flow to verify
        cy.url().should('include', "forgot")
    })
    it('logged in home route', () => {
        cy.request({url: environmentBaseUrl + '/home', failOnStatusCode: false})
        .then((response) => {
            expect(response.status).to.eq(401)
        })
        cy.contains('Log In')
        cy.url().should('not.include', "home")
    })
})

describe('Login Page Checks', () => {
    //make sure login form has fields email, and password
    //valid login info loads home page
    //no login info displays errors requesting info
    //forgot password button displays forgot password page
    //register button routes to registration page
})

describe('Registration Page Checks', () => {
    //registration page displays form for name, email address, password, password confirmation
    //bad data in registration fields displays error
    //valid registration info loads homepage
})

describe('Home Page Checks', () => {
    //home route should be unauthorized if user not logged in
    //home page of logged in user should display "welcome back" + [user name]
})






