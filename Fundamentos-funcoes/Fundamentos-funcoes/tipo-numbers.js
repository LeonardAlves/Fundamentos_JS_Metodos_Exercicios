const notaPrimeiroBi = 8; 
const notSegundoBi = 6.3; // ponto flutuante 
const notTerceiroBi = -3;
const notQuartoBi = Number.parseInt('5'); // texto junta aos numeros

const total = (notaPrimeiroBi + notSegundoBi + notTerceiroBi + notQuartoBi) / 4;

console.log(`Media total é:`, total.toFixed(2));

const nome = 'Leo';
console.log('Meu nome é: ' + nome);

// outras maneiras de converter em numeros

// Number()
Number("1") // 1
Number(null) // 0

Number("Leo") //NaN
Number(undefined) //NaN

// Number.parseInt() e Number.parseFloat()

parseInt('4') // 4
parseInt('4.5') // 4

parseFloat('4') // 4
parseFloat('4.5') // 4.5
parseFloat('4.5abc') // 4.5

// Outra maneira é usando sinal + 

+'45' // 45
+true // 1 

console.log(typeof +'45');
console.log(typeof +true);
