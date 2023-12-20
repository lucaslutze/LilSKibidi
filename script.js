

let currentImg = 1;
const img1 = document.getElementById('slideshowImg1');
const img2 = document.getElementById('slideshowImg2');

// funktion för att ändra mellan bilderna
function nextImage() {
    if (currentImg === 1) {
        img1.style.display = 'none';
        img2.style.display = 'block';
        currentImg = 2;
    } else {
        img2.style.display = 'none';
        img1.style.display = 'block';
        currentImg = 1;
    }
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');
   

}

function epilepsi() {
    for (let i = 0;i < 100; i++) {
        setTimeout(toggleTheme, i * 40);
    }
}
// ändra hur långt imellan bildbytet i millisekunder
setInterval(nextImage, 1000); 
