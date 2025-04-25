'use strict';
const ul1 = document.querySelector('#target')

const li1 = document.createElement('li')
li1.innerHTML= `First item`
ul1.appendChild(li1)

const li2 = document.createElement('li')
li2.innerHTML= `Second item`
ul1.appendChild(li2)

const li3 = document.createElement('li')
li3.innerHTML=`Third item`
ul1.appendChild(li3)

li2.classList.add('my-item')







