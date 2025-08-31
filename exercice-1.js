// Dado [1,2,3,4,5], sumar todos los números
const numbers = [1, 2, 3, 4, 5];

function suma(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(suma(numbers))
