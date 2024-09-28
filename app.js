fetch('https://ton-serveur.com/download', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ url: url })
})
.then(response => response.blob())
.then(blob => {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'video.mp4';
  link.click();
})
.catch(error => console.error('Erreur lors du téléchargement:', error));
