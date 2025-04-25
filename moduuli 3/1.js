'use strict';

const ULe = document.querySelector('#target')

const html =`
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>`;

ULe.innerHTML = html;

ULe.classList.add('my-list');