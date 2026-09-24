export const siteConfig = {
  name: "GADI",
  fullName: "Generalization Across Domains Initiative",
  description:
    "An international interdisciplinary research network studying how learning generalizes across biological and artificial systems, uniting psychology, neuroscience, AI, and education.",
  url: "https://gadi-psych.vercel.app",
  email: "gadi.network@outlook.com",
  founded: "2026",
  memberCount: "66",
  countryCount: "10+",
  steeringCount: "9",

  // Pages hidden until they have content. To show one again, remove it here
  // and drop the leading "_" from its file in src/pages (e.g. _resources.astro).
  hiddenPages: ["/events", "/news", "/resources"],

  nav: [
    { label: "Home",      href: "/" },
    { label: "About",     href: "/about" },
    { label: "People",    href: "/people" },
    { label: "Events",    href: "/events" },
    { label: "News",      href: "/news" },
    { label: "Resources", href: "/resources" },
    { label: "Community", href: "/community" },
    { label: "Contact",   href: "/contact" },
  ],

  domains: [
    "Psychology",
    "Neuroscience",
    "Artificial Intelligence",
    "Education",
    "Linguistics",
    "Psychiatry",
    "Cognitive Science",
    "Data Science",
  ],

  objectives: [
    {
      number: "01",
      title: "Foster Interdisciplinary Exchange",
      description:
        "Organize an annual international conference that brings together researchers from psychology, neuroscience, AI, linguistics, and education to develop the scientific foundation of generalization.",
    },
    {
      number: "02",
      title: "Develop a Shared Framework",
      description:
        "Through thematic working groups, synthesize theoretical and empirical insights across disciplines into a consensus paper on common terminology, mechanisms, and research priorities.",
    },
    {
      number: "03",
      title: "Catalyze International Collaborations",
      description:
        "Facilitate joint research proposals (COST Actions, Horizon Europe projects, MSCA Doctoral Networks, and ERC Synergy Grants) investigating core mechanisms of generalization.",
    },
    {
      number: "04",
      title: "Stimulate Methodological Innovation",
      description:
        "Organize interdisciplinary hackathons where researchers jointly develop experimental paradigms, computational models, and analytical tools applicable across research domains.",
    },
    {
      number: "05",
      title: "Train the Next Generation",
      description:
        "Support early-career researchers through summer schools, workshops, and short-term research visits providing training in cross-disciplinary methods and computational modeling.",
    },
  ],
};
