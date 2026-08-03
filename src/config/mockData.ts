export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  specs: string[];
  type: string;
  tag?: string;
  image: string;
}

export interface CountryItem {
  id: string;
  name: string;
  count: string;
  flag: string;
  image: string;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  location: string;
  roi: string;
  minInvestment: string;
  image: string;
}

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'f-1',
    title: 'Skyline Residences',
    location: 'Tokyo, Japan',
    price: '$850,000 USD',
    specs: ['2 Beds', '2 Baths', '1,200 sqft'],
    type: 'Luxury Apartment',
    tag: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-2',
    title: 'Sea View Villa',
    location: 'Galle, Sri Lanka',
    price: '$1,250,000 USD',
    specs: ['4 Beds', '4 Baths', '3,500 sqft'],
    type: 'House',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-3',
    title: 'Commercial Tower',
    location: 'Colombo, Sri Lanka',
    price: '$3,500,000 USD',
    specs: ['20,000 sqft'],
    type: 'Property for Business',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-4',
    title: 'Oceanfront Land',
    location: 'Matara, Sri Lanka',
    price: '$650,000 USD',
    specs: ['2.5 Acres'],
    type: 'Land',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-5',
    title: 'Modern Home',
    location: 'Osaka, Japan',
    price: '$720,000 USD',
    specs: ['3 Beds', '2 Baths', '1,800 sqft'],
    type: 'House',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-6',
    title: 'Urban Heights',
    location: 'Tokyo, Japan',
    price: '$1,100,000 USD',
    specs: ['3 Beds', '2 Baths', '1,300 sqft'],
    type: 'Luxury Apartment',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80'
  }
];

export const COUNTRIES: CountryItem[] = [
  { id: 'c-1', name: 'Sri Lanka', count: '2,456 Properties', flag: '🇱🇰', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&auto=format&fit=crop&q=80' },
  { id: 'c-2', name: 'Japan', count: '3,892 Properties', flag: '🇯🇵', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80' },
  { id: 'c-3', name: 'All Countries', count: '12,540+ Properties', flag: '🌐', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80' }
];

export const METRICS = [
  { value: '12,540+', label: 'Properties Worldwide', icon: '🌐' },
  { value: '2,350+', label: 'Verified Agencies', icon: '👥' },
  { value: '85+', label: 'Countries Covered', icon: '🔍' },
  { value: '25K+', label: 'Happy Investors', icon: '✨' },
  { value: '$2.5B+', label: 'Property Value Traded', icon: '🏢' }
];

export const INVESTMENT_OPPS: InvestmentOpportunity[] = [
  { id: 'i-1', title: 'Resort Development Land', location: 'Matara, Sri Lanka', roi: '18%', minInvestment: '$100,000 USD', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=80' },
  { id: 'i-2', title: 'Tokyo Rental Apartments', location: 'Shinjuku, Japan', roi: '12%', minInvestment: '$150,000 USD', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=80' },
  { id: 'i-3', title: 'Mixed Use Commercial', location: 'Colombo, Sri Lanka', roi: '16%', minInvestment: '$200,000 USD', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80' },
  { id: 'i-4', title: 'Luxury Villa Project', location: 'Galle, Sri Lanka', roi: '20%', minInvestment: '$250,000 USD', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=80' }
];

export const TIMELINE_STEPS = [
  { step: '1', title: 'Search', desc: 'Find properties or investment opportunities.' },
  { step: '2', title: 'Connect', desc: 'Contact verified agencies or list your property.' },
  { step: '3', title: 'Visit & Decide', desc: 'Schedule a visit or get a virtual tour.' },
  { step: '4', title: 'Secure Deal', desc: 'Negotiate and close deals securely.' },
  { step: '5', title: 'Invest & Grow', desc: 'Enjoy returns on your real estate investment.' }
];

export const TRUST_PARTNERS = [
  { name: 'CENTURY 21', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Century_21_logo.svg' },
  { name: 'ERA REAL ESTATE', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/ERA_Real_Estate_logo.svg' },
  { name: 'LankaPropertyWeb', logo: '' },
  { name: "Sotheby's INTERNATIONAL REALTY", logo: '' },
  { name: 'COLDWELL BANKER', logo: '' },
  { name: 'RE/MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/REMAX_logo.svg' }
];

