describe('Cypress Test',() => {
    it ('succesful login test',() => {
      cy.fixture('login').then(data => {
          cy.log('Переxод на страницу авторизации')
          cy.visit(data.main_url)
  
          cy.log('Ввод существующего логина')
          cy.get('.form-input--text')
              .type(data.Studentlogin)
              
  
          cy.log('Ввод password')
          cy.get('.form-input--password')
              .type(data.password)
  
            cy.wait(3000)
          cy.log('Клик по кнопке "Войти')
          cy.get('.form__buttons > :nth-child(3)').click()

          cy.wait(1000)
          cy.log('Клик по кнопке "Вакансии')
          cy.get('header[class="header"]').find('nav > :nth-child(1)').click()


          cy.wait(1000)
          cy.log('Клик по логотипу')
          cy.get('.header__logo').click()

          cy.log('Клик по логотипу')
          cy.get('.banner-form__form').click()

          cy.log('Клик по полю поиска')
          cy.get('.banner-form__input-wrapper > :nth-child(1)').type(data.empty)

          cy.wait(1000)
          cy.log('Клик по логотипу')
          cy.get('.banner-form__input-wrapper > :nth-child(1)').type('{enter}')
          cy.pause('.banner-form__input-wrapper > :nth-child(1)')






    
      })
  })
  })