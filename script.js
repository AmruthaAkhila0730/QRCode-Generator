
function generateQR() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText").value;

    if (qrText.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText);
        imgBox.classList.add("show-img");
    } else {
        document.getElementById("qrText").classList.add("error");
        setTimeout(() => {
            document.getElementById("qrText").classList.remove("error");
        }, 1000);
    }
}