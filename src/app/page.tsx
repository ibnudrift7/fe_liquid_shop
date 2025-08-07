'use client';

import {
  HeroSection,
  LocationSection,
  CategoryGridSection,
  VoucherBanner1Section,
  VoucherBanner2Section,
  SpecialTodaySection,
  OfficialMerchandiseSection,
  ProductSection,
  ChatAdminSection,
  FooterNavigationSection,
  PromoSection,
} from '@/components/sections';
import { Category, SpecialProduct, Product, NavigationTab } from '@/types';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleProductClick = (product: Product | SpecialProduct) => {
    console.log('Product clicked:', product);
    // TODO: Navigate to product detail page
  };

  const handleOrderClick = () => {
    console.log('Order clicked');
    // TODO: Navigate to order page
  };

  const handleChatClick = () => {
    console.log('Chat clicked');
    // TODO: Open WhatsApp chat
  };

  const handleTabClick = (tab: NavigationTab) => {
    console.log('Tab clicked:', tab);
    // TODO: Navigate to respective page
  };

  return (
    <div className='min-h-screen bg-gray-50 mx-auto max-w-[720px] border-x border-gray-200'>
      <div className='relative'>
        <HeroSection
          searchPlaceholder='Makna V4'
          cartCount={25}
          onSearch={handleSearch}
          onCartClick={handleCartClick}
        />

        <div className='absolute bottom-0 left-0 right-0 transform translate-y-3/4 z-1'>
          <LocationSection
            title='GET STARTED'
            subtitle='ORDER NOW!'
            locationName='Ruko Mulyosari Surabaya'
            locationAddress='Ruko Mulyosari Surabaya, Jl Mulyosari No 76G Kec....'
            onLocationClick={handleLocationClick}
          />
        </div>
      </div>

      <div className='pt-45'>
        <CategoryGridSection
          isLoading={isLoading}
          onCategoryClick={handleCategoryClick}
        />
      </div>

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

      <SpecialTodaySection
        isLoading={isLoading}
        onProductClick={handleProductClick}
      />

      <OfficialMerchandiseSection onOrderClick={handleOrderClick} />

      <ProductSection
        isLoading={isLoading}
        onProductClick={handleProductClick}
      />

      <PromoSection />

      <ChatAdminSection
        chatTitle='Buat User MAKNA (Chat Only)'
        phoneNumber='+62 xxx xxx xxx'
        onChatClick={handleChatClick}
      />

      <FooterNavigationSection activeTab='home' onTabClick={handleTabClick} />
    </div>
  );
}
