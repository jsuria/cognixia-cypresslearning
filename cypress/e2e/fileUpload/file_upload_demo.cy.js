
/* describe('file upload demo', () => {

  it('no plugin - using promise', () => {



  })

  it('no plugin - using promise', () => {



  })



}) */


// RAJESH
describe('File Upload Example', ()=>{

    it.skip('file upload test 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')

        //perform action on elemenet
        cy.get('#file-upload').attachFile('sample.txt')

        //perform action --- button
        cy.get('#file-submit').click()

        //validate file uploaded sucessfully
        cy.wait(3000)

        cy.get('h3').should('have.text', 'File Uploaded!')

        cy.get('#uploaded-files').then(  (ele) =>{
            let actualText = ele.text()
            cy.log(`File uploaded name: ${actualText}`)
            expect(actualText).to.contain('sample')
        })
    })

    it.skip('file upload test 2 -- pdf file from fixture', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')

        //perform action on elemenet
        //window ---- \\   or /
        //non-window ----- / 

        cy.get('#file-upload').attachFile("Playwright_Course_Overview.pdf")  // path from fixture

        //cy.get('#file-upload').attachFile("C:/Users/Act/OneDrive/Desktop/Playwright_Course_Overview.pdf")

        //perform action --- button
        cy.get('#file-submit').click()

        //validate file uploaded sucessfully
        cy.wait(3000)

        cy.get('h3').should('have.text', 'File Uploaded!')

        cy.get('#uploaded-files').then(  (ele) =>{

            let actualText = ele.text()
            cy.log(`File uploaded name: ${actualText}`)
            expect(actualText).to.contain('Course')

        }  )


    })

    it.skip('file upload test 3 ------ drag drop a file', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')

        //perform action on elemenet
        //window ---- \\   or /
        //non-window ----- / 

        //cy.get('div#drag-drop-upload').attachFile('Playwright_Course_Overview.pdf', {subjectType: 'drag-n-drop'})
        cy.get('div#drag-drop-upload').attachFile('sampleDemo.pdf', { subjectType: 'drag-n-drop' })

        //validate file uploaded sucessfully
        cy.wait(3000)

        //cy.get('h3').should('have.text', 'File Uploaded!')

    })


    it.only('file upload test 4 -- rename the file upload', ()=>{


        cy.visit('https://the-internet.herokuapp.com/upload')

        //perform action on elemenet
        //window ---- \\   or /
        //non-window ----- / 
        cy.get('#file-upload').attachFile({filePath:'Playwright_Course_Overview.pdf',  fileName: 'LearningAutomation.pdf'})  // path from fixture

        //cy.get('#file-upload').attachFile("C:/Users/Act/OneDrive/Desktop/Playwright_Course_Overview.pdf")

        //perform action --- button
        cy.get('#file-submit').click()


        //validate file uploaded sucessfully
        cy.wait(3000)


        cy.get('h3').should('have.text', 'File Uploaded!')

        cy.get('#uploaded-files').then(  (ele) =>{
            let actualText = ele.text()
            cy.log(`File uploaded name: ${actualText}`)
            expect(actualText).to.contain('LearningAutomation')
        })
    })
})
