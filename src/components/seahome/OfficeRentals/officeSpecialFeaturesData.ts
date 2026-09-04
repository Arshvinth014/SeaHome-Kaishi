import {
    MessageSquare,
    Building,
    Car,
    Zap,
    Briefcase,
    ShieldCheck,
    User,
    Users,
    Building2,
    Tag,
    Gift,
    JapaneseYen,
    Coins,
    CircleDollarSign,
    Footprints,
    Train,
    type LucideIcon,
} from 'lucide-react';

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    badge?: string;
    icon: LucideIcon;
    link: string;
}

export interface FeatureSection {
    id: string;
    title: string;
    items: FeatureItem[];
    hasSeeMore?: boolean;
    extraItems?: FeatureItem[];
}

export const OFFICE_SPECIAL_FEATURES_DATA: FeatureSection[] = [
    {
        id: 'criteria',
        title: 'Search by criteria',
        hasSeeMore: true,
        items: [
            {
                id: 'criteria-1',
                title: 'Offices with recommended comments (workplaces) featured',
                description: "Real estate companies showcase the appeal of their offices! We've gathered offices with recommended comments.",
                imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
                badge: 'Recommended',
                icon: MessageSquare,
                link: '/seahome-real-estates/rental-office/theme/criteria-1',
            },
            {
                id: 'criteria-2',
                title: 'Special Feature: Ground Floor Office Space for Rent',
                description: "Perfect for offices with many visitors! It also saves time as there's no elevator waiting time.",
                imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
                badge: 'Ground Floor',
                icon: Building,
                link: '/seahome-real-estates/rental-office/theme/criteria-2',
            },
            {
                id: 'criteria-3',
                title: 'Properties with parking (including nearby)',
                description: 'Find an office property with or near parking to improve your work efficiency!',
                imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=400&q=80',
                badge: 'Parking',
                icon: Car,
                link: '/seahome-real-estates/rental-office/theme/criteria-3',
            },
            {
                id: 'criteria-4',
                title: 'Special Feature: Office Spaces Available for Immediate Occupancy',
                description: 'Reduce your interior design costs. A special feature on ready-to-use offices, perfect for startups.',
                imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
                badge: 'Ready to Use',
                icon: Zap,
                link: '/seahome-real-estates/rental-office/theme/criteria-4',
            },
        ],
        extraItems: [
            {
                id: 'criteria-5',
                title: 'Special Feature: Fully Furnished Executive Office Suites',
                description: 'Complete with ergonomic desks, executive chairs, and high-speed fiber connectivity for hassle-free setups.',
                imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80',
                badge: 'Furnished',
                icon: Briefcase,
                link: '/seahome-real-estates/rental-office/theme/criteria-5',
            },
            {
                id: 'criteria-6',
                title: '24-Hour Access & High Security Office Spaces',
                description: 'Ideal for tech teams, night shifts, and global businesses requiring round-the-clock entry.',
                imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
                badge: '24/7 Security',
                icon: ShieldCheck,
                link: '/seahome-real-estates/rental-office/theme/criteria-6',
            },
        ],
    },
    {
        id: 'size',
        title: 'Search by size',
        items: [
            {
                id: 'size-1',
                title: 'Special Feature: Small Offices (Business Spaces) Under 10 Square Meters',
                description: 'Perfect for freelancers and sole proprietors! We introduce small office spaces with a usable area (in tsubo) of 10 tsubo or less.',
                imageUrl: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=400&q=80',
                badge: '< 10 tsubo',
                icon: User,
                link: '/seahome-real-estates/rental-office/theme/size-1',
            },
            {
                id: 'size-2',
                title: 'Special Feature: Small Offices (Business Spaces) Under 20 Tsubo (approx. 66 sq m)',
                description: 'Ideal for venture companies and startups! We introduce small office spaces with a usable area (in tsubo) of 20 tsubo or less.',
                imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
                badge: '< 20 tsubo',
                icon: Users,
                link: '/seahome-real-estates/rental-office/theme/size-2',
            },
            {
                id: 'size-3',
                title: 'Special Feature: Large-Scale Office Spaces (Offices) of 300 tsubo or More',
                description: 'Ideal for large corporations! We introduce large office spaces with a usable area (in tsubo) of 300 tsubo or more.',
                imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80',
                badge: '300+ tsubo',
                icon: Building2,
                link: '/seahome-real-estates/rental-office/theme/size-3',
            },
        ],
    },
    {
        id: 'cost',
        title: 'Search by cost',
        items: [
            {
                id: 'cost-1',
                title: 'Special feature on offices with no security deposit or key money (zero/0)',
                description: 'Looking to minimize initial costs? Find an office with no security deposit or key money!',
                imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
                badge: 'Zero Deposit',
                icon: Tag,
                link: '/seahome-real-estates/rental-office/theme/cost-1',
            },
            {
                id: 'cost-2',
                title: 'Rent-free office space special feature',
                description: 'Looking to keep initial costs down? Start your business smartly with a rent-free office!',
                imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&q=80',
                badge: 'Rent Free',
                icon: Gift,
                link: '/seahome-real-estates/rental-office/theme/cost-2',
            },
            {
                id: 'cost-3',
                title: 'Special feature on offices (business premises) with rent under 50,000 yen',
                description: 'Recommended for sole proprietors and others! Featured office spaces with rent under 50,000 yen.',
                imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80',
                badge: '< ¥50,000',
                icon: JapaneseYen,
                link: '/seahome-real-estates/rental-office/theme/cost-3',
            },
            {
                id: 'cost-4',
                title: 'Special feature on offices (business premises) with rent under 100,000 yen',
                description: 'Recommended for startups and more! Featured office spaces with rent under 100,000 yen.',
                imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
                badge: '< ¥100,000',
                icon: Coins,
                link: '/seahome-real-estates/rental-office/theme/cost-4',
            },
            {
                id: 'cost-5',
                title: 'Special feature on offices (business premises) with rent under 200,000 yen',
                description: 'Looking to keep your monthly expenses down? Find a cost-effective office space!',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
                badge: '< ¥200,000',
                icon: CircleDollarSign,
                link: '/seahome-real-estates/rental-office/theme/cost-5',
            },
        ],
    },
    {
        id: 'distance',
        title: 'Search by walking distance from the station',
        items: [
            {
                id: 'distance-1',
                title: 'Offices located within a 5-minute walk from the station.',
                description: "We've gathered together offices in prime locations, all within a 5-minute walk from the nearest station!",
                imageUrl: 'https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=400&q=80',
                badge: '≤ 5 min walk',
                icon: Footprints,
                link: '/seahome-real-estates/rental-office/theme/distance-1',
            },
            {
                id: 'distance-2',
                title: 'Offices located within a 10-minute walk from the station.',
                description: "Offices located within a 10-minute walk from the nearest station! We've selected offices that will help you minimize your commute time!",
                imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=400&q=80',
                badge: '≤ 10 min walk',
                icon: Train,
                link: '/seahome-real-estates/rental-office/theme/distance-2',
            },
        ],
    },
];
