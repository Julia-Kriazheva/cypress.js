describe('Тестирование формы логина и пароля на Staya', function () {

    it('Проверка работы авторизации. Позитивный кейс 1', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('tester.2022@internet.ru');
        cy.get('.auth-form > form > [type="password"]').type('Testtesttest987');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})

/*для проверки (Негативный кейс 1) следует выйти из профиля:*/
describe('Тестирование формы логина и пароля на Staya', function () {

    it('Выход из профиля', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
          })
})


describe('Тестирование формы логина и пароля на Staya', function () {

    it('Проверка работы авторизации. Негативный кейс 1', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('tester.2022@internet.ru');
        cy.get('.auth-form > form > [type="password"]').type('Testtesttest');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})