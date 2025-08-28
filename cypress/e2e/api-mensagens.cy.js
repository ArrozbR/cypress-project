describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjY2VkMDIyNi1jOGI1LTQ1NWItOTU0Mi0wZTZhYjdhOTIxOTUiLCJhZG9wdGVyTmFtZSI6IktpeiIsImlhdCI6MTc1NjM5NjAzMSwiZXhwIjoxNzU2NjU1MjMxfQ.GhNRvt9a9qVM2H1YQNMkd1u1EJvFNvyIHIIDuFv8CKE`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/cced0226-c8b5-455b-9542-0e6ab7a92195',
            headers: {authorization}
        }).then((res) =>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})