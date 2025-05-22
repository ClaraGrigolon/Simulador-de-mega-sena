document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const numberElements = document.querySelectorAll('.number');

    //Gera números aleatórios ao carregar a página
    generateRandomNumbers();

    generateBtn.addEventListener('click', generateRandomNumbers);

    function generateRandomNumbers(){
        //gera 6 números inteiros, únicos e aleatórios entre 1 e 60
        const numbers = [];
        while (numbers.length < 6){
            const randomNum = Math.floor(Math.random() * 60) + 1;
            if (!numbers.includes(randomNum)){
                numbers.push(randomNum);
            }
        }

        //Ordenar os núm (como no sorteio)
        numbers.sort((a, b) => a - b);

        //Atualizar os elementos com Animação
        numberElements.forEach((element, index) => {
            //Atualiza a classe da animação
            element.classList.remove('animate');

            //tempo para remover a classe
            setTimeout(() => {
                element.textContent = numbers[index];
                element.classList.add('animate');
            }, 50 * index);
        });

    }

});