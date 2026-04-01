"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

// Dynamically import components that use Three.js / browser APIs
const ThreeViewer = dynamic(
  () => import("./ThreeViewer"),
  { ssr: false }
);

const VirtualTour = dynamic(
  () => import("./VirtualTour"),
  { ssr: false }
);

export default function ShowroomContent() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Immersive Experience"
          title="Virtual Showroom"
          subtitle="Walk through our designs in 3D. Explore materials, layouts, and finishes before they come to life in your home."
        />

        {/* Virtual Tour */}
        <AnimatedSection>
          <div className="mb-20">
            <h3 className="font-accent text-xs tracking-[0.25em] uppercase text-royal-400 mb-6">
              360° Virtual Tour
            </h3>
            <VirtualTour />
          </div>
        </AnimatedSection>

        {/* 3D Viewer */}
        <AnimatedSection delay={0.2}>
          <div>
            <h3 className="font-accent text-xs tracking-[0.25em] uppercase text-royal-400 mb-6">
              Interactive 3D Model
            </h3>
            <ThreeViewer modelPath="/models/bagalur-villa.glb" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}