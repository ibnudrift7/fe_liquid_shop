'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  searchPlaceholder?: string;
  cartCount?: number;
  onSearch?: (value: string) => void;
  onCartClick?: () => void;
}

export default function HeroSection({
  searchPlaceholder = 'Makna V4',
  cartCount = 25,
  onSearch,
  onCartClick,
}: HeroSectionProps) {
  return (
    <div className='relative mb-6'>
      <div className='relative aspect-[16/9] overflow-hidden'>
        <Image
          src='/assets/Background.png'
          alt='Hero Background'
          fill
          sizes='(max-width: 720px) 100vw, 720px'
          className='object-cover'
        />
        {/* <div className='bg-[url(/assets/Background.png)] bg-cover bg-center w-full h-full' /> */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent' />

        <div className='absolute inset-0 flex flex-col justify-start items-center text-center pt-10 px-6'>
          <div className='flex items-center gap-0 w-full max-w-xl'>
            <div className='relative flex-1'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-1' />
              <Input
                placeholder={searchPlaceholder}
                className='pl-10 pr-0 bg-white/50 backdrop-blur-sm border-gray-200 rounded-l-lg rounded-r-none h-12 border-r-0'
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
            <div className='relative'>
              <Button
                size='icon'
                className='bg-brand hover:bg-brand/90 rounded-l-none rounded-r-lg h-12 w-12 border-l-0'
                onClick={onCartClick}
              >
                <ShoppingCart className='w-5 h-5' />
              </Button>
              {cartCount > 0 && (
                <Badge className='absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white rounded-full min-w-[24px] h-6 flex items-center justify-center text-xs'>
                  {cartCount}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
