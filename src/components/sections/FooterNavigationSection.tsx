'use client';

import { Badge } from '@/components/ui/badge';
import { NavigationTab } from '@/types';

interface FooterNavigationSectionProps {
  title?: string;
  tabs?: NavigationTab[];
  activeTab?: string;
  onTabClick?: (tab: NavigationTab) => void;
}

const defaultTabs: NavigationTab[] = [
  { id: 'home', icon: '🏠', label: 'Home' },
  { id: 'shop', icon: '🛍️', label: 'Shop', badge: '3' },
  { id: 'promo', icon: '🎁', label: 'Promo', badge: '2' },
  { id: 'profile', icon: '👤', label: 'Saya' },
  { id: 'logout', icon: '🚪', label: 'Logout' },
];

export default function FooterNavigationSection({
  title = 'FOOTER NAVIGATION SECTION',
  tabs = defaultTabs,
  activeTab = 'home',
  onTabClick,
}: FooterNavigationSectionProps) {
  return (
    <footer className='bg-white border-t sticky bottom-0 p-4'>
      <div className='text-center text-sm font-semibold text-gray-700 mb-4'>
        {title}
      </div>
      <div className='flex justify-around'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabClick?.(tab)}
            className={`flex flex-col items-center space-y-1 relative transition-colors ${
              activeTab === tab.id ? 'text-brand' : 'text-gray-600'
            }`}
          >
            <div className='relative'>
              <span className='text-xl'>{tab.icon}</span>
              {tab.badge && (
                <Badge className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-0'>
                  {tab.badge}
                </Badge>
              )}
            </div>
            <span className='text-xs'>{tab.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
}
