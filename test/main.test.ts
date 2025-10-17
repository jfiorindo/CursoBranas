import axios from "axios"
//teste para criar uma conta de teste
test("Deve criar uma conta", async () => {
    // Given - as infos para criação da conta
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "71428793860",
        password: "asdwdqw123"
    }
    // When - onde deverá ser feita a requisição para criação da conta
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    const outputSignup = responseSignup.data;
    // Then - o que é esperado como resposta de saída 
    expect (outputSignup.accountId).toBeDefined();
    //when - aqui um when novamente porém agora temos um teste um pouco mais confiável
    const responseGetAccount = await axios.get(`http://localhost:3000/accounts/${outputSignup.accountId}`);
    const outputGetAccount = responseGetAccount.data;

    //Then - aqui temos um then com uma resposta mais elaborada para gente ver se os dados todos estão chegando corretamente ao endpoint
    expect(outputGetAccount.name).toBe(input.name);
    expect(outputGetAccount.email).toBe(input.email);
    expect(outputGetAccount.document).toBe(input.document);
    expect(outputGetAccount.password).toBe(input.password);
})