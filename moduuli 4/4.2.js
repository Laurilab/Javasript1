
'use strict';


document.getElementById('searchform').addEventListener('submit',async function(evt){


evt.preventDefault();

const data = document.getElementById('query').value;
const resultsdiv = document.getElementById('results');


try {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(data)}`);
  if (!response.ok) throw new Error('Invalid input');
  const json = await response.json();
  console.log('result', json);
 } catch (e) {
    console.log('error', e);
 }

});