document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-link');
  const linkInput = document.getElementById('new-link');
  const favoriteLinksList = document.getElementById('favorite-links');

  // Carica i preferiti salvati
  chrome.storage.local.get('favorites', (data) => {
    if (data.favorites) {
      data.favorites.forEach(link => {
        addLinkToList(link);
      });
    }
  });

  // Aggiungi un nuovo link ai preferiti
  addButton.addEventListener('click', () => {
    const newLink = linkInput.value.trim();
    if (newLink) {
      chrome.storage.local.get('favorites', (data) => {
        const favorites = data.favorites || [];
        favorites.push(newLink);
        chrome.storage.local.set({ favorites }, () => {
          addLinkToList(newLink);
          linkInput.value = '';
        });
      });
    }
  });

  // Funzione per aggiungere un link alla lista visibile
  function addLinkToList(link) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link;
    a.textContent = link;
    a.target = '_blank';
    li.appendChild(a);
    favoriteLinksList.appendChild(li);
  }
});
