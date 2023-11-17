/*Escreva um algoritmo para encontrar os números faltantes de um array:*/

let arrOriginal = [10,11,18]
let output = []

let arrLastItem = arrOriginal[arrOriginal.length - 1]

let arrComplete = [...Array(arrLastItem + 1).keys()]

arrComplete.forEach((val) => {
    if (!arrOriginal.includes(val) && val >= arrOriginal[0]) {
        output.push(val)
    }
})
       
  console.log(output)