let leads = [];
const ulEL = document.getElementById('ul-el');
const inputEL = document.getElementById('input-el');
const btnEL = document.getElementById('btn-el');

btnEL.addEventListener('click', function() {
    if (inputEL.value.trim() !== '') {
        leads.push(inputEL.value);
        render();
        inputEL.value = '';
        inputEL.focus(); // Set focus back to input after adding a todo
    }
});

function render() {
    ulEL.innerHTML = ""; // Clear existing HTML content before adding new items
    for (let i = 0; i < leads.length; i++) {
        const li = document.createElement("li"); // Create a new list item for each lead
        li.textContent = leads[i]; // Set the text of the list item

        // Create a delete button for each todo item
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            leads.splice(i, 1); // Remove the item from the array
            render(); // Re-render the list
        };

        li.appendChild(deleteBtn); // Append the delete button to the list item
        ulEL.appendChild(li); // Append the list item to the unordered list
    }
}
