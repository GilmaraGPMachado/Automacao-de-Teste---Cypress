    

const { createPublicKey } = require("crypto");

describe('cadastro', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('[id="formNome"]').type('Amália');
        cy.get('[id="formNome"]').should('have.value', 'Amália');
        
        cy.get('[id="formSobrenome"]').type('Campos');
        cy.get('[id="formSobrenome"]').should('have.value', 'Campos');
       
        cy.get('[id="formSexoFem"]').click();
        cy.get('[id="formSexoFem"]').should('have.value', 'F');

        cy.get('[id="formComidaFrango"]').click();
        cy.get('[id="formComidaFrango"]').should('have.value', 'frango');

        cy.get('[id="formComidaPizza"]').click();
        cy.get('[id="formComidaPizza"]').should('have.value', 'pizza');

        cy.get('[id="formEscolaridade"]').select('mestrado');
        cy.get('[id="formEscolaridade"]').should('have.value', 'mestrado');

        cy.get('[id="formEsportes"]').select('Corrida');
        //cy.get('[id="formEsportes"]').should('have.value','Corrida'); assert com erro
          

        cy.get('[id="elementosForm:sugestoes"]').type('Beba água e pratique esportes');
        cy.get('[id="elementosForm:sugestoes"]').should('have.value', 'Beba água e pratique esportes');

        cy.get('[id="formCadastrar"]').click();
        cy.get('[id="resultado"]').should('have.value', '');

       
            
            
    });
            
});
        

    
    


