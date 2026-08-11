import React from 'react';
import { SectionHeader } from '../components/seahome/ShopRentals/RentalShopSectionHeader';
import { RentalShopConditionSearch } from '../components/seahome/ShopRentals/RentalShopConditionSearch';
import { RentalShopBottom } from '../components/seahome/ShopRentals/RentalShopBottom';
import { UsefulGuides } from '../components/seahome/ShopRentals/RentalShopUsefulGuides';
import { PageHeader } from '../components/seahome/ShopRentals/PageHeader';
import { RentalTypeSearch } from '../components/seahome/ShopRentals/RentalTypeSearch';
import { RentalShopProperties } from '../components/seahome/ShopRentals/RentalShopProperties';

const RentalShopPage: React.FC = () => {
  return (
    <div className="bg-gray-50/40 min-h-screen py-6">
      {/* Main Container - Spans full width without ads */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Modified Page Header Section */}
        <PageHeader totalListings="72,710" />

        {/* Business Type Search Component */}
        <RentalTypeSearch />

        {/* Section: Condition Search */}
        <RentalShopConditionSearch />

        {/* Shopping District Grid, Banners & What's New Carousel */}
        <RentalShopProperties />

        {/* Section: Useful Guides */}
        <SectionHeader title="Use   ful tips for finding a store" />
        <UsefulGuides />
        {/* Bottom Section: Property Types, Terms & Sea Home Info */}
        <RentalShopBottom />
      </main>
    </div>
  );
};

export default RentalShopPage;