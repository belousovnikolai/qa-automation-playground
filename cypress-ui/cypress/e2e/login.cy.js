describe('Login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  })

  it('User can log in with valid credentials', function () {
    cy.login(this.users.validUser);
    cy.contains('Logged in as').should('be.visible');
  })

    it('User cannot log in with invalid password', function () {
    cy.login(this.users.invalidPasswordUser);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })
})