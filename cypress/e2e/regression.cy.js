import userRegister from "../pages/userRegistration";
import payment from "../pages/payment";
import verifyAllProduct from "../pages/verifyAllProduct";
import contactUs from "../pages/contactUs";
import correctLogin from "../pages/correctLogin";
import navegator from "../pages/navegator";

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

  it("Adicionar produtos ao carrinho", () => {
    cy.visit("/");
    cy.wrap([]).as("productsPrices");

    verifyAllProduct.clickLinkProducts();
    verifyAllProduct.clickFirstProductAddToCart();
    verifyAllProduct.continueShopping();

    verifyAllProduct.clickSecondProductAddToCart();
    verifyAllProduct.continueShopping();

    verifyAllProduct.clickToCart();
    verifyAllProduct.validatePricesInCart();
  });

  it("Verificar a quantidade de produtos no carrinho", () => {
    cy.visit("/");
    verifyAllProduct.viewDetailProduct();
    verifyAllProduct.quantityOfProduct();
    verifyAllProduct.addToCart();
    verifyAllProduct.continueShopping();
    verifyAllProduct.clickToCart();
    verifyAllProduct.comparequantityInCart();
  });

  it("Fazer pedido: Registre-se antes de finalizar a compra", () => {
    cy.visit("/");
    cy.wrap([]).as("productsPrices");
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
    verifyAllProduct.clickLinkProducts();
    verifyAllProduct.clickFirstProductAddToCart();
    verifyAllProduct.continueShopping();
    verifyAllProduct.clickToCart();
    verifyAllProduct.finalizeCart();
    payment.menssageOrder();
    payment.buttonPlaceOrder();
    payment.cartPayment();
    payment.buttonPaymentConfirme();
  });

  it(" Remover produtos do carrinho", () => {
    cy.visit("/");
    cy.wrap([]).as("productsPrices");
    verifyAllProduct.clickFirstProductAddToCart();
    verifyAllProduct.continueShopping();
    verifyAllProduct.clickSecondProductAddToCart();
    verifyAllProduct.continueShopping();
    verifyAllProduct.clickToCart();
    verifyAllProduct.removeProductFromCart();
    verifyAllProduct.removeProductFromCart();
  });

  it("Visualizar produtos da marca", () => {
    cy.visit("/");
    verifyAllProduct.clickLinkProducts();
    navegator.clickFirstLinkBrand();
    navegator.clickSecondLinkBrand();
  });
});
