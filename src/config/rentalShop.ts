export const rentalShopData = {
  searchConditions: [
    {
      title: "Store layout and parking space",
      options: ["1st floor", "2nd floor or higher", "Basement", "With parking"]
    },
    {
      title: "Age of building and Structure",
      options: ["Within 3 years", "Within 5 years", "Within 10 years", "Reinforced concrete", "Steel frame", "Wood"]
    },
    {
      title: "Facilities and environment",
      options: ["Air conditioning", "Elevator", "Auto-lock", "Separate toilet/bath", "System kitchen"]
    },
    {
      title: "Contract conditions",
      options: ["No key money", "No deposit", "Free rent available", "Pet allowed"]
    }
  ],
  regions: [
    {
      name: "Hokkaido / Tohoku",
      prefectures: ["Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima"]
    },
    {
      name: "Kanto",
      prefectures: ["Tokyo", "Kanagawa", "Saitama", "Chiba", "Ibaraki", "Tochigi", "Gunma"]
    },
    {
      name: "Hokuriku / Koshinetsu",
      prefectures: ["Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano"]
    },
    {
      name: "Tokai",
      prefectures: ["Gifu", "Shizuoka", "Aichi", "Mie"]
    },
    {
      name: "Kansai",
      prefectures: ["Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama"]
    }
  ],
  popularOutlets: [
    { id: 1, name: "Downtown Office Spaces", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Retail Storefronts", img: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Cafe & Restaurant", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Warehouse & Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Clinic Spaces", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Beauty Salon", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Pop-up Shops", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Shared Office", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80" },
  ],
  featuredProperties: [
    { id: 1, title: "Modern Corner Office", location: "Shibuya-ku, Tokyo", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "Street Level Retail", location: "Shinjuku-ku, Tokyo", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
    { id: 3, title: "Cozy Cafe Space", location: "Setagaya-ku, Tokyo", img: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "Spacious Warehouse", location: "Minato-ku, Tokyo", img: "https://images.unsplash.com/photo-1587293852726-59cb2f794109?auto=format&fit=crop&w=400&q=80" },
    { id: 5, title: "Studio Space", location: "Meguro-ku, Tokyo", img: "https://images.unsplash.com/photo-1598928506311-c55dd58c2d28?auto=format&fit=crop&w=400&q=80" }
  ],
  usefulGuides: [
    { id: 1, title: "How to choose the perfect retail space", desc: "A comprehensive guide on evaluating foot traffic and storefront visibility.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Understanding commercial lease terms", desc: "Breakdown of complex jargon and what to look out for in your contract.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Setting up a cafe: The initial costs", desc: "Calculate your budget accurately before signing the lease on a food property.", img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Interior design tips for small offices", desc: "Maximize your rented space with these clever layout tricks.", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80" }
  ]
};


export interface BusinessCategory {
  id: string;
  title: string;
  items?: string[];
}

export const businessCategories = {
  beautyAndMedical: {
    id: "beauty_medical",
    title: "Beauty, medical care, and nursing care",
    items: [
      "Hair salons and barbershops",
      "Beauty salon",
      "Other salons",
      "Massage and chiropractic clinics",
      "Dentistry",
      "Hospitals and Clinics",
      "Beauty, medical care, nursing care, and other fields"
    ]
  },
  heavyDining: {
    id: "heavy_dining",
    title: "Heavy eating and drinking",
    items: [
      "Ramen and Chinese food",
      "Korean BBQ and Korean Cuisine",
      "Curry and international cuisine",
      "Japanese food and sushi",
      "Udon and Soba",
      "Yakitori",
      "Teppanyaki and Okonomiyaki",
      "Western-style restaurants",
      "Izakaya (Japanese pub) / Dining bar",
      "Bakery and cake shop",
      "Takeout and delivery"
    ]
  },
  lightDiningRow: [
    { id: "light_food", title: "Light food and drinks (cafes, coffee shops, etc.)" },
    { id: "bars_clubs", title: "Bars, clubs, snack bars, etc." },
    { id: "other_restaurants", title: "Other restaurants" }
  ],
  retail: {
    id: "retail_sales",
    title: "Retail and merchandise sales",
    items: [
      "Fashion and accessories",
      "Convenience store / Drugstore",
      "Supermarket",
      "Retail and other goods"
    ]
  },
  amusement: {
    id: "amusement_section",
    title: "Amusement",
    items: [
      "Games and Pachinko",
      "Karaoke",
      "Internet cafes / manga cafes",
      "Studio Hall",
      "Amusement and other"
    ]
  },
  otherServicesRow: [
    { id: "cram_schools", title: "Cram schools and tutoring centers" },
    { id: "others_misc", title: "Others" }
  ],

  searchConditions: [
    {
      title: "Store layout and parking space",
      options: ["1st floor", "2nd floor or higher", "Basement", "With parking"]
    },
    {
      title: "Age of building and Structure",
      options: ["Within 3 years", "Within 5 years", "Within 10 years", "Reinforced concrete", "Steel frame", "Wood"]
    },
    {
      title: "Facilities and environment",
      options: ["Air conditioning", "Elevator", "Auto-lock", "Separate toilet/bath", "System kitchen"]
    },
    {
      title: "Contract conditions",
      options: ["No key money", "No deposit", "Free rent available", "Pet allowed"]
    }
  ],
  regions: [
    {
      name: "Hokkaido / Tohoku",
      prefectures: ["Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima"]
    },
    {
      name: "Kanto",
      prefectures: ["Tokyo", "Kanagawa", "Saitama", "Chiba", "Ibaraki", "Tochigi", "Gunma"]
    },
    {
      name: "Hokuriku / Koshinetsu",
      prefectures: ["Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano"]
    },
    {
      name: "Tokai",
      prefectures: ["Gifu", "Shizuoka", "Aichi", "Mie"]
    },
    {
      name: "Kansai",
      prefectures: ["Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama"]
    }
  ],
  popularOutlets: [
    { id: 1, name: "Downtown Office Spaces", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Retail Storefronts", img: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Cafe & Restaurant", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Warehouse & Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Clinic Spaces", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Beauty Salon", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Pop-up Shops", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Shared Office", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80" }
  ],
  featuredProperties: [
    { id: 1, title: "Modern Corner Office", location: "Shibuya-ku, Tokyo", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "Street Level Retail", location: "Shinjuku-ku, Tokyo", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
    { id: 3, title: "Cozy Cafe Space", location: "Setagaya-ku, Tokyo", img: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "Spacious Warehouse", location: "Minato-ku, Tokyo", img: "https://images.unsplash.com/photo-1587293852726-59cb2f794109?auto=format&fit=crop&w=400&q=80" },
    { id: 5, title: "Studio Space", location: "Meguro-ku, Tokyo", img: "https://images.unsplash.com/photo-1598928506311-c55dd58c2d28?auto=format&fit=crop&w=400&q=80" }
  ],
  usefulGuides: [
    { id: 1, title: "How to choose the perfect retail space", desc: "A comprehensive guide on evaluating foot traffic and storefront visibility.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Understanding commercial lease terms", desc: "Breakdown of complex jargon and what to look out for in your contract.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Setting up a cafe: The initial costs", desc: "Calculate your budget accurately before signing the lease on a food property.", img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Interior design tips for small offices", desc: "Maximize your rented space with these clever layout tricks.", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80" }
  ]
};

export interface CriteriaGroup {
  id: string;
  title: string;
  items: string[];
}

export const specificCriteriaData: CriteriaGroup[] = [
  {
    id: "situation",
    title: "situation",
    items: [
      "Existing fixtures and fittings",
      "skeleton",
      "Transfer of fixtures and fittings free of charge",
      "Open house available"
    ]
  },
  {
    id: "exterior",
    title: "Exterior and facilities",
    items: [
      "Sign installation space available",
      "With shutter",
      "Ceiling height 3m or more",
      "Glass front",
      "Exterior renovation consultation"
    ]
  },
  {
    id: "interior",
    title: "Interior and facilities",
    items: [
      "Air conditioning and heating available",
      "Ventilation available",
      "Equipped with smoke exhaust system",
      "Grease trap available",
      "Kitchen waterproofing",
      "Drainage facilities available",
      "Soundproofing is available",
      "Men's and women's restrooms",
      "elevator",
      "Hot water supply",
      "Water meter diameter 25mm or larger"
    ]
  },
  {
    id: "location",
    title: "Location",
    items: [
      "Station-front location",
      "shopping street",
      "downtown area",
      "Station or station building",
      "roadside",
      "roadside store",
      "Corner lot",
      "2nd floor or higher",
      "top floor",
      "1st floor",
      "Basement"
    ]
  },
  {
    id: "conditions",
    title: "conditions",
    items: [
      "No obligation to restore to original condition",
      "Available for immediate pickup",
      "Free rent",
      "15 tsubo or less"
    ]
  },
  {
    id: "features",
    title: "Features",
    items: [
      "Designers",
      "playable",
      "Open late at night",
      "Restaurants available",
      "Available 24 hours"
    ]
  },
  {
    id: "parking",
    title: "parking",
    items: [
      "Multiple parking spaces available",
      "Parking (including nearby parking)"
    ]
  },
  {
    id: "security",
    title: "security",
    items: [
      "Security glass",
      "Electric shutter",
      "24-hour security",
      "Security cameras"
    ]
  },
  
];

export interface ShoppingDistrict {
  id: number;
  region: string;
  name: string;
  img: string;
}

export interface NewPropertyListing {
  id: number;
  type: string;
  title: string;
  price: string;
  area: string;
  img: string;
}

export const shoppingDistricts: ShoppingDistrict[] = [
  {
    id: 1,
    region: "Sapporo",
    name: "Susukino",
    img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    region: "Tokyo",
    name: "Ameya Yokocho",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    region: "Harajuku, Tokyo",
    name: "Takeshita Street",
    img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    region: "Osaka",
    name: "Kita",
    img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    region: "Osaka",
    name: "Minami",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    region: "Osaka",
    name: "New World",
    img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    region: "Kyoto",
    name: "Shijo Kawaramachi / Gion",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    region: "Fukuoka Tenjin",
    name: "Unfilial Street",
    img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    region: "Kagoshima",
    name: "Astronomical Museum",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    region: "Okinawa Naha",
    name: "Kokusai Street",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80"
  }
];

export const whatsNewProperties: NewPropertyListing[] = [
  {
    id: 1,
    type: "Shops and offices for rent",
    title: "7-minute walk from Ryogoku Station",
    price: "100,000 yen",
    area: "21.05 m²",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    type: "Shops and offices for rent",
    title: "Daishin 1-chome, Koriyama City",
    price: "77,000 yen",
    area: "49.68 m²",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    type: "Shops and offices for rent",
    title: "19-minute walk from Keisei Tsudanuma Station",
    price: "203,500 yen",
    area: "74.52 m²",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    type: "Shops and offices for rent",
    title: "8-chome, Musashigaoka, Kita-ku, Kumamoto City",
    price: "181,500 yen",
    area: "63.83 m²",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    type: "Shops and offices for rent",
    title: "8-minute walk from Sannomiya-Hanadokeimae Station",
    price: "1,045,000 yen",
    area: "190.23 m²",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    type: "Shops and offices for rent",
    title: "3-minute walk from Shibuya Station",
    price: "450,000 yen",
    area: "82.10 m²",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
  }
];

