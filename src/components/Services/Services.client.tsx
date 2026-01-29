'use client';

import dynamic from "next/dynamic";
import DevProfiler from "@/components/DevProfiler/DevProfiler";

const Services = dynamic(
  () => import('./Services'),
  { ssr: false }
);

export default function ServicesClient() {
  return (
    <DevProfiler id="ServicesSection">
      <Services />
    </DevProfiler>
  );
}