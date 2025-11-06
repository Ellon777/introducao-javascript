//Declaração de variáveis 
const idade = 20; //Const não muda o valor
let nome = "João"; //Let pode mudar o valor
var pepe = "pepe"; //Evitar

//Saída de dados
console.log("O nome é: ", nome);

//Operadores
//Atribuição =
//Igualdade == ou ===
//Diferença != ou !==
//Maior que >
//Menor que <
//Maior ou igual que >=
//Menor ou igual que <=
//Exponencial **
//E lógico &&
//OU lógico ||
//Negação lógica !
//Incremento ++
//Decrimento --
//Atribuição com operação +=, -=, *=, /=, %=

//Estruturas de controle

//Condicional
if (idade == 20) {
    console.log("Verdadeiro");
}

//Condicional composta
if (idade == 23) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

//Escolha caso
let estado = "SP";

switch (estado) {
    case "SP":
        console.log("São Paulo");
    break;
    case "MG":
        console.log("Minas Gerais");
    break;
    case "CE":
        console.log("Ceará");
    break;
    default:
        console.log("Estado inválido");
    break;
}

//Para
for(let i = 0; i < 10; i++) {
    console.log("O valor de i é: ", i);
}

//Enquanto
while(i < 10) {
    console.log("O valor de i é: ", i);
    i++;
}

//Repita
let parar = "n";
do {
    console.log("Repetiu");
    parar = read.question("Deseja parar? S/n?");
    console.log(parar);
} while (parar !== "S" && parar !== "s");

//Vetores e matrizes

//Declarando vetores
let nomes = [];
nomes[0] = "João";
nomes[1] = "Maria";
nomes[2] = "José";
//Acessando cada posição do vetor
for (let i = 0; i < 3; i++) {
    console.log(nomes[i]);
}

//Declaração de matriz
const nomes = [];
console.table(nomes);

//Primeiro acessa as linhas
for (let i = 0; i < 3; i++) {
    nomes[i] = [];
    //Depois acessa as colunas
    for (let j = 0; j < 2; j++) {
        nomes[i,j] = read.question(`Linha${i}, Coluna${j}: `);
    }
}

//Funções
function somar(a,b) {
    let res = a + b;
    return res;
}

console.log( somar(2, 5)); //=7

//Procedimento
function saudacao(nome) {
    let msg = "Olá, " + nome;
    console.log(msg);
}

saudacao("João"); //Olá, João

//Fim!