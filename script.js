function setProgressBarWidth(elementId, percentage) {
    const progressBar = document.getElementById(elementId);
    progressBar.style.width = `${percentage}%`;
}

// You can set the initial widths or update them dynamically based on your data
setProgressBarWidth('html-bar', 100);
setProgressBarWidth('css-bar', 95);
setProgressBarWidth('js-bar', 80);
setProgressBarWidth('py-bar', 70);
const myButton = document.getElementById('myButton');

// Add event listener for hover
myButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#0056b3';
});

myButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#007bff';
});

// Add event listener for click
myButton.addEventListener('mousedown', function() {
    this.style.backgroundColor = '#004080';
});

myButton.addEventListener('mouseup', function() {
    this.style.backgroundColor = '#007bff';
});