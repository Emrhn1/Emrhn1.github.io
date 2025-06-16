const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, images, JavaScript)
app.use(express.static(__dirname));

// Handle routes for all HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hakkimda.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'hakkimda.html'));
});

app.get('/portfolio.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/iletisim.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'iletisim.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`To view your website, open a browser and navigate to:`);
  console.log(`- Homepage: http://localhost:${port}`);
  console.log(`- Hakkımda (About): http://localhost:${port}/hakkimda.html`);
  console.log(`- Portföy (Portfolio): http://localhost:${port}/portfolio.html`);
  console.log(`- İletişim (Contact): http://localhost:${port}/iletisim.html`);
});
