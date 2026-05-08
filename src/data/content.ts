export const GITHUB_LINK = "https://github.com/cmcWebCode40";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/michael-chinonso-chinweike-467360a8/";
export const TWITTER_LINK = "https://twitter.com/cmcWebCode/";
export const EMAIL_LINK = "infinitymichael7@gmail.com";
export const RESUME_LINK = "https://docs.google.com/document/d/1goQoqk0VHZWyOvXUgLRYZPnNobxmd-4HZ0ZnTz4n6lI/edit?usp=sharing";

export const profile = {
  name: "Michael Chinweike",
  title: "Software Engineer",
  company: "Mobile Applications",
  description:
    "I build mobile applications at the intersection of fin-tech, IoT, and AI. Currently at Interswitch Innovation Lab, I ship production apps, develop open source SDKs, and bridge the gap between hardware and software, from Bluetooth meters to NFC payments to AI-powered experiences.",
  location: "Lagos, Nigeria",
  email: EMAIL_LINK,
  github: GITHUB_LINK,
  linkedin: LINKEDIN_LINK,
  twitter: TWITTER_LINK,
  resume: RESUME_LINK,
};

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "Interswitch Group",
    role: "Software Engineer - Innovation Lab",
    period: "Feb 2024 - Present",
    location: "Lagos State, Nigeria",
    description:
      "Building prototypes, proof-of-concepts, and production mobile applications at Africa's leading integrated digital payments company. Focused on R&D, IoT integration, and developer tooling.",
    achievements: [
      "Implemented Bluetooth Low Energy (BLE) offline capabilities in Quickteller Smart Meter app, enabling direct communication between energy meters and mobile devices - reducing dependency on network connectivity by 100%",
      "Developed first POC integrating Mifare Classic/DESFire EMV cards for offline payments, supporting Verve card business line expansion into network-limited regions",
      "Built NFC-based transport payment POC enabling tap-and-go payments and real-time account balance checks on mobile devices - laying groundwork for contactless transit solutions",
      "Built and published Interswitch Payment Gateway SDK for React Native, reducing merchant integration time from weeks to hours",
      "Implemented AI-powered customer assistant using RAG (Retrieval-Augmented Generation) pipeline in Quickteller Energy app, improving user self-service resolution",
      "Architected web application observability system using OpenTelemetry, developing flexible SDK library for metrics, logs, and traces collection across multiple products",
      "Collaborated with Embedded Engineers on Bluetooth 5 and MQTT integrations, enabling real-time hardware-to-mobile data exchange; open-sourced MQTT client SDK for React Native",
      "Developed Mobile API Debugger tool, reducing QA testing bottlenecks and accelerating bug identification cycles",
      "Championed automated error handling workflow integrating application crash analytics with Jira, streamlining issue tracking for QA team",
      "Led mobile development for Quickteller Energy, Quickteller PayBox, and Quickteller PowerBox applications",
      "Mentored software engineering interns on frontend development fundamentals and product building best practices",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Bluetooth Low Energy", "MQTT", "OpenTelemetry", "AI/RAG", "EMV/NFC", "Native Modules"],
    current: true,
  },
  {
    id: "2",
    company: "Verida",
    role: "Frontend Web3/Mobile Engineer",
    period: "Aug 2021 - Jan 2024",
    location: "Australia (Remote)",
    description:
      "Built proof-of-concept demo web applications demonstrating the Verida Vault's capabilities including SSO authentication, Web3 decentralized identity (DID), and verifiable credentials.",
    achievements: [
      "Utilized React, Vue, and TypeScript to build several proof-of-concept demo web applications demonstrating Verida Vault capabilities including SSO authentication, Web3 for decentralized identity creation, and the Verida-js protocol library for issuing verifiable credentials",
      "Created Vue plugins with comprehensive documentation, enabling developers to quickly get started using the protocol library with excellent developer experience",
      "Provided support for upgrading the existing verifiable credential library and added unit tests to ensure reliability",
      "Translated Figma designs for User Badge claiming into the mobile application codebase using React Native",
      "Carried out regression testing on the Verida mobile wallet using Qase testing platform",
    ],
    technologies: ["TypeScript", "React", "Vue", "React Native", "Web3", "Blockchain", "Mobile Application Development"],
    current: false,
  },
  {
    id: "3",
    company: "Accelerar",
    role: "Frontend Engineer",
    period: "May 2020 - Jul 2021",
    location: "Lagos State, Nigeria",
    description:
      "Developed frontend solutions and contributed to various web application projects.",
    achievements: [
      "Built responsive web applications using modern frontend technologies",
      "Collaborated with design and backend teams to deliver features",
      "Implemented best practices for code quality and performance",
    ],
    technologies: ["TypeScript", "JavaScript", "React", "HTML/CSS"],
    current: false,
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  playStoreUrl: string;
  appStoreUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Quickteller Energy",
    description:
      "Smart Energy App for managing Interswitch meters. Remote meter top-up, energy tracking, and seamless power management.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.quickteller.energy",
    appStoreUrl: "#",
    image: "../../public/images/qt_energy.png",
  },
  {
    id: "2",
    title: "CEven",
    description:
      "A platform that enables parents to enrol, monitor, and stay engaged with their child's creche in one place.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ceven.app",
    appStoreUrl: "#",
    image: "../../public/images/ceven.png",
  },
  {
    id: "3",
    title: "MonBud",
    description:
      "A global platform where people share ideas, discover opportunities, and cooperate to grow in career, business, and finance.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.finbudtechnologieslimited.monbud&hl=en",
    appStoreUrl: "https://apps.apple.com/ng/app/monbud/id6476326261",
    image: "../../public/images/monbud.png",
  },
  {
    id: "4",
    title: "AmatNow",
    description:
      "Discover curated products, meals, and everyday essentials with competitive pricing and real-time delivery.",
    playStoreUrl: "#",
    appStoreUrl: "https://play.google.com/store/apps/details?id=com.amatnow.app.amatnow&hl=en",
    image: "../../public/images/amatnow_store.png",
  },
];

export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  npmUrl?: string;
  stars?: number;
  downloads?: string;
  language: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: "1",
    name: "react-native-api-debugger",
    description:
      "A comprehensive network request debugging tool for React Native. Monitor, inspect, and debug all your app's network requests with an intuitive overlay interface.",
    githubUrl: "https://github.com/cmcWebCode40/react-native-api-debugger",
    npmUrl: "https://www.npmjs.com/package/react-native-api-debugger",
    language: "TypeScript",
  },
  {
    id: "2",
    name: "react-native-interswitch-pay",
    description:
      "Interswitch React Native SDK that simplifies IPG integration into your React Native app using a WebView component.",
    githubUrl: "https://github.com/cmcWebCode40/react-native-interswitch-pay",
    npmUrl: "https://www.npmjs.com/package/react-native-interswitch-pay",
    language: "TypeScript",
  },
  {
    id: "3",
    name: "react-native-versionkit",
    description:
      "A lightweight SDK for displaying app version badges and changelogs. Supports Expo and bare React Native.",
    githubUrl: "https://github.com/cmcWebCode40/react-native-versionkit",
    npmUrl: "https://www.npmjs.com/package/react-native-versionkit",
    language: "TypeScript",
  },
  {
    id: "4",
    name: "react-native-mqtt-client",
    description:
      "A lightweight, high-performance MQTT client with native Android and iOS support. Supports MQTT 3.1.1, TLS/SSL, QoS 0/1/2, and Expo.",
    githubUrl: "https://github.com/cmcWebCode40/react-native-mqtt-client",
    npmUrl: "https://www.npmjs.com/package/@ecodevstack/react-native-mqtt-client",
    language: "TypeScript",
  },
  {
    id: "5",
    name: "react-native-storage-lens",
    description:
      "Developer tool that provides a visual interface to inspect, monitor, and manage local storage - similar to browser DevTools.",
    githubUrl: "https://github.com/cmcWebCode40/react-native-storage-lens",
    npmUrl: "https://www.npmjs.com/package/react-native-storage-lens",
    language: "TypeScript",
  },
  {
    id: "6",
    name: "react-otel",
    description:
      "Flexible OpenTelemetry integration for React web applications.",
    githubUrl: "https://github.com/cmcWebCode40/react-otel",
    npmUrl: "https://www.npmjs.com/package/react-otel",
    language: "TypeScript",
  },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  readTime: string;
  platform: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Debug Network Requests in React Native Like a Pro",
    excerpt:
      "Stop the console.log madness! Learn how to properly debug network requests in React Native with professional tools and techniques.",
    url: "https://medium.com/@chinweikemichaelchinonso/debug-network-requests-in-react-native-like-a-pro-no-more-console-log-madness-fa3b013eef40",
    publishedAt: "2026-04-27",
    readTime: "5 min",
    platform: "Medium",
  },
  {
    id: "2",
    title: "How to Add Native MQTT to Your React Native App in 5 Minutes",
    excerpt:
      "A quick guide to integrating native MQTT client into your React Native application with full iOS and Android support.",
    url: "https://medium.com/@chinweikemichaelchinonso/how-to-add-native-mqtt-to-your-react-native-app-in-5-minutes-c5006b066290",
    publishedAt: "2026-02-23",
    readTime: "5 min",
    platform: "Medium",
  },
  {
    id: "3",
    title: "Bluetooth BLE Integration in React Native Expo",
    excerpt:
      "Complete guide to Bluetooth Low Energy integration in React Native Expo with New Architecture support for iOS and Android.",
    url: "https://medium.com/@chinweikemichaelchinonso/bluetooth-ble-integration-in-react-native-expo-new-architecture-ios-android-5c0100960979",
    publishedAt: "2025-04-15",
    readTime: "8 min",
    platform: "Medium",
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  current: boolean;
  description?: string;
}

export const education: Education[] = [
  {
    id: "1",
    institution: "Miva Open University",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    period: "May 2025 - May 2027",
    current: true,
    description: "Direct Entry (DE)",
  },
  {
    id: "2",
    institution: "The Federal Polytechnic Nekede, Owerri",
    degree: "Higher National Diploma (HND)",
    field: "Electrical and Electronics Engineering",
    period: "2016 - 2018",
    current: false,
    description: "Grade: Upper Credits",
  },
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#opensource" },
  { name: "Articles", href: "#articles" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];
