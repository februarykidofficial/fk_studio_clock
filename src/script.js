function displayTime() {
  let today = new Date();
  let hours = today.getHours().toString().padStart(2, "0");
  let minutes = today.getMinutes().toString().padStart(2, "0");
  let seconds = today.getSeconds().toString().padStart(2, "0");
  let clockElement = document.getElementById("clock");
  clockElement.innerText = hours + ":" + minutes + ":" + seconds;
}

function displayDate() {
  let today = new Date();
  let date = today.toDateString();
  let dateElement = document.getElementById("date");
  dateElement.innerText = date;
}

setInterval(displayTime, 1000);
setInterval(displayDate, 1000);

displayDate();
displayTime();









document.addEventListener('DOMContentLoaded', () => {
    const paletteToggle = document.getElementById('open-about');
    const palette = document.querySelector('.palette');

    // Check if elements exist before adding listeners
    if (paletteToggle && palette) {
        paletteToggle.addEventListener('click', () => {
            palette.classList.toggle('hidden');
        });
    } else {
        console.error("Palette toggle button or palette element not found!");
        return; // Stop script execution if elements are missing
    }

    const numberOfColumns = 20;
    const numberOfRows = 10;

    // Function to generate a shade of a color
    function generateShade(baseColor, shadeIndex, totalShades) {
        const factor = (totalShades - shadeIndex) / totalShades;
        const r = Math.round(parseInt(baseColor.slice(1, 3), 16) * factor);
        const g = Math.round(parseInt(baseColor.slice(3, 5), 16) * factor);
        const b = Math.round(parseInt(baseColor.slice(5, 7), 16) * factor);
        return `#${(r < 16 ? '0' : '') + r.toString(16)}${(g < 16 ? '0' : '') + g.toString(16)}${(b < 16 ? '0' : '') + b.toString(16)}`;
    }

    // Array of base colors (20 columns) -  You can adjust these as needed
    const baseColors = [
        '#FF0000', '#FF4500', '#FF7F00', '#FFA500', '#FFD700', '#FFFF00', '#ADFF2F', '#7FFF00',
        '#00FF00', '#00FA9A', '#00FF7F', '#00FFFF', '#00BFFF', '#0000FF', '#4169E1', '#8A2BE2',
        '#9932CC', '#D02090', '#FF1493', '#FF00FF'
    ];

    let colors = [];  // Will hold the 2D array of shades

    for (let i = 0; i < numberOfColumns; i++) {
        const columnShades = [];
        const baseColor = baseColors[i % baseColors.length]; // Cycle through base colors
        for (let j = 0; j < numberOfRows; j++) {
            columnShades.push(generateShade(baseColor, j, numberOfRows));
        }
        colors.push(columnShades);
    }

    // Function to create a color button
    function createColorButton(color) {
        const button = document.createElement('button');
        button.classList.add('color-button');
        button.style.backgroundColor = color;
        button.addEventListener('click', () => {
            document.body.style.color = color;
            palette.classList.remove('hidden');
        });
        return button;
    }

    // Populate the palette
    palette.innerHTML = '';
    colors.forEach(colorShades => {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('palette-column');
        colorShades.forEach(color => {
            const button = createColorButton(color);
            columnDiv.appendChild(button);
        });
        palette.appendChild(columnDiv);
    });
});
