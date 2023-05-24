describe('Promises demo',()=>{

    it.skip('Promises with wrap', () => {
      
        const my_fake_request = (fake_request, ms_time = 3000) => {
            return new Promise(resolve=>{
                setTimeout(()=>{
                    console.log(`Promises finished. ${fake_request} is returned.`)
                    resolve({ 
                        name: fake_request,
                        ms: ms_time,
                        foo: 'ice-cream-api'
                    })
                }, ms_time)
            })
        }

        my_fake_request('/api/get-ice-cream', 5000).then((response)=>{
            console.log(response)

            cy.wrap(response).should('have.property','name', '/api/get-ice-cream')
            cy.wrap(response).should('have.property','ms', 5000)
            cy.wrap(response).should('have.property','foo', 'ice-cream-api')
        })
    })

})