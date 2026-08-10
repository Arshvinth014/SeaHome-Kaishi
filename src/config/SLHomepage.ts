export interface PropertyCategory {
  id: string;
  name: string;
  count: string;
  image: string;
}

export interface FeaturedProperty {
  id: string;
  title: string;
  tag: 'Featured' | 'New';
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  iconName: 'Home' | 'Utensils' | 'Building' | 'LifeBuoy';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stars: number;
  avatar: string;
}

export interface PopularLocation {
  id: string;
  name: string;
  count: string;
  image: string;
}

export const POPULAR_SEARCHES: string[] = [
  'Colombo Apartments',
  'Houses in Kandy',
  'Rooms in Galle',
  'Apartments in Negombo'
];

export const propertyCategories: PropertyCategory[] = [
  { id: '1', name: 'Apartments', count: '3,256 Properties', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&auto=format&fit=crop&q=60' },
  { id: '2', name: 'Houses', count: '1,642 Properties', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop&q=60' },
  { id: '3', name: 'Rooms', count: '2,114 Properties', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&auto=format&fit=crop&q=60' },
  { id: '4', name: 'Luxury Rentals', count: '586 Properties', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&auto=format&fit=crop&q=60' },
  { id: '5', name: 'Commercial', count: '1,028 Properties', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60' },
  { id: '6', name: 'Lands', count: '742 Properties', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop&q=60' },
];

export const featuredProperties: FeaturedProperty[] = [
  { id: '1', title: 'Luxury Apartment Colombo 03', tag: 'Featured', price: 'Rs. 120,000 /mo', location: 'Colombo 03', beds: 3, baths: 2, sqft: '1,450 sqft', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60' },
  { id: '2', title: 'House for Rent Nugegoda', tag: 'New', price: 'Rs. 85,000 /mo', location: 'Nugegoda', beds: 4, baths: 3, sqft: '2,000 sqft', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60' },
  { id: '3', title: 'Room for Rent Kandy', tag: 'Featured', price: 'Rs. 35,000 /mo', location: 'Kandy', beds: 1, baths: 1, sqft: '250 sqft', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60' },
  { id: '4', title: 'Penthouse Apartment Colombo 07', tag: 'New', price: 'Rs. 200,000 /mo', location: 'Colombo 07', beds: 4, baths: 4, sqft: '2,600 sqft', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60' },
  { id: '5', title: 'House for Rent Malabe', tag: 'Featured', price: 'Rs. 150,000 /mo', location: 'Malabe', beds: 4, baths: 3, sqft: '1,800 sqft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60' },
];

export const moreServices: ServiceItem[] = [
  { id: '1', title: 'List Your Property', description: 'List your property for free and find the right tenants faster.', buttonText: 'List Now', iconName: 'Home' },
  { id: '2', title: 'Find Restaurants', description: 'Discover best restaurants near you. Great food is just a click away.', buttonText: 'Explore', iconName: 'Utensils' },
  { id: '3', title: 'Hotels for Functions', description: 'Find the perfect venues for weddings, parties and special events.', buttonText: 'Explore Hotels', iconName: 'Building' },
  { id: '4', title: 'Property Support', description: 'Get help with legal, lease agreements, and property management.', buttonText: 'Get Support', iconName: 'LifeBuoy' },
];

export const testimonials: Testimonial[] = [
  { id: '1', quote: 'I found my dream apartment in Colombo within a day! Highly recommended platform for rentals.', author: 'Nimesh Perera', location: 'Colombo', stars: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60' }
];

export const popularLocations: PopularLocation[] = [
  { id: '1', name: 'Colombo', count: '5,288 Properties', image: 'https://plus.unsplash.com/premium_photo-1697730489433-4a5fe8a77f96?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', name: 'Kandy', count: '1,562 Properties', image: 'https://images.unsplash.com/photo-1708694648935-eeafaa7fd1ef?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', name: 'Galle', count: '1,248 Properties', image: 'https://images.unsplash.com/photo-1509982724584-2ce0d4366d8b?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '4', name: 'Negombo', count: '1,023 Properties', image: 'https://images.unsplash.com/photo-1460627390041-532a28402358?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '5', name: 'Nugegoda', count: '1,354 Properties', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&auto=format&fit=crop&q=60' },
  { id: '6', name: 'Malabe', count: '1,102 Properties', image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&auto=format&fit=crop&q=60' },
];