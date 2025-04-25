'use strict';

let input = prompt('insert A/B/C')
let level;
switch (input) {
  case 'A':
    level='Standard'
    break
  case 'B':
    level='Premium'
    break
  case 'C':
    level = 'Deluxe'
    break
  default:
    level = 'Check your input'

}
document.querySelector('#target').innerHTML=level


