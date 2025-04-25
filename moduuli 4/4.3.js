'use strict';


document.getElementById('searchform').addEventListener('submit',async function(evt){


evt.preventDefault();

const data = document.getElementById('query').value;
const resultsdiv = document.getElementById('results');

resultsdiv.innerHTML = '<p>Running...</p>';

try {
  const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(data)}`);
  if (!response.ok) throw new Error('Invalid input');
  const json = await response.json();

  if (json.length === 0)  {
    resultsdiv.innerHTML = '<p> Ei haku tuloksia </p>'
    return;
  }

resultsdiv.innerHTML = json.map(item => {
    const show = item.show;
    return `  
      <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">  
        <h2>${show.name}</h2>  
        ${show.image ? `<img src="${show.image.medium}" alt="${show.name}">` : '<p>Ei kuvaa</p>'}  
        <p>${show.summary || 'Ei kuvausta saatavilla.'}</p>  
      </div>  
    `;
  }).join('');
 } catch (e) {
    console.log('error', e);
    resultsdiv.innerHTML = `<p style="color: red;">Virhe haettaessa: ${e.message}</p>`;
 }

});





