

describe('test', ()=>{



    it('testcase1', function(){


        cy.fixture('config').as('data')

        //cy.visit('/')
        // cy.log(@data.appURL)
        // cy.log(@data.appURL)

        cy.visit('/').then(()=>{

            cy.log(`${this.data}`)

        })
        
        // cy.get('@data').then((x)=>{

        //     cy.log(`this is test ${x.length} ${x}`)

        // })

    })

})