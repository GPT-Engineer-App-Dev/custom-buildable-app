import React from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Your Bare-Bones App!
        </h1>
        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            src/pages/Index.jsx
          </code>
        </p>
        <div className="flex mt-6">
          <Button variant="outline">Learn More</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;