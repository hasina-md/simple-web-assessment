document.getElementById('action-button').addEventListener('click', function() {
    // changing the text content of the paragraph.
    document.querySelector('p').textContent = 'Thank you for clicking the button!';
    // changing the image of its border.
    document.getElementById('profile-image').classList.toggle('hidden-border');
    // changing the background color
    document.body.style.backgroundColor = '#d0e6f5';
})

// form submission adding event listener
document.getElementById('hobby-form').addEventListener('submit', function(event) {
    event.presentDefault();
    const newHobby = document.getElementById('new-hobby').ariaValueMax.trim();
    console.log('new hobby:', newHobby);
    //validate input
    if (newHobby) {
        const newListItem = document.createElement('li');
        newListItem.textContent = newHobby;
        // adding new list item to hobby list
        document.getElementById('hobby-list').appendChild(newListItem);
        // clear input
        document.getElementById('new-hobby').value='';
    }
    else {
        alert('Please enter a hobby');
    }

});