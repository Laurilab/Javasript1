'use strict';
let ageclass;
let age =prompt('Insert your age')
if (age >= 65) {
  ageclass = 'olet eläkeläinen'
}  else if(age >= 30) {
          ageclass = 'olet työikäinen'
} else if (age >= 20) {
    ageclass = 'olet nuoriaikuinen'
} else if (age >= 7) {
  ageclass = 'olet kouluikäinen'
} else if (age >= 1) {
  ageclass = 'olet kersa'
} else {
  ageclass = 'virheellisen syöte '
}

document.querySelector('#target').innerHTML=ageclass
