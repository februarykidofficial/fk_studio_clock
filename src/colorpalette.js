const paletteToggle = document.querySelector('.palette-toggle');
const palette = document.querySelector('.palette');

//  Array of 100 specific colors
const colors = [
    '#FFFFFF', '#F0F8FF', '#FAEBD7', '#000000', '#00008B', '#0000CD', '#0000FF', '#006400',
    '#008000', '#008080', '#00BFFF', '#00CED1', '#00FA9A', '#00FF00', '#00FF7F', '#00FFFF',
    '#00FFFF', '#013220', '#08E8DE', '#191970', '#1E90FF', '#228B22', '#2F4F4F', '#32CD32',
    '#3CB371', '#40E0D0', '#4169E1', '#4682B4', '#483D8B', '#48D1CC', '#4F4F4F', '#556B2F',
    '#5F9EA0', '#6495ED', '#663399', '#66CDAA', '#696969', '#6A5ACD', '#6B8E23', '#708090',
    '#708090', '#778899', '#778899', '#78866B', '#7B68EE', '#7CFC00', '#7FFF00', '#7FFFD4',
    '#800000', '#800080', '#808000', '#808080', '#87CEFA', '#87CEFA', '#8A2BE2', '#8B0000',
    '#8B008B', '#8B4513', '#8FBC8F', '#90EE90', '#9370DB', '#98FB98', '#9932CC', '#A0522D',
    '#A52A2A', '#A9A9A9', '#A9A9A9', '#AB8F00', '#ADD8E6', '#ADFF2F', '#AFEEEE', '#B0E0E6',
    '#B0E313', '#B1FB17', '#B22222', '#B8860B', '#BA55D3', '#BC8F8F', '#BDB76B', '#C04000',
    '#C0C0C0', '#C1F07C', '#C2B280', '#C71585', '#CD5C5C', '#CD853F', '#D2691E', '#D3D3D3',
    '#D87093', '#D8BFD8', '#DA70D6', '#DAA520', '#DB7093', '#DC143C', '#DCDCDC', '#DEB887',
    '#E0FFFF', '#E6E6FA', '#E9967A', '#EE82EE', '#EEE8AA', '#F0E68C', '#F0F8FF', '#F0FFF0',
    '#F4A460', '#F5DEB3', '#F5F5DC', '#F88379', '#FA8072', '#FAF0E6', '#FAFFF0', '#FBEC5D',
    '#FCF4D0', '#FDF5E6', '#FF0000', '#FF00FF', '#FF00FF', '#FF1493', '#FF4500', '#FF6347',
    '#FF69B4', '#FF7F50', '#FF8C00', '#FFA07A', '#FFA500', '#FFB6C1', '#FFC0CB', '#FFD700',
    '#FFDAB9', '#FFE4B5', '#FFE4C4', '#FFF0F5', '#FFF5EE', '#FFF8DC', '#FFFACD', '#FFFAF0',
    '#FFFFE0', '#FFFFF0', '#FFFFF0', '#FFFFFF', '#FFFFF0', '#FFFFFF'
];

// Function to calculate the perceived luminance of a hex color
function getLuminance(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    // Standard formula for luminance
    return 0.299 * r + 0.587 * g + 0.114 * b;
}

// Sort the colors based on their luminance (lightest to darkest)
colors.sort((a, b) => getLuminance(a) - getLuminance(b));

// Function to create a color button
function createColorButton(color) {
    const button = document.createElement('button');
    button.classList.add('color-button');
    button.style.backgroundColor = color;
    button.addEventListener('click', () => {
        document.body.style.color = color; // Change the color of the body text.
    });
    return button;
}

// Populate the palette with color buttons
colors.forEach(color => {
    const button = createColorButton(color);
    if (palette) {
        palette.appendChild(button);
    } else {
        console.error("Palette element not found in src/script.js!");
    }
});

// Toggle the visibility of the palette
if (paletteToggle) {
    paletteToggle.addEventListener('click', () => {
        palette.classList.toggle('hidden');
    });
} else {
    console.error("paletteToggle element not found in src/script.js! Check your HTML.");
}
