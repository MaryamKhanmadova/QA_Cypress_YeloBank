describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://turbo.az/')
        cy.viewport("macbook-13");
        // cy.url().should("eq", "https://turbo.az/")
        // cy.get('.tz-dropdown__selected').first().click();
        // cy.get(':nth-child(2) > :nth-child(1) > .tz-dropdown > .tz-dropdown__content > .tz-dropdown__list').select('Audi');
        // cy.get('.tz-container > :nth-child(2) > :nth-child(1) > .tz-dropdown > .tz-dropdown__content > .tz-dropdown__list').select("Audi");

        cy.get('.tz-dropdown__selected').first().click()
        cy.get('.tz-dropdown__option-label').each(($ele) => {
            if ($ele.text() == "BMW") {
                cy.wrap($ele).click();
                cy.get('[data-id="q_model"]').click();
                cy.get('.tz-dropdown__option-label').each(($ele) => {
                    if ($ele.text() == "2-series") {
                        cy.wrap($ele).click();
                    }
                })
            }
        })
        cy.get('label[for="q_price_from"]').type("5000")
        cy.get('label[for="q_price_to"]').type("50000")

        cy.get('button[name="commit"]').click()

        cy.get('.products-i').should('have.length', 3)
        cy.pause()
    })
})