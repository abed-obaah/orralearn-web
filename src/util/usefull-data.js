
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'


export  const navLinks =[
    {title:"Home",path:"/"},
    {title:"Pricing",path:"/pricing"},
    {title:"FAQs",path:"/faqs"},
    {title:"About Us",path:"/about"},
    {title:"Contact Us",path:"/contact"},
]
export const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]
  export const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ]
  export const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

export const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
export const tiers = [
    {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: '$3.99', annually: '$144' },
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        mostPopular: false,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        price: { monthly: '$7.99', annually: '$288' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '$12.99', annually: '$576' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
            'Custom reporting tools',
        ],
        mostPopular: false,
    },
]
export  const faqs = [
    {
        question: "Is learning on Orralearn completely free?",
        answer: "Yes, the core learning paths on Orralearn are absolutely free. You can access curated YouTube tutorials and engage with the community without any charge. We believe in democratizing education, particularly coding skills, which is why our primary content will always be free."
    },
    {
        question: "What's included in the free tier?",
        answer: "The free tier includes access to all curated YouTube tutorials, community interactions, and basic mentorship guidance. You also get limited access to AI-powered programming help."
    },
    {
        question: "Do you offer any premium services?",
        answer: "While the basic features are free, we offer a premium subscription that provides perks like 24/7 mentorship, priority access to new courses, and unlimited use of our AI-powered programming assistant."
    },
    {
        question: "How much does the premium subscription cost?",
        answer: "Our premium subscription is priced to be affordable, considering the range of features it offers. For the most current pricing information, please visit our Pricing page."
    },
    {
        question: "Are there any student discounts?",
        answer: "Yes, we offer student discounts to make our premium services even more accessible. Verification is straightforward through your educational institution's email."
    },
    {
        question: "Do you offer any group or enterprise plans?",
        answer: "Absolutely. We offer discounted rates for educational institutions and enterprises looking to upscale their team's coding skills. Please contact our sales team for more details."
    },
    {
        question: "How do payments work? Are they secure?",
        answer: "We use a secure and trusted payment gateway for all transactions. You can pay using various methods including credit cards and mobile payments, specific to some African countries."
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee on our premium subscription. If you're not satisfied with our services within the first 30 days, we will refund you in full, no questions asked."
    }
];

export const testimonials = [
    {text:"OrraLearn has been a game-changer in my life. As a full-time mom, it's often challenging to find time for personal pursuits. ",name:"Stephanie Powell",tag:"Coding Enthusiast"},
    {text:"Orralearn is a coding gem! I’ve been exploring various online coding platforms, but Orralearn’s approach stands out.",name:"Mark Thompson",tag:"Software Developer"},
    {text:"One of the standout feature of orralearn is its code editor. Its simply Fantastic! As someone who struggled with coding initially.",name:"Christopher White",tag:"Software Engineer"},
    {text:"Orralearn is a coding gem! I’ve been exploring various online coding platforms, but Orralearn’s approach stands out.",name:"Mark Thompson",tag:"Software Developer"},
]

