function setProgressBarWidth(elementId, percentage) {
    const progressBar = document.getElementById(elementId);
    progressBar.style.width = `${percentage}%`;
}

// You can set the initial widths or update them dynamically based on your data
setProgressBarWidth('html-bar', 100);
setProgressBarWidth('css-bar', 95);
setProgressBarWidth('js-bar', 80);
setProgressBarWidth('py-bar', 70);