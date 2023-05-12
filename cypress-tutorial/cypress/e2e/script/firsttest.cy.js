//firsttest.js

describe("Meu Primeiro Teste", () => {
  it("Inicie o navegador e navegue", () => {
    cy.visit("https://www.browserstack.com/");

    cy.title().should(
      "eq",
      "Most Reliable App & Cross Browser Testing Platform | BrowserStack"
    );
  });
});
