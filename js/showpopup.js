// Show the popup on page load
window.onload = function() {
    document.getElementById('popup').style.display = 'block';
};

// Close the popup when the user clicks on the close button
document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

// Optionally close the popup if the user clicks outside the content area
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
};