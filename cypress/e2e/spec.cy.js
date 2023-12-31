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

    cy.get('a[href="/az/individuals/loans/"]').first().click();
    cy.get('a[class="bl_arr_bttn"]').first().click();

    let i = 0;
    const input = ["name", "surname", "salary", "work", "credit"];
    let values = ["Maryam", "Khanmadova", "500", "teacher"];

    cy.get('.cd_i_desc').each(($element => {
      if ($element[0].children[0].innerText === "Məbləğ") {
        var mebleg_arr = $element[0].children[1].innerText.split("-");
        var min_mebleg = mebleg_arr[0].trim();
        cy.get(`input[name='${input[4]}']`).clear().type(min_mebleg - 1)
      }
    }))

    for (const name of input) {
      cy.get(`input[name='${name}']`).should('be.enabled').type(values[i]);
      i++;
      if (i == 4) break;
    }

    cy.get("[name='prefix']").select('070');
    cy.get('.mask_phone_short').type("000 00 00");

    cy.get('.credit_buy').click();
  })
})