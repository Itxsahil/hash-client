import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-pink-500 border-t-transparent rounded-full animate-spin w-full h-full"></div>
      </div>
    </div>
  );
};

export default Loader;
