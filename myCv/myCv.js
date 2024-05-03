// Do you want to install the recommended 'vscode-pdf'
//  extension from tomoki1207 for Resume.Cv.pdf?




// maybe is ki extension install hoti ho pdf ki 

// mne bhar bnai ha pdf folder maybe ye bh myCv folder me hota ho  

// ==================== GENERATE PDF============================

// PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')


// Html2pdf options

let opt = {
    margin:       0,
    filename:     'myResume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };

// function to call areaCv and Html2Pdf options

// when the button is clicked, it executes the three functions

function generateResume() {
    html2pdf(areaCv, opt)
}
function downloadPDF(url) {
    // Create a new anchor element
    var link = document.createElement('a');
    // Set the href attribute to the PDF file's URL
    link.href = url;
    // Set the download attribute with the desired file name
    link.download = 'file.pdf';
    // Programmatically click the link to trigger the download
    link.click();
}
resumeButton.addEventListener('click', () => {
    // 1. the class .scalecv is is added to the body , where it reduces the size of the elements
    // scaleCv()

    // // 2. The PDF is generated
    // generateResume()

    // // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size 
    // setTimeout(resumeScale, 5000)
    var pdfURL = '../pdf/Resume.pdf';

    // window.open('../pdf/Resume.pdf', '_blank')
    downloadPDF(pdfURL);
})





// let areaCv = document.getElementById('area-cv');
// let resumeButton = document.getElementById('resume-button');

// // Html2pdf options
// let opt = {
//     margin:       0,
//     filename:     'myResume.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 4 },
//     jsPDF:        { format: 'a4', orientation: 'portrait' }
// };

// // Function to generate PDF from areaCv
// function generateResume() {
//     html2pdf().from(areaCv).set(opt).save();
// }

// // Event listener for resumeButton click
// resumeButton.addEventListener('click', () => {
//     // Generate the PDF
//     generateResume();
// });
