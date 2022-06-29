'use strict';

//Primeiro capturar os botões, para quando clicar neles, aparecer no display

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
//como seria um grande trabalho chamar elemento por elemento ->
//vai optar a usar uma propriedade que existe dentro do querySelectorAll ->
//que é a de selecionar os elementos cujo a id é igual a tecla, ->
//mas como tem varios elementos com a id de tecla, usa o * antes do igual para achar parte do nome de um atributo

//COISA IMPORTANTE = SEPARAR OS PROBLEMAS, DESTRINCHAR UM A UM E IR RESOLVENDO
// forEach varre todos os elementos de um array ou nodeList

//Agora vai se preocupar como mandar para o display
const inserirNumero =  (evento) => display.textContent = evento.target.textContent;

//aqui cria um evento para cada um dos numeros
numeros.forEach(numero =>                                 //pega um numero
    numero.addEventListener('click', inserirNumero)      //adiciona um evento dentro do numero
);                                                      // e manda para outra callback, que é, quando ele clicar, ele vai inserir um numero






















