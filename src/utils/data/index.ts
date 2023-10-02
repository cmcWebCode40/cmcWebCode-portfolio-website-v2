import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from "@/constants/links";

export const Skills = [
  {
    title: "Languages",
    body: `JavaScript(ES6+), TypeScript, HTML 5, CSS 3, SASS, Node.js, GraphQL.`,
  },
  {
    title: "Frameworks & Tools",
    body: ` React , React Native , Nextjs , Vue 2 & Vue 3, Vite , Tailwind CSS, Material-UI,  Chakra-UI, Express.js, Redux, Firebase, Strapi, Git & GitHub, Netlify, Vercel.
    `,
  },
  {
    title: "Productivity",
    body: `Slack, Trello, ClickUp, Discord, Notion, Zenhub, Google Apps.`,
  },
  {
    title: "Others",
    body: `Performance Optimization,  Version Control Systems, PWAs, CI/CD ,Component Design Patterns,, Responsive Web/Mobile Design, Communication, Team Integration, Collaboration, Critical Thinking, Professionalism, Adaptability.`,
  },
];


export const projects = [
  {
    title: "Tutornia",
    description: `Learning & educational materials made easy for college and university  students..`,
    imagePath: "/images/tutornia.png",
    links: {
      website: undefined,
      google: 'https://play.google.com/store/apps/details?id=com.tutornia.tutornia',
      apple: 'https://testflight.apple.com/join/WKJQZAkb',
    },
    type:'app'
  },
  {
    title: "Verida",
    description: `The Verida Wallet is a self-custody mobile application to easily manage decentralized identity, personal data, crypto and Web3 apps.`,
    imagePath: "/images/verida_app.png",
    links: {
      website: undefined,
      google: "https://play.google.com/store/apps/details?id=io.verida.vault",
      apple: 'https://apps.apple.com/us/app/verida-wallet/id1546599632',
    },
    type:'app'
  },
  {
    title: "Amat Now",
    description: `AMATNow technology connects restaurants, food stores, and grocery shops with their customers wherever they may be in Istanbul. We are an e-commerce platform on a mission to empower our users with the most competitive pricing as well as delivery in real-time. `,
    imagePath: "/images/amatnow_app.png",
    links: {
      website: undefined,
      google: "https://play.google.com/store/apps/details?id=com.amatnow.app.amatnow&hl=en&gl=US",
      apple: 'https://apps.apple.com/ng/app/amatnow/id1602920651?platform=iphone',
    },
    type:'app'
  },
  {
    title: "React Native Paystack Webview SDK",
    description: `Paystack React Native SDK enables easy integration of Paystack payments into your React Native applications using Web View.`,
    imagePath: "/images/paystack.png",
    links: {
      google: undefined,
      apple: undefined,
      website: "https://github.com/cmcWebCode40/react-native-paystack-webview-sdk",
    },
    type:'web'
  },
  {
    title: "React Native OTP Input ",
    description: `A Light weight simple and flexible react native opt input NPM Library`,
    imagePath: "/images/npm.png",
    links: {
      google: undefined,
      apple: undefined,
      website: "https://www.npmjs.com/package/react-native-input-for-otp",
    },
    type:'web'
  },
];



export const navLinks = [
  {
    title: "Works",
    link: "#works",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Contact",
    link: "#footer",
  },
];


export const footerLinks: Array<{
  title: string;
  link: string;
  type: "mail" | "github" | "linkedIn" | "twitter";
}> = [
  {
    title: "Mail",
    link: EMAIL_LINK,
    type: "mail",
  },
  {
    title: "Github",
    link: GITHUB_LINK,
    type: "github",
  },
  {
    title: "LinkedIn",
    link: LINKEDIN_LINK,
    type: "linkedIn",
  },
  {
    title: "X",
    link: TWITTER_LINK,
    type: "twitter",
  },
];