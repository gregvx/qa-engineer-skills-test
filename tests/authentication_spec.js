const { idText, isExportDeclaration, createYield } = require("typescript")
import { userGenerator } from '../src/app/users/user.generator';

var environmentBaseUrl = 'http://localhost:9876'
const testUser = [userGenerator(0, 'admin@swellcx.com', 'test123', 'Swell Team')];
//TODO: move the creation of this new user to a set up method that ensures this user is "new"
// by deleting any duplicate record from the database. Watch out for records with the same
// id and records with the same email since rules regarding db record creation are not known.
const newTestUser = [userGenerator(1, 'admin2@swellcx.com', 'test123', 'New Swell')];

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
    it('contains fields and loads home', () => {
        cy.visit(environmentBaseUrl + '/')
        cy.get('#username').type(testUser[0].emailAddress)
        cy.get('#password').type(testUser[0].password)
        cy.get('#login').click()
        cy.url().should('include', "home")
    })
    it('displays errors when no data entered', () => {
        cy.visit(environmentBaseUrl + '/')
        cy.contains('Please enter a valid email address')
        cy.contains('Please enter a valid password')
    })
    it('routes to forgot password when forgot password clicked', () => {
        cy.visit(environmentBaseUrl + '/')
        cy.contains('forgot password').click()
        cy.url().should('include', "forgot")
    })
    it('routes to registration when register clicked', () => {
        cy.visit(environmentBaseUrl + '/')
        cy.contains('register').click()
        cy.url().should('include', "register")
    })
})

describe('Registration Page Checks', () => {
    var malformedEmailAddress = "test@domain"
    var malformedPassword = "123"
    var validPassword = "Pas$w0rd"
    it('contains fields and loads home', () => {
        cy.visit(environmentBaseUrl + '/register')
        cy.get('#username').type(newTestUser[0].emailAddress)
        cy.get('#password').type(newTestUser[0].password)
        cy.get('#passwordConfirmation').type(newTestUser[0].password)
        cy.get('#register').click()
        cy.url().should('include', "home")
    })
    it('bad email causes error', () => {
        cy.visit(environmentBaseUrl + '/register')
        cy.get('#username').type(malformedEmailAddress)
        cy.contains('Please enter a valid email address')
    })
    it('bad password causes error', () => {
        cy.visit(environmentBaseUrl + '/register')
        cy.get('#password').type(malformedPassword)
        cy.contains('Please enter a valid password')
    })
    it('different password causes error', () => {
        cy.visit(environmentBaseUrl + '/register')
        cy.get('#password').type(validPassword)
        cy.get('#passwordConfirmation').type(validPassword + "!")
        cy.contains('Please ensure passwords are the same')
    })
})

describe('Home Page Checks', () => {
    it('contains fields and loads home', () => {
        cy.visit(environmentBaseUrl + '/')
        cy.get('#username').type(testUser[0].emailAddress)
        cy.get('#password').type(testUser[0].password)
        cy.get('#login').click()
        cy.url().should('include', "home")
        cy.contains("Welcome back")
        cy.contains(testUser[0].name)
    })
})






