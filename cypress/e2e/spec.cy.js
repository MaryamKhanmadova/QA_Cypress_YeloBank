describe('template spec', () => {
  it('passes', () => {
    cy.visit('/az/business/')
    cy.viewport("macbook-13");
    cy.get(".section_nav a").each(($element => {
      if ($element[0].innerText === "Fərdi") {
        if ($element[0].className !== "active") {
          cy.wrap($element).click();
        }
      }
    }))

    cy.get('nav > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(1) > .ci_desc > ul > :nth-child(2) > .bl_arr_bttn > span').click();
    cy.get('.cd_i_desc').each(($element => {
      if ($element[0].children[0].innerText === "Məbləğ") {
        var mebleg_arr = $element[0].children[1].innerText.split("-");
        var min_mebleg = mebleg_arr[0].trim();
        cy.get("input[name='credit']").clear().type(min_mebleg - 1)
      }
    }))

    cy.get("input[name='name']").type("Maryam");
    cy.get("input[name='surname']").type("Khanmadova");
    cy.get("input[name='salary']").type("500");
    cy.get("[name='work']").type("teacher");
    cy.get("[name='prefix']").select('070');

    // cy.log(cy.get("input[name='phone']"));
    cy.get('.mask_phone_short').type("687 87 87");

    // cy.get('.credit_buy').click();
  })
})