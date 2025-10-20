import { validateCpf } from "../src/validateCpf";

test.each([
    //given (São os cpfs a serem testados, estamos inserindo os valores a serem passado para a string cpf)
    "71428793860",
    "87748248800",
    "97456321558"
])("Deve testar um cpf válido %s", (cpf: string) => {
    //Act (aqui estamos executando o ato, que seria validar o cpf, que joga a variável cpf para o arquivo validaeCpf.ts e nele tem todos os parâmetros necessários para verificar)
    const isValid = validateCpf(cpf);
    //then (depois a gente busca a variável isValid, que ficará armazenado o resultado booleano, e caso seja true, o teste irá dar acerto, caso dê fail, o teste retornará pass)
    expect(isValid).toBe(true);
});


test.each([
    null,
    undefined,
    "11111111111",
    "111",
    "1111111111111111",
])("Deve testar um cpf inválido %s", (cpf: any) => { 
    // nesse teste vamos buscar testar os cpfs inválidos, que devem voltar false para o teste ser validado. Segue a mesma lógica do primeiro teste, só que para cpfs inválidos. Assim a gente aumenta o nível de aproveitamento do teste também, testando as funcionalidades de verdadeiro quanto falso
    const isValid = validateCpf(cpf);
    expect(isValid).toBe(false);
});