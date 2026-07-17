"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile, { Certification } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import Tilt from "react-parallax-tilt";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleCardClick = (cert: Certification) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const previewUrl = selectedCert?.imageUrl || selectedCert?.credentialUrl || "";
  const isPdfPreview = previewUrl.toLowerCase().endsWith(".pdf");

  return (
    <section id="certifications" className="mx-auto max-w-5xl px-6 py-20 relative z-10">
      <SectionHeading 
        index="06 — Certifications" 
        title="Certifications" 
        description="A showcase of my continuous learning and technical achievements."
      />

      <div className="overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex gap-6 min-w-full snap-x snap-mandatory">
          {profile.certifications.map((cert) => (
            <Tilt
              key={`${cert.name}-${cert.date}`}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="var(--ember)"
              glarePosition="all"
              glareBorderRadius="12px"
              className="min-w-[20rem] snap-start"
            >
              <button
                type="button"
                onClick={() => handleCardClick(cert)}
                className="flex w-full flex-col justify-between h-full p-6 rounded-xl border border-line bg-surface/40 backdrop-blur-md transition-all hover:border-ember/40 hover:bg-surface/70 group shadow-md text-left cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Certificate Icon Badging */}
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-ember/20 bg-ember/5 text-ember group-hover:bg-ember group-hover:text-bg transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-ember transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-ink-muted mt-1">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between border-t border-line/50 pt-4">
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted/80">
                    {cert.date}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ember flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                    Preview ↗
                  </span>
                </div>
              </button>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Interactive Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-bg/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:border-ember hover:text-ember transition-colors"
                aria-label="Close modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Header Info */}
              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ember">
                  Certificate Preview
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink mt-1">
                  {selectedCert.name}
                </h2>
                <p className="text-sm text-ink-muted">
                  Issued by <strong className="text-ink">{selectedCert.issuer}</strong> · Completed {selectedCert.date}
                </p>
              </div>

              {/* Certificate Preview */}
              {previewUrl ? (
                <div className="w-full overflow-hidden rounded-xl border border-line/60 bg-bg p-2 shadow-inner">
                  {isPdfPreview ? (
                    <iframe
                      src={previewUrl}
                      title={selectedCert.name}
                      className="min-h-[70vh] w-full rounded-lg border-0"
                    />
                  ) : (
                    <img
                      src={previewUrl}
                      alt={selectedCert.name}
                      className="max-h-[70vh] w-full rounded-lg object-contain"
                    />
                  )}
                </div>
              ) : (
                <div className="w-full aspect-[16/10] relative rounded-xl border border-line/60 bg-gradient-to-br from-surface to-bg p-6 flex flex-col items-center justify-between text-center overflow-hidden shadow-inner select-none">
                  {/* Visual Watermark Seal Background */}
                  <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                    <svg width="350" height="350" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>

                  {/* Certificate Border Accents */}
                  <div className="absolute inset-2 rounded-lg border border-ember/25 border-dashed pointer-events-none" />
                  <div className="absolute inset-3 rounded border border-line/40 pointer-events-none" />

                  {/* Content */}
                  <div className="pt-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ember block mb-1">
                      Certificate of Completion
                    </span>
                    <div className="h-px w-20 bg-ember/30 mx-auto" />
                  </div>

                  <div className="my-auto space-y-3">
                    <p className="font-mono text-[10px] text-ink-muted italic uppercase tracking-wider">
                      This is proudly presented to
                    </p>
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-wide border-b border-line pb-2 px-6">
                      {profile.name}
                    </p>
                    <p className="text-xs text-ink-muted leading-relaxed max-w-md mx-auto">
                      for the successful completion of the coursework and certifications requirements for
                      <strong className="text-ink block mt-1 font-medium text-sm">{selectedCert.name}</strong>
                    </p>
                  </div>

                  <div className="w-full flex justify-between items-end border-t border-line/40 pt-4 font-mono text-[9px] text-ink-muted/80">
                    <div className="text-left">
                      <p className="font-bold text-ink-muted">ISSUER</p>
                      <p className="mt-0.5 uppercase tracking-wider">{selectedCert.issuer}</p>
                    </div>
                    {/* Decorative stamp seal */}
                    <div className="h-10 w-10 flex items-center justify-center rounded-full border border-dashed border-ember/50 bg-ember/5 text-ember rotate-12">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-ink-muted">DATE</p>
                      <p className="mt-0.5 uppercase tracking-wider">{selectedCert.date}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                {selectedCert.credentialUrl || selectedCert.imageUrl ? (
                  <a
                    href={selectedCert.credentialUrl || selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-ember text-bg px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-90 shadow-lg shadow-ember/20 text-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    {isPdfPreview ? "Open PDF" : "Open File"}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                    }}
                    className="flex items-center justify-center gap-2 bg-ember text-bg px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-90 shadow-lg shadow-ember/20 text-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Print / Save PDF
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="border border-line bg-surface/50 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ember hover:text-ember text-center"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
