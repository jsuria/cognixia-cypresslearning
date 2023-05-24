describe('Config demo', () => {
    it('Get env values', () => {
        const my_env = Cypress.env('someEnvironment')
        const my_api = Cypress.env('someAPI')

        expect(my_env).to.not.eq('development')

        cy.request({
            method: 'GET',
            url: my_api,
            failOnStatusCode: false
        }).then((data) => {

            const responseBody = data.body
            const responseData = responseBody.data.filter((elem)=>{
                return elem.name == 'cerulean'
            })
            
            expect(responseData[0].name).to.eq('cerulean')
            expect(responseData[0].pantone_value).to.eq('15-4020')
        })                       
    })
})