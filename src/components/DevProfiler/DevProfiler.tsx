'use client';
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number,
) {
  if (phase !== 'mount') return;

  console.log(
    `%c[Profiler] ${id}`,
    'color: green; font-weight: bold;',
    {
      actualDuration: `${actualDuration.toFixed(2)} ms`,
      baseDuration: `${baseDuration.toFixed(2)} ms`,
    }
  );
}

export default function DevProfiler({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV !== 'development') {
    return <>{children}</>;
  }

  return (
    <Profiler id={id} onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
}
