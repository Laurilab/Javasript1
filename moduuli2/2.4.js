let nums = []
let number = parseInt(prompt('Give number:'))
while(number !== 0) {
  nums.push(number);
  number = parseInt(prompt('Give number:'))
}

final = nums.sort((a, b)=>b-a)

console.log(final)
