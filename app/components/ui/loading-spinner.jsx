"use client";

import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export const LoadingSkeleton = ({ className = '', lines = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-700/50 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

export const LoadingCard = ({ className = '' }) => {
  return (
    <div className={`glass rounded-xl p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-700/50 rounded w-full mb-2" />
        <div className="h-4 bg-gray-700/50 rounded w-5/6 mb-2" />
        <div className="h-4 bg-gray-700/50 rounded w-2/3" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
