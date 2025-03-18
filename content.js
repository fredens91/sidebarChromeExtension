const sidebar = document.createElement('div');
sidebar.style.position = 'fixed';
sidebar.style.top = '0';
sidebar.style.left = '0';
sidebar.style.width = '50px';
sidebar.style.height = '100vh';
sidebar.style.backgroundColor = '#2c3e50';
sidebar.style.color = 'white';
sidebar.style.padding = '10px';
sidebar.style.overflowY = 'auto';
sidebar.style.boxShadow = '2px 0px 5px rgba(0, 0, 0, 0.5)';
sidebar.style.display = 'flex';
sidebar.style.flexDirection = 'column';
sidebar.style.justifyContent = 'center'; 
document.body.appendChild(sidebar);

const link = document.createElement('a');
link.href = 'https://www.linkedin.com/feed/';
link.style.width = '20px';
link.style.height = '20px';
link.style.backgroundColor = 'pink';
link.style.color = 'pink';
link.style.textDecoration = 'none';
link.style.fontSize = '10px';
link.style.display = 'block';
link.style.margin = 'auto';

sidebar.appendChild(link);

// Separare la sidebar dal resto della pagina
const style = document.createElement('style');
style.innerHTML = `
  body {
    display: flex;
    margin-left: 50px; /* Diamo spazio al contenuto, separandolo dalla sidebar */
  }

  body > *:not(div) {
    margin-left: 50px; /* Spostiamo il contenuto per evitare sovrapposizioni */
  }

  #sidebar {
    z-index: 9999; /* Manteniamo la sidebar sopra al contenuto, ma solo in caso */
  }
`;

document.head.appendChild(style);
