function validar(){
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const decricaoInput = document.getElementById("descricao");
    let valida = true;



// Função para exibir erros

    function mostrarErro(inputElement, mensagem){
        const controle = inputElement.parentNode;
        const erroIMg =controle.querySelect('.error');
        const mensagemErro = controle.querySelect('small');

        mensagemErro.innerText = mensagem;
        controle.className = 'control erro';
        erroIMg.style.display = 'block';
        valida = false;
    }
    mostrarErro();
}