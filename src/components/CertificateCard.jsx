import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group h-full border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300">
        {/* Thumbnail sertifikat (lebih kecil dari ProjectCard) */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary/40">
              <Award className="w-10 h-10" />
            </div>
          )}
          <Badge
            variant="outline"
            className="absolute top-2 left-2 text-[10px] px-2 py-0.5 border-primary/20 text-primary bg-background/80 backdrop-blur-sm"
          >
            {certificate.category}
          </Badge>
        </div>

        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm md:text-base font-semibold leading-snug text-foreground line-clamp-2">
              {certificate.title}
            </h3>
            <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-4 h-4" />
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-3">
            {certificate.issuer}
            {certificate.date ? ` · ${certificate.date}` : ''}
          </p>

          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              View credential
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificateCard;