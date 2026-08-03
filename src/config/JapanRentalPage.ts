export interface PropertyCard {
  id: string;
  type: 'Apartment' | 'House' | 'Condo' | 'Land';
  title: string;
  location: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  image: string;
}

export interface InvestmentProject {
  id: string;
  tag: string;
  title: string;
  location: string;
  expectedRoi: string;
  minInvestment: string;
  image: string;
}

export interface LocationCard {
  id: string;
  name: string;
  description: string;
  avgPrice: string;
  image: string;
}

export interface MarketStat {
  id: string;
  label: string;
  value: string;
  subtext: string;
}

export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface AgencyPartner {
  id: string;
  name: string;
  logoText: string;
}

export const FEATURED_PROPERTIES: PropertyCard[] = [
  {
    id: 'prop-1',
    type: 'Apartment',
    title: 'Luxury Apartment',
    location: 'Tokyo, Shibuya',
    price: '¥120,000,000',
    beds: '2 Beds',
    baths: '2 Baths',
    area: '65 m²',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'prop-2',
    type: 'House',
    title: 'Modern House',
    location: 'Kanagawa, Yokohama',
    price: '¥98,000,000',
    beds: '4 Beds',
    baths: '2 Baths',
    area: '120 m²',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'prop-3',
    type: 'Condo',
    title: 'Osaka Bay Tower',
    location: 'Osaka, Osaka City',
    price: '¥85,000,000',
    beds: '2 Beds',
    baths: '2 Baths',
    area: '70 m²',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'prop-4',
    type: 'Apartment',
    title: 'Kyoto Machiya House',
    location: 'Kyoto, Kyoto City',
    price: '¥68,000,000',
    beds: '3 Beds',
    baths: '1 Bath',
    area: '90 m²',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'prop-5',
    type: 'Land',
    title: 'Land for Sale',
    location: 'Hokkaido, Sapporo',
    price: '¥45,000,000',
    beds: '—',
    baths: '—',
    area: '500 m²',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'prop-6',
    type: 'Apartment',
    title: 'Fukuoka City View',
    location: 'Fukuoka, Fukuoka City',
    price: '¥75,000,000',
    beds: '2 Beds',
    baths: '1 Bath',
    area: '60 m²',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
  },
];

export const INVESTMENT_PROJECTS: InvestmentProject[] = [
  {
    id: 'proj-1',
    tag: 'Apartment',
    title: 'Tokyo Bay Area Development',
    location: 'Tokyo',
    expectedRoi: '6% - 9%',
    minInvestment: '¥5,000,000',
    image: 'https://plus.unsplash.com/premium_photo-1661877991606-9ff3119acc60?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'proj-2',
    tag: 'Condominium',
    title: 'Osaka Smart City Project',
    location: 'Osaka',
    expectedRoi: '7% - 10%',
    minInvestment: '¥3,000,000',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'proj-3',
    tag: 'Resort Hotel',
    title: 'Hokkaido Ski Resort',
    location: 'Hokkaido',
    expectedRoi: '8% - 11%',
    minInvestment: '¥4,000,000',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'proj-4',
    tag: 'Commercial',
    title: 'Fukuoka Business Hub',
    location: 'Fukuoka',
    expectedRoi: '6% - 9%',
    minInvestment: '¥3,500,000',
    image: 'https://images.unsplash.com/photo-1605088298038-2876387a80c1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'proj-5',
    tag: 'Hospitality',
    title: 'Kyoto Heritage Hotel Project',
    location: 'Kyoto',
    expectedRoi: '7% - 10%',
    minInvestment: '¥4,500,000',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
  },
];

export const TOP_LOCATIONS: LocationCard[] = [
  {
    id: 'loc-1',
    name: 'Tokyo',
    description: "Japan's Capital & Economic Hub",
    avgPrice: '¥12.5M+',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'loc-2',
    name: 'Osaka',
    description: 'Commercial & Entertainment Center',
    avgPrice: '¥8.2M+',
    image: 'https://images.unsplash.com/photo-1560291544-515e5417bddb?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'loc-3',
    name: 'Yokohama',
    description: 'Port City with Great Connectivity',
    avgPrice: '¥7.8M+',
    image: 'https://images.unsplash.com/photo-1560076590-a54bc1da69cd?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'loc-4',
    name: 'Kyoto',
    description: 'Traditional Beauty & Tourist Favorite',
    avgPrice: '¥6.5M+',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'loc-5',
    name: 'Sapporo',
    description: 'Nature, Snow & Lifestyle',
    avgPrice: '¥5.5M+',
    image: 'https://images.unsplash.com/photo-1572420780547-8fbb45c82f0a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'loc-6',
    name: 'Fukuoka',
    description: 'Growing Business & Tech Hub',
    avgPrice: '¥6.6M+',
    image: 'https://plus.unsplash.com/premium_photo-1724593825200-39731dcdacf8?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const MARKET_STATS: MarketStat[] = [
  { id: 'stat-1', label: 'Avg. Rental Yield', value: '4.2%', subtext: '(2024)' },
  { id: 'stat-2', label: 'Price Growth', value: '2.8%', subtext: '(YoY)' },
  { id: 'stat-3', label: 'Foreign Investment', value: '¥2.5T+', subtext: '(2024)' },
  { id: 'stat-4', label: 'Overseas Visitors', value: '1.5M+', subtext: '(2024)' },
];

export const CORE_VALUES: CoreValueItem[] = [
  { id: 'val-1', title: 'Local Market Expertise', description: 'In-depth knowledge of the Japanese real estate market.', iconName: 'Compass' },
  { id: 'val-2', title: 'Verified Properties', description: 'All listings are verified for your safety.', iconName: 'ShieldCheck' },
  { id: 'val-3', title: 'End-to-End Support', description: 'From search to purchase, we handle it all.', iconName: 'Users' },
  { id: 'val-4', title: 'Legal Assistance', description: 'Guidance on laws & procedures.', iconName: 'FileText' },
  { id: 'val-5', title: 'High ROI Potential', description: 'Attractive returns in major growth areas.', iconName: 'TrendingUp' },
  { id: 'val-6', title: 'Secure & Transparent', description: 'Safe transactions with full transparency.', iconName: 'Lock' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'SeaHomeNet made my property investment in Tokyo smooth and secure. Their team is professional and very supportive.',
    name: 'David R.',
    role: 'Investor, USA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Great platform with verified listings and excellent customer service. I found a perfect apartment in Osaka!',
    name: 'Maria S.',
    role: 'Investor, Singapore',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'Highly recommended for anyone looking to invest in Japan. Transparent, reliable, and trustworthy.',
    name: 'James T.',
    role: 'Investor, Australia',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    rating: 5,
  },
];

export const AGENCY_PARTNERS: AgencyPartner[] = [
  { id: 'partner-1', name: 'HOMES JAPAN', logoText: 'HOMES JAPAN' },
  { id: 'partner-2', name: 'CENTURY 21 Japan', logoText: 'CENTURY 21' },
  { id: 'partner-3', name: 'DAIKKYO 大京グループ', logoText: 'DAIKKYO' },
  { id: 'partner-4', name: 'MITSUI FUDOSAN 三井不動産レジデンシャル', logoText: 'MITSUI FUDOSAN' },
  { id: 'partner-5', name: 'Sumitomo Realty & Development', logoText: 'Sumitomo Realty' },
  { id: 'partner-6', name: "List Sotheby's International Realty", logoText: "Sotheby's" },
];