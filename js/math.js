console.group('Cuadrado') 
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado *4; 
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    ladoCuadrado, 
    perimetroCuadrado, 
    areaCuadrado
})

function calcularCuadrado(lado) {
    return {
      perimetro: lado * 4,
      area: lado * lado,
    };
  }
  console.groupEnd('Cuadrado') 
  console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulobase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +ladoTriangulobase;
const areaTriangulo = (ladoTriangulobase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
return{
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
};
}


function calcularAlturaTriangulo(lado1,base){
  if(lado1 == base){
    console.warn('Este no es un triangulo isoceles')
  } else{
    // h = raizcuadrada(lado1**2 - (b**2)/4)
    return altura = Math.sqrt( (lado1 ** 2) - ( (base **2)) / 4);
  }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTriangulobase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})
console.groupEnd('Triangulo') 
// Formula para calcular la altura de un triangulo escaleno
console.group('TrianguloEscaleno');
function CalcularTrianguloEscaleno(a, b, c){
  const Semiperimetro = (a + b + c) / 2;

if(a == b && a == c){
  console.warn('Este no es un triangulo escaleno.')
} else{
  H = ((2 /a) * (Math.sqrt(Semiperimetro * (Semiperimetro - a) *(Semiperimetro -b)* (Semiperimetro - c))));
  console.log('La altura "H" = ' + H);
}
}
console.groupEnd('TrianguloEscaleno');



// Aqui empieza las formulas para calcular las formulas de un circulo
console.group('circle') 

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
})

function calculacirculo(radioCirculo){
  const diametro = radioCirculo * 2;
  const radioAlcuadrado = Math.pow(radioCirculo, 2);   
  
  
  return{
    circunferencia: (radioCirculo * 2) * Math.PI,
    area: radioAlcuadrado * Math.PI.toFixed(18),
  }
}


console.groupEnd('circle') 