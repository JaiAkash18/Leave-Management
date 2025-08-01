document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const employeeName = document.getElementById('employeeName').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDateInput = document.getElementById('startDate').value;
    const endDateInput = document.getElementById('endDate').value;

    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.remove(); // Remove previous error message if exists
    }

    // Validate that all fields are filled out
    if (!employeeName || !leaveType || !startDateInput || !endDateInput) {
        alert("Please fill in all fields.");
        return;
    }

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    // Validate dates
    if (startDate > endDate) {
        const error = document.createElement('div');
        error.id = 'errorMessage';
        error.className = 'error';
        error.textContent = 'Error: Start Date must be before End Date.';
        document.querySelector('.container').insertBefore(error, document.getElementById('leaveRequests'));
        return;
    }

    // Create a new list item for the leave request
    const leaveRequests = document.getElementById('leaveRequests');
    const li = document.createElement('li');
    li.textContent = ${employeeName} has requested ${leaveType} from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}.;
    leaveRequests.appendChild(li);

    // Clear the form
    document.getElementById('leaveForm').reset();
});