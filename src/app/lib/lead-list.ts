export interface LeadProfile {
  id: string;
  name: string;
  location: string;
  performance: string;
  personnel: string[];
  category: 'Boutique' | 'Aggregator';
  insight: string;
  stats: {
    sold?: number;
    leased?: number;
    medianPrice?: string;
    totalValue?: string;
  };
}

export const ELITE_LEADS: LeadProfile[] = [
  {
    id: '1',
    name: 'Boutique Property Agents',
    location: 'Sydney CBD, NSW',
    performance: '24 sold, 123 leased (last 12 months)',
    personnel: ['Tolga Ozer', 'Rozina'],
    category: 'Boutique',
    insight: 'Elite Sydney CBD focus. Needs high-end white-label presence to scale while maintaining personal touch.',
    stats: { sold: 24, leased: 123 }
  },
  {
    id: '2',
    name: 'Moneybags Property',
    location: 'Marsden, QLD',
    performance: '49 sold (last 12 months)',
    personnel: ['Simone Curtis', 'Amanda Johnson'],
    category: 'Boutique',
    insight: 'High-velocity sales environment. 17 days median on market. Requires automated listing generation.',
    stats: { sold: 49, medianPrice: '$1.20M AUD' }
  },
  {
    id: '3',
    name: 'Property Boutique',
    location: 'South East QLD',
    performance: '37 sold (last 12 months)',
    personnel: ['Boutique Team'],
    category: 'Boutique',
    insight: 'Diverse inventory (Houses, Apartments, Rural). Needs robust categorization engine.',
    stats: { sold: 37, totalValue: '$37.3M AUD' }
  },
  {
    id: '4',
    name: '4one4 Property Co.',
    location: 'Glenorchy, TAS',
    performance: '114 sold as lead agent',
    personnel: ['Aaron Murray'],
    category: 'Boutique',
    insight: 'Extreme high volume for a solo consultant. Desperately needs AI email summarization.',
    stats: { sold: 114, medianPrice: '$585k' }
  },
  {
    id: '5',
    name: 'GR8 EST8 Agents',
    location: 'Narre Warren, VIC',
    performance: 'Independent alternative to franchise models',
    personnel: ['Liron Selimi', 'Leo Zeneli'],
    category: 'Boutique',
    insight: 'Brand identity focused on transparency. Perfect fit for independent, elite software stack.',
    stats: {}
  },
  {
    id: '6',
    name: 'My Agent Real Estate',
    location: 'Port Melbourne, VIC',
    performance: '32 sold, 142 rented',
    personnel: ['Melbourne CBD Team'],
    category: 'Boutique',
    insight: 'Hybrid model (Rent/Sales). Receptive to advanced digital marketing PropTech.',
    stats: { sold: 32, leased: 142 }
  },
  {
    id: '7',
    name: 'Infinity Realty',
    location: 'Sydney, NSW',
    performance: '15 sold (last 12 months)',
    personnel: ['George Hou', 'Thuy Do'],
    category: 'Boutique',
    insight: 'Focus on off-the-plan projects and relationships. Needs robust CRM tracking.',
    stats: { sold: 15, medianPrice: '$675k' }
  },
  {
    id: '8',
    name: 'Koliba Real Estate',
    location: 'Adelaide, SA',
    performance: '6 sold, 54 leased',
    personnel: ['Idriz Hibeljic', 'Thanh Vong'],
    category: 'Boutique',
    insight: 'Family-owned. Needs tools to convert landlord database into active sellers.',
    stats: { sold: 6, leased: 54 }
  },
  {
    id: '9',
    name: 'Create Real Estate',
    location: 'Sunshine North, VIC',
    performance: 'Top Agent status (185 reviews)',
    personnel: ['Brenda Ngan'],
    category: 'Boutique',
    insight: 'Large international database. Requires sophisticated CRM to prevent lead leakage.',
    stats: {}
  },
  {
    id: '10',
    name: 'S & S Property and Projects',
    location: 'Blackwood, SA',
    performance: 'Quality over quantity based',
    personnel: ['Adelaide Hills Team'],
    category: 'Boutique',
    insight: 'Luxury-focused digital transformation demographic.',
    stats: {}
  },
  {
    id: '11',
    name: 'Jess Adams',
    location: 'Albany & Denmark, WA',
    performance: 'Independent Operator (@realty)',
    personnel: ['Jess Adams'],
    category: 'Aggregator',
    insight: 'Digital-first marketing focus. Prime candidate for a personal white-labeled brand to break free from network dependency.',
    stats: {}
  },
  {
    id: '12',
    name: 'Clyde Lin',
    location: 'Broadbeach, QLD',
    performance: 'High-value portfolio specialist',
    personnel: ['Clyde Lin'],
    category: 'Aggregator',
    insight: 'Experienced veteran managing luxury Gold Coast assets. Craves independent branding with zero overhead.',
    stats: { medianPrice: '$838k+' }
  },
  {
    id: '13',
    name: 'Greg Pratt',
    location: 'Central Coast, NSW',
    performance: '$58M+ sales since 2020',
    personnel: ['Greg Pratt'],
    category: 'Aggregator',
    insight: 'Highly cost-sensitive entrepreneur. Receptive to "Business-in-a-Box" solutions that offer premium value.',
    stats: { totalValue: '$58M+' }
  },
  {
    id: '14',
    name: 'Mark Ward',
    location: 'Salisbury, QLD',
    performance: '#1 Market Leader in Salisbury',
    personnel: ['Mark Ward'],
    category: 'Boutique',
    insight: 'Dominant local powerhouse. Needs enterprise-grade tools to defend market share against corporate franchises.',
    stats: {}
  },
  {
    id: '15',
    name: 'Amit Nayak',
    location: 'Parramatta, NSW',
    performance: '207 sold (last 12 months)',
    personnel: ['Amit Nayak'],
    category: 'Aggregator',
    insight: 'Powerhouse volume. Needs AI automation to replace massive admin assistant overhead.',
    stats: { sold: 207, medianPrice: '$870k' }
  }
];
