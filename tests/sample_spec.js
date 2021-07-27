const { idText, isExportDeclaration, createYield } = require("typescript")

describe('Authentication Tests', function () {
    it('Health Check', function () {
        cy.request('http://localhost:9876/v1/health')
    })
})