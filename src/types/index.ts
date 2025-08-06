export interface Category {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export interface SpecialProduct {
  id: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  sold: number;
  image?: string;
  isNew?: boolean;
}

export interface NavigationTab {
  icon: string;
  label: string;
  badge?: string;
  id: string;
}
