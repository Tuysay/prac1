describe('Cypress Test',() => {
    it ('succesful login test',() => {
      cy.fixture('login').then(data => {
          cy.log('Переxод на страницу авторизации')
          cy.visit(data.main_url)
  
          cy.log('Ввод существующего логина')
          cy.get('.form-input--text')
              .type(data.login)
              
  
          cy.log('Ввод password')
          cy.get('.form-input--password')
              .type(data.passw)
  
            cy.wait(3000)
          cy.log('Клик по кнопке "Войти')
          cy.get('.form__buttons > :nth-child(3)')
              .click()


           cy.wait(1000)
          cy.log('Клик по кнопке "Вакансии')
          cy.get('header[class="header"]').find('nav > :nth-child(1)').click()

          cy.log('Запонить инфу')
          cy.get('div[class="search-input"]').find('div[class="search-input__field"] > :nth-child(1)')
                .type(data.mistake)

          cy.log('Клик по кнопке "Поиска')
          cy.get('div[class="search-input"]').find('button[type="submit"]').click()

          cy.log('Клик по кнопке "Поиска')
          cy.get('.title-block > :nth-child(1)').click()

          cy.log('Клик по кнопке "Поиска')
          cy.get('.title-block > :nth-child(1)')
                .click()





        

        

        


            //   cy.log('Ввод несуществующего mail')
            //   cy.get('input[class="form-input--email form-input"]')
            //       .type(data.email)

            // cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
            // .type(data.password)


      })
  })
  })