import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import CVTemplate from '@/components/CVTemplate.jsx';
import { cvData } from '@/lib/cvData.js';
import { generateCVPDF } from '@/lib/pdfGenerator.js';
import { motion } from 'framer-motion';

const CVPage = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const cvElementId = 'cv-document-template';

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    toast({
      title: "Generating PDF",
      description: "Please wait while your document is being prepared...",
    });

    const fileName = `CV_${cvData.personalInfo.name.replace(/\s+/g, '_')}.pdf`;
    const success = await generateCVPDF(cvElementId, fileName);

    if (success) {
      toast({
        title: "Success",
        description: "CV downloaded successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive"
      });
    }
    setIsGenerating(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>CV | Resume - Elandry Firgiawan</title>
        <meta name="description" content="View and download my professional CV/Resume detailing my experience in full stack web development and IT support." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <ScrollToTopButton />

        <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            
            {/* Page Header & Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-6 text-center md:text-left"
            >
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                  Elandry Firgiawan | Resume
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  View my professional experience or download it as a PDF.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
                <Button 
                  variant="outline" 
                  onClick={handlePrint}
                  className="w-full sm:w-auto border-border bg-card hover:bg-muted min-h-[44px]"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button 
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 min-h-[44px]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isGenerating ? 'Generating...' : 'Download PDF'}
                </Button>
              </div>
            </motion.div>

            {/* CV Document Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full overflow-x-auto pb-8 print:overflow-visible print:pb-0 flex justify-center"
            >
              {/* 
                We wrap the CV in a container that ensures it has a light background 
                for proper PDF generation and print appearance, while still looking 
                good on screen.
              */}
              <div className="w-full max-w-4xl min-w-[320px] md:min-w-[800px] p-2 sm:p-4 md:p-8 bg-muted/30 rounded-xl border border-border print:border-none print:bg-transparent print:p-0">
                <CVTemplate data={cvData} id={cvElementId} />
              </div>
            </motion.div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CVPage;