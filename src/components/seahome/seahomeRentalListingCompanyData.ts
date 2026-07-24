export type ListingCompanyStaffMember = {
  id: string;
  name: string;
  photoUrl: string;
};

export type ListingCompanyRentLink = {
  id: string;
  label: string;
};

export type ListingCompanyShopFaqItem = {
  id: string;
  question: string;
};

export type PropertyListingCompanyProfile = {
  branchName: string;
  tagline: string;
  badges: string[];
  storePhotoUrl: string;
  staff: ListingCompanyStaffMember[];
  postalCode: string;
  address: string;
  access: string;
  businessHours: string;
  closedDay: string;
  features: string[];
  associations: string[];
  licenseNumber: string;
  phone: string;
  fax: string;
  rentLinks: ListingCompanyRentLink[];
  shopFaq: ListingCompanyShopFaqItem[];
};

export const DEMO_LISTING_COMPANY_FAQ: ListingCompanyShopFaqItem[] = [
  {
    id: 'faq-1',
    question:
      'This is my first time living on my own and I am not sure where to start. What should I do?',
  },
  {
    id: 'faq-2',
    question: 'Can you help me keep initial move-in costs as low as possible?',
  },
  {
    id: 'faq-3',
    question: 'Do you accept installment or credit-card payment for initial costs?',
  },
  {
    id: 'faq-4',
    question:
      'Can new students, vocational students, or people starting their first job still rent a place?',
  },
  {
    id: 'faq-5',
    question: 'I do not have a joint guarantor. Can I still rent an apartment?',
  },
];

export const DEMO_LISTING_COMPANY_RENT_LINKS: ListingCompanyRentLink[] = [
  { id: 'rent-all', label: 'Apartments, mansions & detached homes' },
];

const TEAM_PHOTO =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80';
const STAFF_1 =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80';
const STAFF_2 =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80';
const STAFF_3 =
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80';
const STAFF_4 =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80';
const STAFF_5 =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80';

export const DEMO_LISTING_COMPANY: PropertyListingCompanyProfile = {
  branchName: 'Seahome Real Estate · Chiba branch',
  tagline: 'Find your next home with Seahome Chiba — we search with you.',
  badges: ['Online consultation available', 'Established 10+ years'],
  storePhotoUrl: TEAM_PHOTO,
  staff: [
    { id: 's1', name: 'Yuki Tanaka', photoUrl: STAFF_1 },
    { id: 's2', name: 'Ryohei Horikoshi', photoUrl: STAFF_2 },
    { id: 's3', name: 'Mika Suzuki', photoUrl: STAFF_3 },
    { id: 's4', name: 'Ken Watanabe', photoUrl: STAFF_4 },
    { id: 's5', name: 'Aya Kobayashi', photoUrl: STAFF_5 },
  ],
  postalCode: '260-0015',
  address: 'Fujimi Building 4F, 2-7-15 Fujimi, Chuo-ku, Chiba City, Chiba',
  access: 'JR Sobu Line · Chiba Station · 4 min walk',
  businessHours: '10:00–18:00',
  closedDay: 'Wednesdays',
  features: [
    'Open weekends (Sat & Sun)',
    'Within 3 min walk from station',
    'Email inquiries welcome',
    'Female & male staff available',
    '24-hour building management support',
    'No-guarantor options available',
    'Corporate leases accepted',
    'Moving company referrals',
    'Sublease consultation',
    'Support for single-parent households',
    'Renovation consultation',
  ],
  associations: [
    '(Public) Japan Real Estate Transaction Association',
    '(Public) National Federation of Real Estate Transaction Associations',
  ],
  licenseNumber: 'Minister of Land, Infrastructure, Transport and Tourism (1) No. 10245',
  phone: '043-382-3665',
  fax: '043-382-3667',
  rentLinks: DEMO_LISTING_COMPANY_RENT_LINKS,
  shopFaq: DEMO_LISTING_COMPANY_FAQ,
};
