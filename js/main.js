/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict';

/*  let celcius = prompt("Entrez la température en °C :");
  celcius = parseFloat(celcius);

  let fahrenheit = celcius * 9 / 5 + 32;
  alert(`${fahrenheit} °F`);*/

// Récupération des éléments HTMl à manipuler
const formulaire = document.querySelector('form');
const txtCelcius = formulaire.querySelector('#celsius');
const strongFahrenheit = document.querySelector('.res_fah');
const ulHistorique = document.querySelector('.historique');

  console.log(formulaire, txtCelcius, strongFahrenheit, ulHistorique);

formulaire.addEventListener('submit', function envoiForm(event) {
  // Annule le comportement par défaut
  event.preventDefault();

  // Récupère la valeur saisie et la converti en Float
  let celcius = parseFloat(txtCelcius.value);

  // Si celcius n'est pas un nombre : isNaN - is Not A Number
  if (isNaN(celcius)) {
    // Affiche un message d'erreur à l'utilisateur
    alert('Entrez un nombre valide !');
  } else {
    // Calcule le résultat
    let fahrenheit = celcius * 9 / 5 + 32;
    // Affiche le résultat
    strongFahrenheit.innerText = fahrenheit;
    // Ajouter à l'historique le calcul C => F
    ulHistorique.innerHTML += `<li>${celcius}°C => ${fahrenheit}°F</li>`;
  }
  // Vide le champ de saisie
  txtCelcius.value = '';
  // Donne le focus
  txtCelcius.focus();
});

// Evénement reset du formualire
formulaire.addEventListener('reset', function resetForm() {
  strongFahrenheit.innerText = '';
  ulHistorique.innerHTML = '';
  txtCelcius.focus();
});

// Ecoute touches clavier enfoncées sur le champ de formulaire
txtCelcius.addEventListener('keyup', function escKey(event){
  // alert(event.key);
  if (event.key === 'Escape') {
    formulaire.reset();
  }
});


}()); // Main IIFE

