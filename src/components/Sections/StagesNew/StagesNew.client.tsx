'use client';

import dynamic from 'next/dynamic';
import DevProfiler from '@/components/DevProfiler/DevProfiler';

const StagesNew = dynamic(() => import('./StagesNew'), { ssr: false });

export default function StagesNewClient() {
  return (
    <DevProfiler id="StagesNew">
      <StagesNew />
    </DevProfiler>
  );
}
