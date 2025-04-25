let names = []
let num = parseInt(prompt('the number of participants?:'))
for(let i = 1; i <= num; i++) {
  name = prompt('The name for the participant ' + i)
  names.push(name)
}
alpha = names.sort()
console.log(alpha)