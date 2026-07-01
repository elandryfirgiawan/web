import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import CertificateCard from '@/components/CertificateCard.jsx';
import FilterButton from '@/components/FilterButton.jsx';
import { motion } from 'framer-motion';
import certificates from '@/data/certificates';

const CertificatesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'IT Support'];

  const filteredCertificates = activeFilter === 'All'
    ? certificates
    : certificates.filter((certificate) =>
        certificate.category.includes(activeFilter)
      );

  return (
    <>
      <Helmet>
        <title>Certificates - Elandry Firgiawan</title>
        <meta name="description" content="A collection of my professional certificates and credentials in web development and IT support." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ScrollToTopButton />

        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
                My certificates
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Professional certifications and credentials that reflect my continuous learning in web development and IT support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  label={category}
                  isActive={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                />
              ))}
            </motion.div>

            {/* Grid lebih rapat + kolom lebih banyak supaya card terasa lebih kecil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertificates.map((certificate, index) => (
                <CertificateCard key={index} certificate={certificate} index={index} />
              ))}
            </div>

            {filteredCertificates.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No certificates found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CertificatesPage;