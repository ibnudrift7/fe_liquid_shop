'use client';

import {
  HeroSection,
  LocationSection,
  CategoryGridSection,
  VoucherBanner1Section,
  VoucherBanner2Section,
  FooterNavigationSection,
} from '@/components/sections';
import { Category, NavigationTab } from '@/types';

export default function Home() {
  const handleSearch = (value: string) => {
    console.log('Search:', value);
    // TODO: Implement search functionality
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
    // TODO: Navigate to cart page
  };

  const handleLocationClick = () => {
    console.log('Location clicked');
    // TODO: Open location picker or navigate to map
  };

  const handleCategoryClick = (category: Category) => {
    console.log('Category clicked:', category);
    // TODO: Navigate to category page
  };

  const handleVoucherClaim = () => {
    console.log('Voucher claimed');
    // TODO: Implement voucher claim logic
  };

  const handleTabClick = (tab: NavigationTab) => {
    console.log('Tab clicked:', tab);
    // TODO: Navigate to respective page
  };

  return (
    <div className='min-h-screen bg-gray-50 mx-auto max-w-[720px] border-x border-gray-200'>
      <HeroSection
        searchPlaceholder='Makna V4'
        cartCount={25}
        onSearch={handleSearch}
        onCartClick={handleCartClick}
      />

      <LocationSection
        title='GET STARTED'
        subtitle='ORDER NOW!'
        locationName='Ruko Mulyosari Surabaya'
        locationAddress='Ruko Mulyosari Surabaya, Jl Mulyosari No 76G Kec....'
        onLocationClick={handleLocationClick}
      />

      <CategoryGridSection onCategoryClick={handleCategoryClick} />

      <VoucherBanner1Section
        title='Voucher buy 1 get 1 special'
        subtitle='UNIONLABS WEBSITE USER.'
        onClaim={handleVoucherClaim}
      />

      <VoucherBanner2Section
        title1='Mau Voucher'
        title2='Diskon 10RB?'
        description='Gabung & Ambil Vouchernya Sekarang juga!'
        onClaim={handleVoucherClaim}
      />

      <FooterNavigationSection activeTab='home' onTabClick={handleTabClick} />
    </div>
  );
}
