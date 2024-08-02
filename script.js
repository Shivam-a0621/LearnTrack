document.addEventListener('DOMContentLoaded', () => {
    // Restore checkbox states from localStorage
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = JSON.parse(localStorage.getItem(checkbox.id)) || false;
        updateCheckboxState(checkbox); // Update initial state
    });

    // Save checkbox states to localStorage on change and update cell color
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
            updateCheckboxState(checkbox);
        });
    });

    function updateCheckboxState(checkbox) {
        const listItem = checkbox.parentElement;
        if (checkbox.checked) {
            listItem.classList.add('checked');
        } else {
            listItem.classList.remove('checked');
        }
    }
});
