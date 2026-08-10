import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center mb-4 mt-8">
      <div className="w-1 h-5 bg-blue-600 mr-3"></div>
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    </div>
  );
};