

describe('global universities',() => {

    it.skip('get info', () => {
        cy.request('GET', 'http://universities.hipolabs.com/search?country=Japan').then((result) => {
            expect(result.status).to.eq(200)

            const schoolObject = result.body

            // Get all schools with the word college
            const matches = schoolObject.filter((sch) => sch.name.includes("College"))

            expect(matches[0].name).to.contain('Medical')
            expect(matches[14].name).to.contain('Ibaraki')
        
        })
    })

    it.skip('create user', () => {
        cy.request({
                method: "POST", 
                url: "https://reqres.in/api/users",
                body: 	{
                    "name": "Nikki Tan",
                    "job": "Head Nurse"
                }
            }).then((result) => {
            
                expect(result.status).to.eq(201)

                expect(result.body.name).to.contain('Nikki')
                expect(result.body.job).to.eq('Head Nurse')
        
        })
    })

    it.skip('register tourist', () => {
        cy.request({
                method: "POST", 
                url: "http://restapi.adequateshop.com/api/Tourist",
                body: 	{
                    "tourist_name": "Kitty Tan",
                    "tourist_email": "meowmeow295@gmail.com",
                    "tourist_location": "Sudan"
                }
            }).then((result) => {
            
                expect(result.status).to.eq(201)

                expect(result.body.tourist_name).to.contain('Kitty')
                expect(result.body.tourist_email).to.eq('meowmeow295@gmail.com')
                expect(result.body.tourist_location).to.eq('Sudan')
        })
    })

    it('register tourist - fixtures', () => {

        cy.fixture('apiTestData').then((apiValues)=> {

                const randomHash = Math.random().toString().substring(3)

                const payload = {
                    "tourist_name": `${apiValues.tourist_name}_${randomHash}`,
                    "tourist_email": `${randomHash}_${apiValues.tourist_email}`,
                    "tourist_location": apiValues.tourist_location
                } 
        
                cy.request({
                method: "POST", 
                url: apiValues.url,
                body:payload
            }).then((result) => {
                    expect(result.status).to.eq(201)

                    expect(result.body.tourist_name).to.contain('Kitty')
                    expect(result.body.tourist_email).to.contain('meowmeow295')
                    expect(result.body.tourist_location).to.eq('Sudan')
            })
        })

      
    })

})