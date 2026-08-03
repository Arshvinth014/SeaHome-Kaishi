export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  badge: 'FEATURED' | 'NEW' | 'HOT DEAL' | '';
  discount?: string;
  type: string;
  specs: { beds?: number; baths?: number; size: string };
  agency: { name: string; rating: number };
  image: string;
}

export interface FilterItem {
  label: string;
  count: string;
}

export const POPULAR_SEARCHES: string[] = [
  'Luxury Apartments', 
  'Beachfront Property', 
  'Villas', 
  'Houses', 
  'Land', 
  'Commercial Properties'
];

export const PROPERTY_TYPES_MOCK: FilterItem[] = [
  { label: 'Apartment', count: '4,256' },
  { label: 'House', count: '2,984' },
  { label: 'Villa', count: '1,876' },
  { label: 'Land', count: '2,153' },
  { label: 'Commercial', count: '1,045' },
];

export const MORE_FEATURES_MOCK: FilterItem[] = [
  { label: 'Sea View', count: '2,345' },
  { label: 'Swimming Pool', count: '3,124' },
  { label: 'Furnished', count: '2,015' },
  { label: 'Parking', count: '3,893' },
  { label: 'New Build', count: '1,562' },
  { label: 'Gated Community', count: '2,431' },
];

export const TESTIMONIALS_MOCK = [
  { name: 'Michael T.', origin: 'Investor, Australia', quote: 'SeaHomeNet made investing in Sri Lanka so easy. The team was professional and the returns have been excellent!' },
  { name: 'Priya S.', origin: 'Investor, Singapore', quote: 'Found a great villa in Galle through SeaHomeNet. The process was smooth, secure, and transparent throughout.' },
  { name: 'James L.', origin: 'Investor, UK', quote: 'Highly recommended platform for anyone looking to enter the Sri Lankan real estate market with full confidence.' }
];

export const AGENCIES_MOCK: string[] = [
  'LankaPropertyWeb', 
  'ACQUEST', 
  'John Keells', 
  'RE/MAX Sri Lanka', 
  'CENTURY 21', 
  'CBRE Sri Lanka'
];

export const PROPERTIES_DATA: Property[] = [
  {
    id: 1,
    title: "Skyline Residences",
    location: "Tokyo, Japan",
    price: "$850,000 USD",
    badge: "FEATURED",
    type: "Apartment",
    specs: { beds: 2, baths: 2, size: "1,200 sqft" },
    agency: { name: "Tokyo Real Estate Co.", rating: 4.8 },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Sea View Villa",
    location: "Galle, Sri Lanka",
    price: "$1,250,000 USD",
    badge: "NEW",
    type: "Villa",
    specs: { beds: 4, baths: 4, size: "3,500 sqft" },
    agency: { name: "Lanka Property Web (Pvt) Ltd", rating: 4.9 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Modern Family Home",
    location: "Osaka, Japan",
    price: "$720,000 USD",
    badge: "HOT DEAL",
    discount: "-15%",
    type: "House",
    specs: { beds: 3, baths: 2, size: "1,800 sqft" },
    agency: { name: "Osaka Real Estate", rating: 4.7 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Beachfront Land",
    location: "Matara, Sri Lanka",
    price: "$650,000 USD",
    badge: "",
    type: "Land",
    specs: { size: "2.5 Acres" },
    agency: { name: "Lanka Lands & Investments", rating: 4.6 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Prime Commercial Tower",
    location: "Colombo, Sri Lanka",
    price: "$3,500,000 USD",
    badge: "",
    type: "Commercial",
    specs: { size: "20,000 sqft" },
    agency: { name: "Commercial Hub Sri Lanka", rating: 4.8 },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Luxury Apartment",
    location: "Dubai, UAE",
    price: "$620,000 USD",
    badge: "",
    type: "Apartment",
    specs: { beds: 2, baths: 2, size: "1,150 sqft" },
    agency: { name: "Dubai Premium Properties", rating: 4.7 },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
  }
];