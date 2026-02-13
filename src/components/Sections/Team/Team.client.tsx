'use client';

import dynamic from 'next/dynamic';
import DevProfiler from '@/components/DevProfiler/DevProfiler';

const Team = dynamic(() => import('./Team'), { ssr: false });

export default function TeamClient() {
  return (
    <DevProfiler id="Team">
      <Team />
    </DevProfiler>
  );
}
