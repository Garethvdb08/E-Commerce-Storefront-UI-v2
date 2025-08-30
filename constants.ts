
import type { Product, Category } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Modern Leather Sofa',
    price: '$1,299.00',
    imageUrl: 'https://picsum.photos/seed/sofa/400/400',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Minimalist Oak Desk',
    price: '$799.00',
    imageUrl: 'https://picsum.photos/seed/desk/400/400',
  },
  {
    id: 3,
    name: 'Velvet Accent Chair',
    price: '$450.00',
    imageUrl: 'https://picsum.photos/seed/chair/400/400',
    tag: 'Featured',
  },
  {
    id: 4,
    name: 'Industrial Bookshelf',
    price: '$650.00',
    imageUrl: 'https://picsum.photos/seed/bookshelf/400/400',
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Living Room',
    imageUrl: 'https://picsum.photos/seed/livingroom/600/400',
  },
  {
    id: 2,
    name: 'Bedroom',
    imageUrl: 'https://picsum.photos/seed/bedroom/600/400',
  },
  {
    id: 3,
    name: 'Office',
    imageUrl: 'https://picsum.photos/seed/office/600/400',
  },
];