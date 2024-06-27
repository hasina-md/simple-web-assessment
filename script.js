document.getElementById('action-button').addEventListener('click', function() {
    // changing the text content of the paragraph.
    document.querySelector('p').textContent = 'Thank you for clicking the button!';
    // changing the image of its border.
    document.getElementById('profile-image').classList.toggle('hidden-border');
    // changing the background color
    document.body.style.backgroundColor = '#d0e6f5';
})