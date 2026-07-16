import { ProjectData } from "@/types";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiFramer,
  SiGoogleplay,
  SiNextdotjs,
  SiSanity,
} from "react-icons/si";

const nextTsTailwind = [
  <SiNextdotjs className="text-xl" key="next.js" title="Next.js" />,
  <BiLogoTypescript key="typescript" title="TypeScript" />,
  <BiLogoTailwindCss key="tailwind" title="Tailwind CSS" />,
];

const nextTsTailwindFramer = [
  ...nextTsTailwind,
  <SiFramer className="text-lg" key="framer" title="Framer Motion" />,
];

export const projectsData: ProjectData[] = [
  {
    name: "Growth Group Systems",
    link: "https://www.growthgroupsystems.online/home",
    description:
      "Nationwide church growth-group platform for Dominion City—rosters, reports, and leadership workspaces.",
    detailedDescription:
      "Growth Group Systems coordinates neighbourhood fellowships across Nigeria with one leadership platform. It spans public storytelling (journey, gallery, social-impact projects) and a secure leadership workspace for managers and pastors—group registry, rosters & visitors, meeting and project reports, semester planning, analytics, and national oversight across 37 state workspaces. Cross River is the live pilot with nationwide expansion underway.",
    logos: nextTsTailwind,
    imageSrc: "/projects/growth-groups.png",
  },
  {
    name: "Ecomarine",
    link: "https://site.ecomarinegroup.com",
    description:
      "Maritime services website for container services and terminal operations.",
    detailedDescription:
      "A modern maritime services website for Ecomarine, featuring comprehensive information about container services, terminal operations, and shipping solutions. Built with Next.js and includes features like blog management, career listings, FAQ system, and responsive design optimized for the maritime industry.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/ecomarinegroup.png",
  },
  {
    name: "MagicGames",
    link: "http://playmagic.ng/",
    description:
      "Gaming platform with authentication, campaigns, and dashboard functionality.",
    detailedDescription:
      "A gaming platform built with Next.js featuring user authentication, game management, campaign systems, and dashboard functionality. The platform includes phone verification, OTP authentication, subscription management, and a comprehensive gaming experience with real-time updates and user engagement features.",
    logos: [
      ...nextTsTailwind,
      <BiLogoReact key="react" title="React" />,
    ],
    imageSrc: "/projects/playmagic.png",
  },
  {
    name: "NPF Connect",
    link: "https://play.google.com/store/apps/details?id=gov.npfconnect.app",
    description:
      "Communication and operations platform for Nigerian Police Force officers.",
    detailedDescription:
      "NPF Connect is a multi-platform communication and operations system that enhances officer communication, community engagement, and service delivery. The product includes a web leadership dashboard for forums, community, wallet, transactions, rewards, and announcements, alongside a mobile app for forums chat, communities, rewards, and profile management. Available on the Google Play Store.",
    logos: [
      ...nextTsTailwind,
      <SiGoogleplay className="text-lg" key="googleplay" title="Google Play Store" />,
    ],
    imageSrc: "/projects/npf-connect.png",
  },
  {
    name: "Nexkro LMS",
    link: "https://nexkro.com",
    description:
      "Learning management system frontend for courses, academy onboarding, and talent development.",
    detailedDescription:
      "Nexkro LMS is the learning management system frontend for Nexkro—helping businesses and individuals grow in a digital-first world. The platform showcases services, courses, and academy enrollment flows with a responsive marketing and product experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring academy CTAs, course discovery, and a modern multi-device UI.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/nexkro-lms.png",
  },
  {
    name: "HOME-CELL (Salvation Ministries)",
    link: "https://www.crshomecell.online",
    description:
      "Church management platform for Salvation Ministries Home Fellowship operations.",
    detailedDescription:
      "A production church management platform digitalizing Salvation Ministries Home Fellowship operations across states, areas, zones, and fellowship cells. Built role-based dashboards for State, Area, Zonal, and Cell leaders with real-time KPIs—member counts, new converts, attendance rate, and retention—plus attendance submission, convert pipeline tracking, compliance monitoring, reports, and in-app communications. Features global search, multi-level hierarchy management, scripture widgets, and PWA support for leaders in the field.",
    logos: nextTsTailwind,
    imageSrc: "/projects/smhos-homecell.png",
  },
  {
    name: "CHAAD Energy",
    link: "https://www.chaadenergy.com",
    description:
      "Corporate website for an engineering and energy services firm.",
    detailedDescription:
      "Corporate website for CHAAD Energy Limited—an engineering and energy services firm delivering EPC, commissioning, cathodic protection, tank services, and turnkey solutions across oil, gas, and industrial sectors. Built a content-driven marketing platform with dynamic services, projects, careers, and news powered by REST APIs, Cloudinary asset delivery, animated hero sections, client trust showcases, and conversion-focused contact flows.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/chaad-energy.png",
  },
  {
    name: "CHAAD Engineering",
    link: "https://www.chaadengineering.com",
    description:
      "Enterprise website for ISO 9001–certified oil and gas engineering specialists.",
    detailedDescription:
      "Enterprise website for CHAAD Engineering & Technical Services Ltd—ISO 9001–certified oil and gas engineering specialists. Delivered a high-performance Next.js experience with cinematic hero carousels, services and project catalogs, careers and news modules, quotation request forms, partner marquee, FAQ, cookie compliance, and SEO-optimized pages showcasing 150+ global infrastructure projects.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/chaad-engineering.png",
  },
  {
    name: "BoroFuel",
    link: "https://borofuel.org",
    description:
      "Landing page for a fuel access and station-partner app for approved drivers.",
    detailedDescription:
      "A professional landing page website for Borofuel - a fuel access and station-partner app that connects approved drivers with designated filling stations. Features include driver portal, organization ID verification, contact forms, and responsive design with smooth animations.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/borofuel.png",
  },
  {
    name: "ASAP DBA",
    link: "https://asapdbaservices.com",
    description:
      "Modern Next.js platform with Redux Toolkit, Zustand, and Framer Motion.",
    detailedDescription:
      "A modern Next.js project with comprehensive state management solutions. Features include Redux Toolkit, Zustand with persistence, Framer Motion animations, Embla Carousel, and Sonner toast notifications. Built with TypeScript and Tailwind CSS for a robust development experience.",
    logos: [
      ...nextTsTailwindFramer,
      <BiLogoReact key="react" title="React" />,
    ],
    imageSrc: "/projects/asapdba.png",
  },
  {
    name: "Blunt Tribe",
    link: "https://blunttribe.com",
    description:
      "Web application with email integration, responsive design, and smooth animations.",
    detailedDescription:
      "A modern web application built with Next.js featuring email functionality, responsive design, and smooth animations. The platform includes contact forms with email integration using Resend and Nodemailer, toast notifications, and a clean, professional UI.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/blunttribe.png",
  },
  
  {
    name: "Aerysyn",
    link: "https://aerysyn.com/",
    description:
      "Cybersecurity platform with dark mode, Radix UI, and modern animations.",
    detailedDescription:
      "A cybersecurity-focused platform built with Next.js featuring dark mode support, responsive design, and modern UI components. Includes Radix UI components, Framer Motion animations, email functionality with Nodemailer, and a professional theme system with next-themes.",
    logos: nextTsTailwindFramer,
    imageSrc: "/projects/aerysyn.png",
  },
 
  {
    name: "Premium & Classy",
    link: "https://premiumandclassy.netlify.app",
    description:
      "Event planning website with Sanity CMS, portfolio showcase, and booking.",
    detailedDescription:
      "A professional event planning website built with Next.js and Sanity CMS. Features include portfolio showcase, service management, client testimonials, booking system, and contact forms. The website serves as a digital business card for event planners with integrated email services and responsive design.",
    logos: [
      ...nextTsTailwindFramer,
      <SiSanity className="text-lg" key="sanity" title="Sanity CMS" />,
    ],
    imageSrc: "/projects/premium-classy-events.png",
  },
  {
    name: "Work & Shop",
    link: "https://workandshopapp.com",
    description:
      "Marketplace platform connecting professionals, vendors, and customers.",
    detailedDescription:
      "A comprehensive marketplace platform connecting skilled professionals, vendors, and customers. Built with Next.js, featuring authentication, service listings, booking system, payment processing, and real-time messaging. The platform enables seamless transactions between service providers and customers.",
    logos: nextTsTailwind,
    imageSrc: "/projects/workandshop.png",
  },
  {
    name: "Umpire Wave",
    link: "https://umpirewave.com",
    description:
      "Creative agency website for music production, events, and studio services.",
    detailedDescription:
      "A creative agency website for Umpire Wave showcasing music production, event coverage, photography, and studio services. Built with Next.js featuring portfolio galleries, brand partnerships, team showcases, and contact forms. The website serves as a digital presence for the agency's creative services.",
    logos: nextTsTailwind,
    imageSrc: "/projects/umpirewave.png",
  },
  {
    name: "Troo",
    link: "https://troohq.com",
    description:
      "Restaurant management software for hospitality businesses.",
    detailedDescription:
      "Troo is a comprehensive Restaurant Management Software tailored to elevate the operations of hospitality businesses. With a suite of integrated tools, Troo helps businesses enhance efficiency, improve customer experience, and ultimately boost profitability. Designed with ease of use in mind, the software is built to seamlessly manage front-of-house and kitchen operations while simplifying payment processing and customer interactions.",
    logos: [
      ...nextTsTailwind,
      <BiLogoReact key="react" title="React" />,
    ],
    imageSrc: "/projects/troohq.png",
  },
  
  {
    name: "Kurenode",
    link: "https://qproxim.netlify.app",
    description:
      "Health insurance software for patient records and healthcare operations.",
    detailedDescription:
      "Kurenode is a health insurance software application aimed at enhancing healthcare delivery for patients and operational efficiency for healthcare providers. Kurenode focuses on integrating patient records, automating administrative tasks, and optimizing revenue management. The application seeks to improve patient care, streamline healthcare processes, ensure compliance with regulations, and reduce costs.",
    logos: [
      ...nextTsTailwind,
      <BiLogoReact key="react" title="React" />,
    ],
    imageSrc: "/projects/kurenode.png",
  },
];
