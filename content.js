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

// Aggiungi un campo di input per aggiungere nuovi collegamenti
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Aggiungi un preferito';
input.style.width = '100%';
input.style.padding = '5px';
input.style.marginBottom = '10px';
input.style.border = 'none';
input.style.borderRadius = '5px';
input.style.fontSize = '12px'; // Font più piccolo per risparmiare spazio
sidebar.appendChild(input);

// Aggiungi un pulsante per aggiungere il collegamento
const button = document.createElement('button');
button.innerText = 'Aggiungi';
button.style.width = '100%';
button.style.padding = '5px';
button.style.backgroundColor = '#3498db';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.fontSize = '12px'; // Font più piccolo per risparmiare spazio
sidebar.appendChild(button);

// Aggiungi la lista dei preferiti
const favoritesList = document.createElement('ul');
favoritesList.style.listStyleType = 'none';
favoritesList.style.paddingLeft = '0';
favoritesList.style.marginTop = '10px';
favoritesList.style.fontSize = '12px'; // Font più piccolo per risparmiare spazio
sidebar.appendChild(favoritesList);

// Aggiungi la sidebar al body della pagina
document.body.appendChild(sidebar);

// Sposta il contenuto della pagina per fare spazio alla sidebar
document.body.style.marginLeft = '50px'; // La pagina si sposterà a destra di 80px per fare spazio alla sidebar

// Carica i preferiti salvati dal localStorage
chrome.storage.local.get('favorites', (data) => {
  if (data.favorites) {
    data.favorites.forEach(link => {
      addFavoriteToList(link);
    });
  }
});

// Funzione per aggiungere un preferito alla lista
button.addEventListener('click', () => {
  const newLink = input.value.trim();
  if (newLink) {
    chrome.storage.local.get('favorites', (data) => {
      const favorites = data.favorites || [];
      favorites.push(newLink);
      chrome.storage.local.set({ favorites }, () => {
        addFavoriteToList(newLink);
        input.value = '';
      });
    });
  }
});

// Funzione per aggiungere un preferito alla lista visibile
function addFavoriteToList(link) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = link;
  a.textContent = link;
  a.target = '_blank';
  li.appendChild(a);
  favoritesList.appendChild(li);
}
