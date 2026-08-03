import { Search, BarChart3, ClipboardCheck, Handshake, FileText, BookOpen, Calculator, LineChart, Presentation, Users,
  Globe,
  Building2,
  Coins, ShieldCheck, ShieldAlert, FileCheck, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'

export interface InvestOpportunity {
  id: string;
  country: string;
  flag: string;
  propertiesCount: string;
  avgRoi: string;
  startingPrice: string;
  image: string;
}

export interface AgencyPartner {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  propertiesCount: string;
  logoText: string;
}

export interface ChartDataItem {
  year: string;
  height: string;
  projected?: boolean;
}

export interface HaruStepItem {
  num: string;
  title: string;
  hasOrangeTitle?: boolean;
  desc: string;
  icon: LucideIcon; // Store the icon component class directly
}

export interface ResourceItem {
  title: string;
  desc: string;
  actionText: string;
  icon: LucideIcon;
}

export interface CtaStatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface TrustFeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const INVESTMENT_OPPORTUNITIES: InvestOpportunity[] = [
  { id: 'io-1', country: 'Japan', flag: '🇯🇵', propertiesCount: '3,892 Properties', avgRoi: '8.7%', startingPrice: '$120,000 USD', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-2', country: 'Sri Lanka', flag: '🇱🇰', propertiesCount: '2,456 Properties', avgRoi: '9.2%', startingPrice: '$90,000 USD', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&w=600&auto=format&fit=crop&q=80' },
  { id: 'io-3', country: 'UAE', flag: '🇦🇪', propertiesCount: '5,102 Properties', avgRoi: '7.8%', startingPrice: '$200,000 USD', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-4', country: 'Thailand', flag: '🇹🇭', propertiesCount: '1,892 Properties', avgRoi: '8.1%', startingPrice: '$110,000 USD', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-5', country: 'USA', flag: '🇺🇸', propertiesCount: '12,340 Properties', avgRoi: '6.9%', startingPrice: '$250,000 USD', image: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=600&auto=format&fit=crop&q=80' }
];

export const AGENCIES: AgencyPartner[] = [
  { id: 'a-1', name: "Sotheby's Realty", country: 'Japan', flag: '🇯🇵', rating: 4.8, propertiesCount: '320+ Properties', logoText: 'List Sotheby\'s' },
  { id: 'a-2', name: 'LankaPropertyWeb', country: 'Sri Lanka', flag: '🇱🇰', rating: 4.7, propertiesCount: '380+ Properties', logoText: 'LankaPropertyWeb' },
  { id: 'a-3', name: 'ERA Real Estate', country: 'UAE', flag: '🇦🇪', rating: 4.6, propertiesCount: '450+ Properties', logoText: 'ERA' },
  { id: 'a-4', name: 'CBRE Group', country: 'USA', flag: '🇺🇸', rating: 4.8, propertiesCount: '1,250+ Properties', logoText: 'CBRE' },
  { id: 'a-5', name: 'RE/MAX Thailand', country: 'Thailand', flag: '🇹🇭', rating: 4.6, propertiesCount: '290+ Properties', logoText: 'RE/MAX' },
  { id: 'a-6', name: 'Coldwell Banker', country: 'Singapore', flag: '🇸🇬', rating: 4.7, propertiesCount: '310+ Properties', logoText: 'Coldwell Banker' }
];

export const MARKET_CHART_DATA: ChartDataItem[] = [
  { year: '2024', height: '24%' },
  { year: '2025', height: '36%' },
  { year: '2026', height: '48%' },
  { year: '2027', height: '64%' },
  { year: '2028', height: '80%' },
  { year: '2029', height: '100%', projected: true }
];

export const HARU_STEPS_DATA: HaruStepItem[] = [
  {
    num: '01',
    title: 'Share Your Goals',
    desc: 'Tell us your investment preferences and budget.',
    icon: Search
  },
  {
    num: '02',
    title: 'Finds Opportunities',
    hasOrangeTitle: true,
    desc: 'Haru researches and filters the best properties for you.',
    icon: BarChart3
  },
  {
    num: '03',
    title: 'Haru Verifies & Analyzes',
    desc: 'Haru checks documents, market value & ROI potential.',
    icon: ClipboardCheck
  },
  {
    num: '04',
    title: 'Connect with Agency',
    desc: 'Haru connects you with the right local real estate agency.',
    icon: Handshake
  },
  {
    num: '05',
    title: 'Invest with Confidence',
    desc: 'Complete the process securely with full support.',
    icon: FileText
  }
];

export const INVESTOR_RESOURCES_DATA: ResourceItem[] = [
  {
    title: 'Investment Guide',
    desc: 'Complete guide to real estate investment for beginners.',
    actionText: 'Read Guide',
    icon: BookOpen
  },
  {
    title: 'ROI Calculator',
    desc: 'Calculate potential returns for your investment.',
    actionText: 'Use Calculator',
    icon: Calculator
  },
  {
    title: 'Market Reports',
    desc: 'Latest trends and forecasts from top markets.',
    actionText: 'View Reports',
    icon: LineChart
  },
  {
    title: 'Legal & Tax Guide',
    desc: 'Understand legal processes and tax benefits.',
    actionText: 'Learn More',
    icon: FileText
  },
  {
    title: 'Webinars',
    desc: 'Join expert sessions and investment webinars.',
    actionText: 'View Schedule',
    icon: Presentation
  }
];

export const CTA_STATS_DATA: CtaStatItem[] = [
  { value: '12,540+', label: 'Happy Investors', icon: Users },
  { value: '85+', label: 'Countries Covered', icon: Globe },
  { value: '2,350+', label: 'Verified Agencies', icon: Building2 },
  { value: '$2.5B+', label: 'Invested by Our Community', icon: Coins }
];

export const TRUST_FEATURES_DATA: TrustFeatureItem[] = [
  {
    title: 'Secure & Encrypted',
    desc: 'Your data is 100% protected.',
    icon: ShieldCheck
  },
  {
    title: 'Escrow Protection',
    desc: 'Safe transactions, always.',
    icon: ShieldAlert
  },
  {
    title: 'Verified Listings',
    desc: 'Every listing is verified.',
    icon: FileCheck
  },
  {
    title: '24/7 Support',
    desc: "We're here for you anytime.",
    icon: Headphones
  }
];