import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WarehousePage: React.FC = () => (
  <div className="w-full bg-slate-50 min-h-screen">
    <div className="border-b border-sky-100 bg-white py-3 px-5">
      <Link to="/seahome-real-estates" className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-900">
        <ArrowLeft className="h-4 w-4" />
        Back to services
      </Link>
    </div>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-sky-950">Warehouse</h1>
      <p className="mt-2 text-gray-600">Warehouse and storage space rentals.</p>
    </div>
  </div>
);

export default WarehousePage;
