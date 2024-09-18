import { Loader2 } from 'lucide-react';

export const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
    <div className="relative flex flex-col items-center">
     
      <Loader2 className="w-24 h-24 text-black stroke-500 animate-spin" />
    
      <p className="mt-4 text-green-700 text-xl font-semibold">Loading...</p>
    </div>
  </div>
);
