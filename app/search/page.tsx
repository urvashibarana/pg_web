'use client';

import { Suspense } from 'react';
import SearchContent from './SearchContent';
import Header from '../../components/Header';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="p-8">Loading search results...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}