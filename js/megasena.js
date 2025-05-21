document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById ('generateBtn');
    const numberElements = document.querySelectorAll ('.number');

    //gera numeros aleatorios ao carregar a pagina
    generateRandomNumbers();

    generateBtn.addEventListener('click', generateRandomNumbers);

    function generateRandomNumbers(){
        //gera 6 numeros inteiros, unicos e aleatorios entre 1 e 60
        const numbers = [];
        while (numbers.length < 6){
            const randomNum = Math.floor (Math.random() * 60) + 1;
            if (!numbers.includes (randomNum)){
                numbers.push(randomNum);
            }
        }

        //ordenar os numeros (como no sorteio)
        numbers.sort(a, b => a - b);

        //atualizar os elementos com animação
        numberElements.forEach((element, index) => {
            //atualiza a classe da animação
            element.classList.remove('animate');

            //tempo para remover a classe
            setTimeout(() => {
                element.textContent = numbers[index];
                element.classList.add('animate');
            }, 50 * index);
        }

    }
});