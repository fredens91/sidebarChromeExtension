// content.js

// Crea un div per la sidebar
const sidebar = document.createElement('div');
sidebar.style.position = 'fixed';
sidebar.style.top = '0';
sidebar.style.left = '0';
sidebar.style.width = '50px';  // Larghezza della sidebar
sidebar.style.height = '100vh'; // Altezza 100% della finestra
sidebar.style.backgroundColor = '#2c3e50';
sidebar.style.color = 'white';
sidebar.style.padding = '10px';
sidebar.style.overflowY = 'auto';
sidebar.style.zIndex = '10000'; // Assicurati che sia sopra il contenuto della pagina
sidebar.style.boxShadow = '2px 0px 5px rgba(0, 0, 0, 0.5)';

// Aggiungi un titolo alla sidebar
const title = document.createElement('h3');
title.innerText = 'Preferiti';
title.style.fontSize = '14px'; // Ridurre la dimensione del titolo per risparmiare spazio
title.style.marginBottom = '10px';
sidebar.appendChild(title);

// Aggiungi la sidebar al body della pagina
document.body.appendChild(sidebar);

// Sposta il contenuto della pagina per fare spazio alla sidebar
document.body.style.marginLeft = '50px'; // La pagina si sposterà a destra di 50px per fare spazio alla sidebar

// Crea dei quadrati rosa nel corpo principale
const squaresContainer = document.createElement('div');
squaresContainer.style.marginTop = '10px';
document.body.appendChild(squaresContainer);

// Modifica la larghezza dei quadrati per essere un po' meno della larghezza della colonna principale
const columnWidth = document.body.offsetWidth - 50; // 50px per la sidebar
const squareWidth = columnWidth * 0.8; // Quadrati più stretti della colonna principale

// Aggiungi dei quadrati rosa
for (let i = 0; i < 5; i++) { // Aggiungiamo 5 quadrati rosa
  const square = document.createElement('div');
  square.style.width = `${squareWidth}px`;
  square.style.height = '100px'; // Altezza del quadrato
  square.style.backgroundColor = '#e74c3c'; // Colore rosa
  square.style.marginBottom = '10px';
  square.style.borderRadius = '5px'; // Bordo arrotondato
  squaresContainer.appendChild(square);
}
