// Declare references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Event listener for the Add Chapter button
button.addEventListener('click', () => {
  // Check if input is empty
  if (input.value.trim() === '') {
    alert('Please enter a chapter name.');
    return;
  }

  // Create new list item
  const li = document.createElement('li');
  li.textContent = input.value;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  // Append delete button to list item
  li.append(deleteButton);

  // Append list item to the list
  list.append(li);

  // Clear input field
  input.value = '';
  input.focus();

  // Add event listener to delete button
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });
});
