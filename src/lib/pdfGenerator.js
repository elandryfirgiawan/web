import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const generateCVPDF = async (elementId, fileName) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  try {
    // Capture the element as a canvas
    // We use onclone to temporarily force light mode for the PDF generation
    // to ensure it looks like a standard printable document regardless of user's theme
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better resolution
      useCORS: true,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          // Force light mode styles on the cloned element for PDF
          clonedElement.style.backgroundColor = '#ffffff';
          clonedElement.style.color = '#0f172a'; // slate-900
          
          // Find all text elements and ensure they are dark for printing
          const textElements = clonedElement.querySelectorAll('h1, h2, h3, h4, p, span, li, div');
          textElements.forEach(el => {
            if (window.getComputedStyle(el).color.includes('255')) {
              el.style.color = '#334155'; // slate-700
            }
          });
        }
      }
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF (A4 format)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate image dimensions to fit A4 width
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Add subsequent pages if content overflows
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(fileName);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};