const myname = document.querySelector('h1')
const me = myname.textContent

const list = document.querySelectorAll('ol li')

//Lenght of String
list[0].textContent = `The lenght of Marvin :  ${me.length}`
console.log(`The lenght of the name Marvin  is:` + me.length)

//Converting touppercase
list[1].textContent = `String converted to upper case is: ${me.toUpperCase()}`
console.log(`String converted to upper case is: ` + me.toLocaleUpperCase())

//Converting tolowercase
list[2].textContent = `String converted to lower case is: ${me.toLowerCase()}`
console.log(`The string converted to lower case is: ` +me.toLowerCase())

//Printing the third character is charAt method
list[3].textContent = `The third character in Marvin  is: ${me.charAt(2)}`
console.log(`The third character in the name Marvin  is:` + me.charAt(2))

//Extracting a substring from Marvin 
list[4].textContent = `Extracted substring is: ${me.substring(3)}`
console.log(`The extracted string from Marvin  is:` + me.substring(3))

//Replacing a substring
list[5].textContent = `The result of replacing 'in' with 'el' will be: ${me.replace('in', 'el')}`
console.log(`Replacing 'in' with 'el' in the name Marvin will be: `+ me.replace('in', 'el'))

/*Findind the position of a
character using the indexOf
method
*/
/*There is a space at 
the end of the string
 Marvin which is used as the index
 */
list[6].textContent = `The index of  is:` + me.indexOf(' ')
console.log(`The index of  is:` + me.indexOf(' '))

//Concatening the original string with a new string


