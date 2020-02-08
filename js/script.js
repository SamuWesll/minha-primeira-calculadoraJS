let telaCalc = document.getElementById('telaCalc');

//Variaveis capturando os numeros do HTML
let dig0 = document.getElementById('dig0')
let dig1 = document.getElementById('dig1')
let dig2 = document.getElementById('dig2')
let dig3 = document.getElementById('dig3')
let dig4 = document.getElementById('dig4')
let dig5 = document.getElementById('dig5')
let dig6 = document.getElementById('dig6')
let dig7 = document.getElementById('dig7')
let dig8 = document.getElementById('dig8')
let dig9 = document.getElementById('dig9')

//Variaveis capturando os caracteres e sinais do document
let ce = document.getElementById('ce')
let digMais = document.getElementById('digMais');
let digMenos = document.getElementById('digMenos');
let digMult = document.getElementById('digMult');
let digPonto = document.getElementById('digPonto');
let digDiv = document.getElementById('digDiv');
let digAspas1 = document.getElementById('digAspas1');
let digAspas2 = document.getElementById('digAspas2');
let resultado = document.getElementById('digResults')

const limparTela = () => {
    telaCalc.innerHTML = ""
}

const digitandoTecla = (event) => {
    let valor = event.target.innerText;
    telaCalc.insertAdjacentHTML('beforeend',valor)
};

const results = () => {
    telaCalc = document.getElementById('tela');
    let resul = eval(telaCalc.innerText);
    telaCalc.innerHTML = resul;
    // console.log(telaCalc.innerText)
};

//Onclick dos botões numericos
dig0.addEventListener('click', digitandoTecla)
dig1.addEventListener('click', digitandoTecla)
dig2.addEventListener('click', digitandoTecla)
dig3.addEventListener('click', digitandoTecla)
dig4.addEventListener('click', digitandoTecla)
dig5.addEventListener('click', digitandoTecla)
dig6.addEventListener('click', digitandoTecla)
dig7.addEventListener('click', digitandoTecla)
dig8.addEventListener('click', digitandoTecla)
dig9.addEventListener('click', digitandoTecla)

//Onclick dos botoes dos caracteres e sinais operarios
ce.addEventListener('click', limparTela)
digMais.addEventListener('click', digitandoTecla);
digMenos.addEventListener('click', digitandoTecla);
digMult.addEventListener('click', digitandoTecla);
digDiv.addEventListener('click', digitandoTecla);
digAspas1.addEventListener('click', digitandoTecla)
digAspas2.addEventListener('click', digitandoTecla)
resultado.addEventListener('click', results);