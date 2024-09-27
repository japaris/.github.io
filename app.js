document.getElementById("downloadBtn").onclick = function() {
  const videoUrl = document.getElementById("videoUrl").value;
  
  if (videoUrl) {
    // Afficher un message de succès (ou un appel API pour le téléchargement)
    document.getElementById("message").innerText = "Téléchargement en cours pour : " + videoUrl;
  } else {
    document.getElementById("message").innerText = "Veuillez entrer une URL valide.";
  }
};
