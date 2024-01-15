const arith = document.getElementsByTagName('li')


let num1 = 7
let num2 = 3
let num3 = 13

//Adding num1 and num2
let e = num1 + num2
arith[0].textContent = `num1 + num2 = ` + e

console.log(`num1 + num2 = ` + e)


//Subtracting num2 from num3
let eq  = num2 - num3
arith[1].textContent = `num2 - num1 = ` + eq

console.log(`num2 - num1 = `+ eq)


//Multiplying num1 by num3
let equ = num1 * num3
arith[2].textContent = `num1 * num3 = ` + equ
console.log(`num1 * num3 = `+equ)

//Finding remainder with modulus operator
let equa = num1 % num2
arith[4].textContent = `num1 % num2 = `+equa
console.log(`num1 % num2 = `+equa)


//Dividing num3 by num2
let equal = num3 / num2
arith[3].textContent = `13 / 3 = `+equal