import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from "@/constants/links";

export const Skills = [
  {
    title: "Languages",
    body: `JavaScript, TypeScript & Kotlin`,
  },
  {
    title: "Frameworks & Tools",
    body: `React, React Native, Expo, Nextjs, Git & GitHub .
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

export const MOBILE_APPLICATIONS_LIST = [
  {
    title: "MonBud",
    description: `MonBud is a financial app designed to help you achieve your financial goals, grow your personal, family, and business finances, as well to help you advance in your career.`,
    imagePath: "/images/monbud.png",
    links: {
      website: undefined,
      google: '#',
      apple:
        "https://apps.apple.com/us/app/monbud/id6476326261?platform=iphone",
    },
    type: "app",
  },
  {
    title: "Amat Now",
    description: `AMATNow technology connects restaurants, food stores, and grocery shops with their customers wherever they may be in Istanbul. We are an e-commerce platform on a mission to empower our users with the most competitive pricing as well as delivery in real-time. `,
    imagePath: "/images/amatnow_store.png",
    links: {
      website: undefined,
      google:
        "https://play.google.com/store/apps/details?id=com.amatnow.app.amatnow&hl=en&gl=US",
      apple:
        "https://apps.apple.com/ng/app/amatnow/id1602920651?platform=iphone",
    },
    type: "app",
  },
  {
    title: "Tutornia",
    description: `Learning & educational materials made easy for college and university  students..`,
    imagePath: "/images/tutornia.png",
    links: {
      website: undefined,
      google:
        "https://play.google.com/store/apps/details?id=com.tutornia.tutornia",
      apple: "https://testflight.apple.com/join/WKJQZAkb",
    },
    type: "app",
  },
  {
    title: "Smart Socket Controller",
    description: `An IoT React Native application that leverages Bluetooth Low Energy (BLE) to communicate with an ESP32 HUB Micro-controller for data receiving and exchange`,
    imagePath: "/images/socket_screen_shot.png",
    links: {
      website: "https://github.com/cmcWebCode40/Smart-Socket-Controller",
      google: undefined,
      apple: undefined,
    },
    type: "web",
  },
  {
    title: "Verida",
    description: `The Verida Wallet is a self-custody mobile application to easily manage decentralized identity, personal data, crypto and Web3 apps.`,
    imagePath: "/images/verida_app.png",
    links: {
      website: undefined,
      google: "https://play.google.com/store/apps/details?id=io.verida.vault",
      apple: "https://apps.apple.com/us/app/verida-wallet/id1546599632",
    },
    type: "app",
  },
];

export const SDKS_LISTS = [
  {
    title: "React Native Paystack Webview SDK",
    description: `Paystack React Native SDK enables easy integration of Paystack payments into your React Native applications using Web View.`,
    imagePath: "/images/paystack.png",
    links: {
      google: undefined,
      apple: undefined,
      website:
        "https://github.com/cmcWebCode40/react-native-paystack-webview-sdk",
    },
    type: "web",
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
    type: "web",
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
