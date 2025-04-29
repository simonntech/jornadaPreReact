//criando array vazio para os funcionários, não existem funcionários aqui ainda

const funcionarios = [];

// função para adicionar funcionário

function adicionarFuncionario (nome, cargo, salario, ativo = true) {
    const funcionario = {
        nome,
        cargo,
        salario,
        ativo
    };
    funcionarios.push(funcionario);
    console.log(`Funcionário(a) ${nome} adicionado com sucesso! `)
}

// função para listar os funcionários

function listarFuncionarios() {
    console.log(`\nFUNCIONÁRIOS \n`);
    funcionarios.forEach((funcionario, index) => console.log(`${index+1} - Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario.toFixed(2)}, Ativo: ${funcionario.ativo ? 'Sim' : 'Não'}`))
}

// função para buscar funcionário pelo nome

function buscarFuncionario(nome) {
    const encontrado = funcionarios.find(funcionario => funcionario.nome.toLowerCase() === nome.toLowerCase());
    if (encontrado) console.log (`\nEncontrado: ${encontrado.nome}, Cargo: ${encontrado.cargo}, Salário: ${encontrado.salario.toFixed(2)}, Ativo: ${encontrado.ativo ? 'Sim' : 'Não'}`);
    else console.log('\nFuncionário não encontrado.')
}

// função para listar funcionários ativos

function listarAtivos() {
    const ativos = funcionarios.filter(funcionario => funcionario.ativo);
    console.log('\nFuncionários ATIVOS');
    ativos.forEach(funcionario => console.log(`- ${funcionario.nome}`))
}

// função para calcular a média salarial

function calcularMediaSalarial() {
    if (funcionarios.length === 0) {
        console.log('\nNenhum funcionário cadastrado.');
    return;
    }
    const totalSalarios = funcionarios.reduce((acumulador, funcionario) => acumulador + funcionario.salario, 0);
    const media = totalSalarios / funcionarios.length;
    console.log(`\nMédia Salarial: R$ ${media.toFixed(2)}`);
}

//função para editar funcionário

function editarFuncionario(nome, novoCargo, novoSalario, novoAtivo) {
    const funcionario = funcionarios.find((func) => func.nome.toLowerCase() === nome.toLowerCase());
    if (funcionario) {
        funcionario.cargo = novoCargo !== undefined ? novoCargo : funcionario.cargo;
        funcionario.salario = novoSalario !== undefined ? novoSalario : funcionario.salario;
        funcionario.ativo = novoAtivo !== undefined ? novoAtivo : funcionario.ativo;
        console.log(`Funcionário ${nome} atualizado com sucesso!`);
    } else {
        console.log('Funcionário não encontrado.');
    }
}

//função para excluir funcionário

function excluirFuncionario(nome) {
    const index = funcionarios.findIndex((func) => func.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
        const funcionarioRemovido = funcionarios.splice(index, 1); //remove 1 elemento na posição encontrada
        console.log(`Funcionário ${funcionarioRemovido[0].nome} excluído com sucesso!`);
    } else {
        console.log(`Funcionário não encontrado.`);
    }
}


//adicionando funcionários

adicionarFuncionario('Jorge', 'Designer', 5000);
adicionarFuncionario('Bruno', 'Desenvolvedor React', 10000);
adicionarFuncionario('Mariana', 'Tatuadora', 11000);
adicionarFuncionario('Sara', 'Contadora', 4500, false);

//listando todos funcionários

listarFuncionarios();

//buscar funcionários pelo parâmetro

buscarFuncionario('Bruno')

console.log('------------------------------')

//editando funcionário

editarFuncionario('Bruno', undefined, 20000)

//excluindo funcionário

excluirFuncionario('Sara')

//listar funcionários de novo

listarFuncionarios()

//listar funcionários ativos

listarAtivos();

// calcular a Média Salarial

calcularMediaSalarial();