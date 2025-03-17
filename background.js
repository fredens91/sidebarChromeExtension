chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ favorites: [] }); // Inizializza i preferiti vuoti
  });
  