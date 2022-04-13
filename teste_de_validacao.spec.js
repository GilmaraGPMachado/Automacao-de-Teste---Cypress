
const { createPublicKey } = require("crypto");


describe('teste 1', () => {
    it('Clique Me', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('[id="buttonSimple"]').click();
        cy.get('[id="buttonSimple"]').should('have.value', 'Obrigado!');
        
    });
});

describe('teste 2', () => {
    it('Clique ZzZ!', () => {        
        cy.get('[id="buttonLazy"]').click();
        cy.get('[id="buttonLazy"]').should('have.value', 'zZz ZzZ!');
        
    });
});

describe('teste 3', () => {
    it('1', () => {        
        cy.get('[id="buttonCount"]').click();
        cy.get('[id="buttonCount"]').should('have.value', '1');
        
    });
});
describe('teste 4', () => {
    it('listar', () => {        
        cy.get('[id="buttonList"]').click();
        cy.get('[id="buttonList"]').should('have.value', 'Listar');
    });
});
describe('teste 5', () => {
    it('listar DOM', () => {        
        cy.get('[id="buttonListDOM"]').click();
        cy.get('[id="buttonListDOM"]').should('have.value', 'Listar DOM');
    });
});
describe('teste 6', () => {
    it('Abrir Popup', () => {        
        cy.get('[id="buttonPopUp"]').click();
        cy.get('[id="buttonPopUp"]').should('have.value', 'Abrir Popup');
    });
});
describe('teste 7', () => {
    it('Resposta Demorada', () => {        
        cy.get('[id="buttonDelay"]').click();
        cy.get('[id="buttonDelay"]').should('have.value', 'Resposta Demorada');
    });
});
describe('teste 8', () => {
    it('Hora certa', () => {        
        cy.get('[id=buttonNow]').click();
        cy.get('[id="buttonNow"]').should('have.value', 'Hora certa');
    });
});
describe('teste 9', () => {
    it('Tempo corrido', () => {        
        cy.get('[id=buttonTimePassed]').click();
        cy.get('[id=buttonTimePassed]').should('have.value', 'Tempo corrido');
    });
});

