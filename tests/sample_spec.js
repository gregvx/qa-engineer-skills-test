const { idText, isExportDeclaration, createYield } = require("typescript")

describe('Authentication Tests', function () {
    it('Health Check', function () {
        cy.request('http://localhost:9876/v1/health').then(
            (response) => {
                console.log("the returned JSON was ");
                console.log(response.body)
                //expect(response.body).to.have.property('status', 'healthy')
                //expect(response.body).to.have.property('database', 'connected')
            }
        )
    })
})


//make sure can visit http://localhost:9876/login

//make sure login form has fields email, and password

//valid login info loads home page

//no login info displays errors requesting info

//forgot password button displays forgot password page

//register button routes to registration page

//registration page displays form for name, email address, password, password confirmation

//bad data in registration fields displays error

//valid registration info loads homepage

//home route should be unauthorized if user not logged in

//home page of logged in user should display "welcome back" + [user name]