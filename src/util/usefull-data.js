
import {AiOutlineHome,AiOutlineInbox, AiOutlineProject} from 'react-icons/ai'
import {CgFileDocument} from 'react-icons/cg'
import {BsBook} from 'react-icons/bs'
import {BiGroup,BiCodeAlt,BiAward,BiHelpCircle} from 'react-icons/bi'

import image1 from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

import imagePaul from '../assets/imagePaul.jpg'
import ato from '../assets/ato.png'
import lowe from '../assets/lowe.png'
import avatar from '../assets/Avatar.png'

import javascript from '../assets/jsv.png'
import HTMLBlogCover from '../assets/HTML-BlogCover.png'
import CSS from '../assets/CSS.jpg'
import python from '../assets/python3.jpg'
import vuejs from '../assets/uigradients-vuejs (1).png'
import python2 from '../assets/python3.jpg'
import reactjs from '../assets/Best-Practices (2).png'
import java from '../assets/Java-Logo-PNGs.png'



export const mentors =[
    {image:ato,name:"ATO Bradley",title:"Creator of Orralearn",subTitle:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",tweeter:"",linkedIn:""},
    {image:lowe,name:"Florian Lowe",title:"GeekSaitama",subTitle:"Lead engineering teams at Figma, Pitch, and Protocol Labs.",tweeter:"",linkedIn:""},
    {image:imagePaul,name:" Nji Paul Kamdoum ",title:"Azathot111",subTitle:"Full Stack Developer, Full stack developer at Orralearn Academy",skype:"",linkedIn:""},
    {image:avatar,name:"Marvin McKinney",title:"SteveStrange",subTitle:"Former frontend dev for Linear, Coinbase, and Postscript.",tweeter:"",linkedIn:""},
]
export  const navLinks =[
    {title:"Home",path:"/"},
    {title:"Pricing",path:"/pricing"},
    {title:"FAQs",path:"/faqs"},
    {title:"About Us",path:"/about"},
    {title:"Contact Us",path:"/contact"},
]


export const navigation = [
    { name: 'Dashboard', path:"/", icon: AiOutlineHome },
    { name: 'Projects', path:"/projects", icon: AiOutlineProject },
    { name: 'Courses', path:"courses", icon: CgFileDocument  },
    { name: 'Challenges', path:"challenges", icon: BiAward  },
    { name: 'Community', path:"community", icon: BiGroup },
    { name: 'Inbox', path:"inbox", icon: AiOutlineInbox  },
    { name: 'Learning Paths', path:"/learningPaths", icon: BsBook, },
    { name: 'Ebooks', path:"/ebooks", icon: BsBook, },
    { name: 'Coding Playground', path:"codingPlayGround", icon: BiCodeAlt  },
    { name: 'Question & Answer', path:"question&Answer", icon: BiHelpCircle  },
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
        name: 'Basic Tier ',
        id: 'basic-tier',
        href: '#',
        price: { monthly: '$3.99', annually: '$144' },
        description: 'The essentials to provide your best work for clients.',
        features: ['Everything in the Free Tier.', 'Access to structured Learning Paths for guided learning.', 'Full access to the Coding Playground with all languages.', 'Access to coding challenges to test your skills.'],
        mostPopular: false,
    },
    {
        name: 'Premium Tier ',
        id: 'tier-premium',
        href: '#',
        price: { monthly: '$7.99', annually: '$288' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            'Everything in the Basic Tier',
            'Unlimited access to a library of e-books on various programming topics.',
            'Access to additional premium content and resources.',
        ],
        mostPopular: true,
    },
    {
        name: 'Pro Tier ',
        id: 'tier-pro',
        href: '#',
        price: { monthly: '$12.99', annually: '$576' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Everything in the Premium Tier.',
            'Access to premium paid courses covering advanced topics.',
            'Live webinars and workshops with industry experts.',
            '1-on-1 mentorship with experienced mentors for personalized guidance and support.',
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


export  const recommendedEbooks =[
    {title:"Learn Web Development with React",oldPrice:"$8.50" ,newPrice:"$5.50",bgColr:"bg-[#333738]",ctnH:"Learning Path",ctnText:"Learn Web Development with React",textColor:"text-[#E47131]"},
    {title:"Understanding React and Node.Js",oldPrice:"$3.50" ,newPrice:"$4.50",bgColr:"bg-[#462D7E]",ctnH:"Learning Path",ctnText:"Understanding React and Node.js",textColor:"text-[#D4C8C1] "},
]


export const upcomming=[
    {title: "Python Bootcamp",date:"8th - 10th Oct 2023",time:"8 A.M - 9 A.M ",number:"8",platform:"Zoom platform",color:" bg-[#F0F7FF]" ,figurebg:"bg-[#07F]"},
    {title: "Java Bootcamp",date:"13th July 2023",time:"8 A.M - 9 A.M ",number:"13",platform:"Google Meet",color:"bg-[#FFF0F7]",figurebg:" bg-[#FF1D86]"},
    {title: "Step-by-Step guide to Web Dev",date:"8th - 10th Oct 2023",time:"8 A.M - 9 A.M ",number:"18",platform:"**To be submitted via Email",color:" bg-[#F0FFF3]",figurebg:" bg-[#16D03B]"},
    {title: "ATO Bradley meet & greet",date:"8th - 10th Oct 2023",time:"8 A.M - 9 A.M ",number:"23",platform:"Google Meet",color:"bg-[#FFF5F0]",figurebg:" bg-[#FF7E3E]"},

]

export const otherSections = [
    {img:image1,title:"Continue Learning",subTitle:"You haven’t enrolled in a course yet",text:"Accelerate your learning by starting a curated learning path that fits your interests.",button:"Explore learning paths"},
    {img:image2,title:"Playgrounds",subTitle:"Boot a playground IDE",text:"Pick a playground to build a project or code collaboratively with your friends",button:"Explore Playgrounds"},
    {img:image3,title:"Challenges",subTitle:"",text:"Our challenges section is your gateway to a world of hands-on experience.",button:"Explore Challenges"}
]

export const courses = [
    {
      title: 'HTML Challenge',
      image: HTMLBlogCover, // Replace with the actual image path
      description: 'Learn the basics of web development from scratch.',
      instructor: 'John Doe',
      duration: '8 weeks',
      startDate: 'October 15, 2023',
      location: 'Online',
      btnName:"Opened",
      participantCount:"1.23k"
    },
    {
        title: 'CSS Challenge',
        image: CSS, // Replace with the actual image path
        description: 'Master JavaScript programming with hands-on projects.',
        instructor: 'Jane Smith',
        duration: '10 weeks',
        startDate: 'November 5, 2023',
        location: 'Online',
        btnName:"Finished",
        participantCount:"800"
      },
    {
      title: 'JavaScript Challenge',
      image: javascript, // Replace with the actual image path
      description: 'Master JavaScript programming with hands-on projects.',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      startDate: 'November 5, 2023',
      location: 'Online',
      btnName:"Finished",
      participantCount:"800"
    },
    {
      title: 'PYTHON Challenge',
      image: python, // Replace with the actual image path
      description: 'Master JavaScript programming with hands-on projects.',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      startDate: 'November 5, 2023',
      location: 'Online',
      btnName:"Opened",
      participantCount:"800"
    },
    {
      title: 'vuejs Challenge',
      image: vuejs, // Replace with the actual image path
      description: 'Master JavaScript programming with hands-on projects.',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      startDate: 'November 5, 2023',
      location: 'Online',
      btnName:"Opened",
      participantCount:"800"
    },
    {
      title: 'Reactjs Challenge',
      image:reactjs, // Replace with the actual image path
      description: 'Master JavaScript programming with hands-on projects.',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      startDate: 'November 5, 2023',
      location: 'Online',
      btnName:"Opened",
      participantCount:"800"
    },
    {
      title: 'PYTHON Challenge',
      image: python2, // Replace with the actual image path
      description: 'Master JavaScript programming with hands-on projects.',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      startDate: 'November 5, 2023',
      location: 'Online',
      btnName:"Opened",
      participantCount:"800"
    },
    {
      title: 'JAVA Challenge',
      image: java, // Replace with the actual image path
      description: 'Master JavaScript programming with hands-on projects.',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      startDate: 'November 5, 2023',
      location: 'Online',
      btnName:"Opened",
      participantCount:"800"
    }
    
  ];

export const categories = [
    {name: 'programming', title: 'Programming', described: 'programming-description'},
    {name: 'design', title: 'Design', described: 'design-description'},
    {name: 'educational', title: 'Educational', described: 'educational-description'},
    {name: 'business', title: 'Business', described: 'business-description'},
]
export const sizes = [
    {name: 'sm', title: 'SM', described: 'sm-description'},
    {name: 'md', title: 'MD', described: 'md-description'},
    {name: 'LG', title: 'lg', described: 'lg-description'},
    {name: 'XL', title: 'xl', described: 'xl-description'},
    {name: 'XXL', title: 'xxl', described: 'xxl-description'},
]
export const languages = [
    {name: 'english', title: 'English', described: 'english-description'},
    {name: 'french', title: 'French', described: 'french-description'},
]

export const coverStyle = [
    {name: 'hardcover', title: 'Hardcover', described: 'hardcover-description'},
    {name: 'softcover', title: 'Softcover', described: 'softcover-description'},
]
export const other = [
    {name: 'four', title: '4+ stars', described: 'four-description'},
]

export const books = [
    {id:1,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
    {id:2,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
    {id:3,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
    {id:4,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
    {id:8,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
    {id:5,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
    {id:6,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image1,title:"React & Node.js",price:"$5.00",description:"Understanding React and Node.js by ATO Bradley"},
    {id:7,author:"ATO bradley",category:"programing",publishDate:"Aug 2023",reviews:10,languages:['english','french'], image:image2,title:"Full Stack Dev",price:"$5.00",description:"Learn Website Development with React with ATO Bradley"},
]




export const subtotal = '$210.00'
export const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
export const taxes = '$23.68'
export const shipping = '$22.00'
export const total = '$341.68'
export const products = [
    {
        id: 1,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    // More products...
]