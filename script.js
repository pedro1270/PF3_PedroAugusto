const calcular = document.getElementById('calcular');

function calculo () {

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const P = document.getElementById('valor').value;
    const taxa = document.getElementById('juros').value;
    const N = document.getElementById('parcelas').value;

    if (nome !== '' && idade !== '' && P !== '' && taxa !== ''  && N !== '') {

            var I = taxa/100; 
            var VF = P * ((((1 + I )** N) - 1)/I).toFixed(4);
      
            resultado.textContent = ` Ola ${nome}, investindo ${P} reais à uma taxa de juros de ${taxa} % ao mês, durante ${N} você acumulará um total de ${VF} reais  `;

    }
    else {
        resultado.textContent = 'Para realizar os calculos,preencha todos os campos com as informações necessárias.';
    }

}
calcular.addEventListener('click', calculo);