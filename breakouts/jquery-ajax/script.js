console.log('hello from script!');

console.log(document);
document.title = 'Hello from script!';

// Vanilla JS
// const header = document.getElementById('header');
// header.innerHTML = 'Hello from script!';

// jQuery
const header = $('#header');
header.text('Hello from jquery!');
console.log(header);

// Vanilla JS
// const pElement = document.querySelector('.description');
// pElement.innerHTML = 'Something else from script!';

// jQuery
$('p').text('Something else from script!');

// AJAX with Vanilla JS
// fetch('https://rickandmortyapi.com/api/character')
//   .then((res) => res.json())
//   .then((data) => {
//     for (const character of data.results) {
//       const characterElement = `<li>${character.name}</li>`;
//       document.querySelector('#characters-list').innerHTML += characterElement;
//     }
//   });

// AJAX with jQuery
$.ajax({
  method: 'GET',
  url: 'https://rickandmortyapi.com/api/character',
}).done((data) => {
  //   $('#characters-list').empty();
  for (const character of data.results) {
    const characterElement = `<li>${character.name}</li>`;
    $('#characters-list').append(characterElement);
  }
});
