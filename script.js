// Get the buttons by their IDs
const viewResumeBtn = document.getElementById('viewResumeBtn');
const downloadResumeBtn = document.getElementById('downloadResumeBtn');

// Add event listeners for button clicks
viewResumeBtn.addEventListener('click', function() {
    // Open the resume in a new tab for viewing
    window.open('chetan cr.pdf', '_blank');
});

downloadResumeBtn.addEventListener('click', function() {
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = 'chetan cr.pdf';  // Path to the resume PDF
    link.download = 'Chethan_CR_Resume.pdf';  // File name for download\
    link.click();
    
});
