const classificaoTabela = document.querySelectorAll('tbody tr');

// ------- RANGE ----------
// altura
const range_height = document.getElementById("input1");
const value_height = document.getElementById("value1");
value_height.textContent = range_height.value;
range_height.oninput = function () {
    value_height.textContent = this.value;
}
// peso
const range_weight = document.getElementById("input2");
const value_weight = document.getElementById("value2");
value_weight.textContent = range_weight.value;
range_weight.oninput = function () {
    value_weight.textContent = this.value;
}

function calculateImc() {

    var height = parseInt(range_height.value); // altura
    var weight = parseFloat(range_weight.value); // peso
    var valueTotal = (weight / (height ** 2)).toFixed(2); // cálculo

    if (height == 0 || weight == 0) {
        alert('Preencha corretamente todos os campos')
    } else {
        // Armazenando no localStorage
        localStorage.valueImc = valueTotal;
        window.location.href = './results/results.html';
    }
}

function resultsIMC() {
    // Recuperando do localStorage
    document.getElementById('imc').innerHTML = localStorage.valueImc
    mostraNaTabela(localStorage.valueImc)
}

function mostraNaTabela(imc) {

    if (imc < 18.5) {
        classificaoTabela[0].classList.add('yellow');
    } else if (imc >= 18.5 && imc < 25) {
        classificaoTabela[1].classList.add('green');
    } else if (imc >= 25 && imc < 30) {
        classificaoTabela[2].classList.add('yellow');
    }
    else if (imc >= 30 && imc < 35) {
        classificaoTabela[3].classList.add('orange');
    } else if (imc >= 35 && imc < 40) {
        classificaoTabela[4].classList.add('red');
    }
    else {
        classificaoTabela[5].classList.add('red');
    }
}