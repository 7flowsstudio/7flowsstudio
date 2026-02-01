'use client';

import dynamic from 'next/dynamic';
import DevProfiler from '@/components/DevProfiler/DevProfiler';

const ReviewsSlider = dynamic(
  () => import('./ReviewsSlider'),
  { ssr: false }
);

export default function ReviewsClient() {
  return (
    <DevProfiler id="ReviewsSlider">
      <ReviewsSlider />
    </DevProfiler>
  );
}
