// import img from "../public";
export const movies = [
  {
    id: 1,
    poster: "/img2/iena.png",
    name: "InfluenceExchangeConfexnAwards",
    title: "IENA",
    type: "Website",
    tags: ["AppScript", "ScrollJs", "Html", "CSS", "JS"],
    live: ["https://www.theiecna.com/"],
  },
  {
    id: 2,

    poster: "/img2/app.png",
    name: "ASSENTConnectPlus",
    title: "ASSENT Connect Plus",
    type: "App IOS/Android",
    tags: ["React Native", "Firebase", "Expo"],
    live: [
      "https://play.google.com/store/apps/details?id=com.assent.connectplus",
      "https://apps.apple.com/app/assent-connect-plus/id6478013818",
    ],
  },
  {
    id: 3,
    poster: "/img2/bitnib.png",
    name: "BitnibDesign",
    title: "Bitnib Design",
    type: "Website",
    tags: ["HTML", "CSS", "JS", "PrallaxJs"],
    live: ["https://bitnibdesign.com/"],
  },

  {
    id: 4,
    poster: "/img2/iam.png",
    name: "PortfolioWebsite",
    title: "Portfolio",
    type: "Website",
    tags: ["GSAP", "THREEJS"],
    live: ["https://iamayushrai.com/"],
  },
  {
    id: 5,
    poster: "/img2/power.png",
    name: "PowerTab",
    title: "PowerTab",
    type: "Browser Extension",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    live: ["https://powertab.vercel.app/"],
  },
  {
    id: 6,
    poster: "/img2/yotta.png",
    name: "YottaWebsiteRedesign",
    title: "Yotta21",
    type: "Website Redesign",
    tags: ["HTML", "CSS", "JS", "GSAP"],
    live: ["https://yotta21.netlify.app"],
  },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));
