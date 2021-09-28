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

const formulaire = document.querySelector('form');
const txtCelsius = formulaire.querySelector('#celsius');
const strongFahrenheit = document.querySelector('.res_fah');
const ulHistorique = document.querySelector('.historique');

console.log(formulaire, txtCelsius, strongFahrenheit, ulHistorique);

// Envoi du formulaire
formulaire.addEventListener('submit', function envoiForm(event) {
  // Annule le comportement par défaut. ici n'envoie pas le form
  event.preventDefault();

  // Récupère la saisie du visiteur et la transforme en float
  let celcius = parseFloat(txtCelsius.value);
  // Récupère la valeur en °F
  let fahrenheit = celcius * 9 / 5 + 32;
  // Affiche le résultat dans <strong>
  strongFahrenheit.innerText =  fahrenheit + '°F';
  // Ajout un <li> avec la conversion à l'<ul> de l'historique
  ulHistorique.innerHTML += `<li>${celcius}°C => ${fahrenheit}°F</li>`;




  // Vide le champ texte
  txtCelsius.value = '';
  // Redonne le focus au champ
  txtCelsius.focus();
});

}()); // Main IIFE

