'use client';

import dynamic from 'next/dynamic';
import DevProfiler from '@/components/DevProfiler/DevProfiler';

const Contact = dynamic(() => import('./Contact'), { ssr: false });

export default function ContactClient() {
  return (
    <DevProfiler id="Contact">
      <Contact />
    </DevProfiler>
  );
}
