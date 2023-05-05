/// <reference types="cypress" />

describe('Testando a Função Soma', ()=>{

beforeEach(()=>{
    cy.visit('http://localhost/Calculadora')
})

it('Testando 10+3',()=>{
cy.get('#numero1').click()
cy.get('#numero1').type('10')
cy.get('#numero2').click()
cy.get('#numero2').type('3')
cy.get('[onclick="soma()"]').click()
cy.get('#resultadoDoCalculo').should("have.text", '13')

} )
it('Testando 10+0' ,()=>{
    cy.get('.limparResultado > button').click()
    cy.get('#numero1').click()
    cy.get('#numero1').type('10')
    cy.get('#numero2').click()
    cy.get('#numero2').type('0')
    cy.get('#soma').click()
    cy.get('#resultadoDoCalculo').should("have.text", '10')
})



} )