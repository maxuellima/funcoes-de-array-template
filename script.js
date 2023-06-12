// // const arrayNumerico = [1, 3, 6, 10]

// // function multiplicaPor3(arrayDeNumeros){
// //   let novoArray = []

// //   for(let i = 0; i<arrayDeNumeros.length; i++){
// //     novoArray.push(arrayDeNumeros[i] * 3)
// //   }
// //   return novoArray;
// // }

// // console.log(multiplicaPor3(arrayNumerico))

// // const retornaPares = (arrayDeNumeros)=>{
// //   let novoArray = []
// //   for(let i = 0; i < arrayDeNumeros.length; i++){
// //     if(arrayDeNumeros[i]%2 === 0){
// //       novoArray.push(arrayDeNumeros[i])
// //     }
// //   }
// //   return novoArray
// // }

// // console.log(retornaPares(arrayNumerico))

// // //Callback acontecendo aqui
// // function fazerOperacoes(array, callback){
// //   const novoArray = callback(array)
// //   return novoArray
// // }

// // console.log("Callback multiplica por 3", fazerOperacoes(arrayNumerico, multiplicaPor3));
// // console.log("Callback de números pares", fazerOperacoes(arrayNumerico, retornaPares))

// // map()
// // const comoFazerOMap = array.map((elemento, indice, array) =>{
// // //modificar cada item do array e retornar algum valor
// // return //algum valor
// // })



// // const multiplicar = (numero)=>{
// //   return numero*3
// // }

// // const triplicarValor = arrayNumerico.map(multiplicar)

// // const mapearEMultiplicar = arrayNumerico.map(multiplicar)

// //modo diferente de fazer
// // const triplicarValor = arrayNumerico.map((numero, indice, array)=>{
// //   return numero * 3
// // })
// console.log("map", triplicarValor)


// //a função callback do map receb três parâmetros: elemento, índice, array
//   //elemento: item que vai mudar a cada iteração do map() - OBRIGATÓRIO
//   //índice: é o index do elemento em cada iteração do array - opcional
//   //array: representa o próprio array original - opcional

// //------------------------------------->

//   //filter()
//     //elemento: item que vai ser filtrado a cada iteração do map() - OBRIGATÓRIO
//   //índice: é o index do elemento em cada iteração do array - opcional
//   //array: representa o próprio array original - opcional
//   //Função não-nomeada
//   // const comoFazerOFilter = array.filter((elemento, indice, array)=>{
//   //   //código que vai filtrar o elemento do array
//   //   return //booleano - se for true o elemento entra no novo array
//   // })

//   const arrayNumerico = [1, 3, 5, 6, 10]
  
//   //callback separada

//   const retornarPares=(numero)=>{
//     return numero % 2 === 0 
//   }

//   const filtrarPares = arrayNumerico.filter(retornarPares)

//   console.log(filtrarPares)

//   // //callback direto no filter - não-nomeada

//   const pegarPares = arrayNumerico.filter((numero)=>{
//     return numero%2===0
//   })
//   console.log("filter2", pegarPares)









// //---------------------------------------------
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
] 


// const aumentaVida = (poke)=>{
//   const novaVida = {...poke,
//   vida: 100
//   }
//   return novaVida;
// }

const pokeVidaCheia = pokemons.map((poke)=>{
  const novaVida = {...poke,
  vida: 100}
  return novaVida
})

// const pokemonVidaCheia = pokemons.map(aumentaVida)

const pokemonsDeFogo = pokeVidaCheia.filter((poke)=>{
  return poke.tipo ==="fogo"
})

console.log(pokeVidaCheia)
console.log(pokemonsDeFogo)