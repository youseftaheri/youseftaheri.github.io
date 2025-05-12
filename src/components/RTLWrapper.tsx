// src/components/RTLWrapper.tsx
'use client';

import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function RTLWrapper({ children }: { children: ReactNode }) {
  const { locale } = useRouter();
  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen">
      {children}
    </div>
  );
}