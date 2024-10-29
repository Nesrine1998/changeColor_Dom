document.addEventListener('DOMContentLoaded', function() {
    let colorBox = document.getElementById('color-box');
    let colorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor.padStart(6, '0'); // Ajoute des zéros à gauche si nécessaire
    }

    colorBtn.addEventListener('click', function() {
        let newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
        colorBtn.style.backgroundColor=newColor;
    });
});
