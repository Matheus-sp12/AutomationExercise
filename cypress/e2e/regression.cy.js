import userRegister from "../pages/userRegistration";

import verifyAllProduct from "../pages/verifyAllProduct";
import contactUs from "../pages/contactUs";
import correctLogin from "../pages/correctLogin";

describe("Regressão Automation Exercise", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  it("Cadastrar usuário", () => {
    cy.visit("/");
    userRegister.validateHome();
    userRegister.clickSignUpLogin();
    userRegister.clickUserRegisterName();
    userRegister.clickUserRegisterEmail();
    userRegister.clickUserRegisterPassword();
    userRegister.clickUserRegisterDateOfBirth();
    userRegister.clickUserRegisterFirstName();
    userRegister.clickUserRegisterCompany();
    userRegister.clickUserRegisterAddress();
    userRegister.clickUserRegisterSubmit();
    userRegister.ValidateSucessfulAccountCreation();
    userRegister.clickContinueButton();
    userRegister.deleteAccount();
  });

  it("Login do usuário com e-mail e senha corretos", () => {
    cy.visit("/");
    userRegister.validateHome();
    userRegister.clickSignUpLogin();
    correctLogin.clickLoginEmail(loginData.loginCorrect.email);
    correctLogin.clickLoginPassword(loginData.loginCorrect.password);
    correctLogin.clickButtonLogin();
    correctLogin.verifyLoggedInUser();
  });

  it("Login do usuário com e-mail e senha incorretos", () => {
    cy.visit("/");
    userRegister.validateHome();
    userRegister.clickSignUpLogin();
    correctLogin.clickLoginEmail(loginData.loginIncorrect.email);
    correctLogin.clickLoginPassword(loginData.loginIncorrect.password);
    correctLogin.clickButtonLogin();
    correctLogin.verifymessageIncorrectLogin();
  });

  it("Fazer logout do usuário", () => {
    cy.visit("/");
    userRegister.validateHome();
    userRegister.clickSignUpLogin();
    correctLogin.clickLoginEmail(loginData.loginCorrect.email);
    correctLogin.clickLoginPassword(loginData.loginCorrect.password);
    correctLogin.clickButtonLogin();
    correctLogin.verifyLoggedInUser();
    correctLogin.clickLogout();
    correctLogin.verifyLoggedOutUser();
  });

  it("Cadastrar usuário com e-mail existente", () => {
    cy.visit("/");
    userRegister.validateHome();
    userRegister.clickSignUpLogin();
    userRegister.clickUserRegisterName();
    userRegister.clickEmailNewUser(loginData.loginCorrect.email);
    correctLogin.verifyMessageEmailExists();
  });

  it("Formulário de contato", () => {
    cy.visit("/");
    contactUs.clickContactUs();
    contactUs.clickNameofcontact();
    contactUs.clickEmailofcontact();
    contactUs.clicktitleOfcontact();
    contactUs.clickmessageOfcontact();
    contactUs.clickfileUploadOfcontact();
    contactUs.clicksubmitOfcontact();
    contactUs.verifyMessageSuccessContact();
  });

  it("Verificar todos os produtos e a página de detalhes do produto", () => {
    cy.visit("/");
    verifyAllProduct.clickLinkProducts();
    verifyAllProduct.viewDetailProduct();
  });

  it("Pesquisar produto", () => {
    cy.visit("/");
    verifyAllProduct.clickLinkProducts();
    verifyAllProduct.searchProductWinerTop();
  });

  it("Verificar assinatura na página inicial", () => {
    cy.visit("/");
    verifyAllProduct.subsribeToNewsletter(loginData.loginCorrect.email);
  });

    it("Verificar assinatura na página do carrinho", () => {
    cy.visit("/");
    verifyAllProduct.clickToCart();
    verifyAllProduct.subsribeToNewsletter(loginData.loginCorrect.email);
  });

});


