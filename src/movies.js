// import img from "../public";
export const movies = [
  {
    id: 1,
    poster: "/img/iena.png",
    name: "InfluenceExchangeConfexnAwards",
    title: "IENA",
    type: "Website",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 2,

    poster: "/img/app.png",
    name: "ASSENTConnectPlus",
    title: "ASSENT Connect Plus",
    type: "App IOS/Android",
    tags: ["React Native", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 3,
    poster: "/img/bitnib.png",
    name: "BitnibDesign",
    title: "Bitnib Design",
    type: "Website",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },

  {
    id: 4,
    poster: "/img/iam.png",
    name: "PortfolioWebsite",
    title: "Portfolio",
    type: "Website",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 5,
    poster: "/img/power.png",
    name: "PowerTab",
    title: "PowerTab",
    type: "Browser Extension",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 6,
    poster: "/img/yotta.png",
    name: "YottaWebsiteRedesign",
    title: "Yotta",
    type: "Website Redesign",
    tags: ["React", "TailwindCSS", "Framer Motion"],
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
