//JavaScript code:

const generateButton = document.getElementById('generate-button');
const qrCodeDiv = document.getElementById('qr-code');
const loadingSpinner = document.getElementById("loading-spinner");

generateButton.addEventListener('click', function() {
  const qrText = document.getElementById('qr-text').value;
  if (qrText) {
    // Clear the contents of the qr-code div
    qrCodeDiv.innerHTML = '';

    //Gen new Qr
    const qrCode = new QRCode(qrCodeDiv, {
      text: qrText,
      width: 256,
      height: 256,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });

    loadingSpinner.style.display = "block"; // Show the loading spinner
    setTimeout(function() {
      qrCode.makeCode(qrText);
      loadingSpinner.style.display = "none"; // Hide the loading spinner
  }, 1000);
}

});

