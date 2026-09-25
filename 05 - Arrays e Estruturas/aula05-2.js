// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

const numeros = [1, 2, 4, 5, 10, 11, 22, 23, 46, 47, 94];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i])
    }
}
