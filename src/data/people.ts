export interface Person {
  name: string;
  title: string;
  institution: string;
  department?: string;
  country: string;
  email: string;
  role: "coordinator" | "steering" | "member";
  photo?: string;
  bio?: string;
}

export const people: Person[] = [
  // Coordinator
  {
    name: "Jonas Zaman",
    title: "Dr.",
    institution: "UHasselt",
    department: "REVAL – Rehabilitation Research Centre",
    country: "Belgium",
    email: "Jonas.zaman@hasselt.be",
    role: "coordinator",
    photo: "/images/people/JZ.jpg",
    bio: "Jonas Zaman is currently an Assistant Professor at the Rehabilitation Research Center of Hasselt University. His research focuses on how (subjective) experiences shape what we learn, how we behave, what we perceive, and how we feel. His work spans multiple topics, including chronic pain, anxiety disorders, and mental well-being in children. He combines controlled experimental paradigms with computational modelling and field studies. His work is fundamentally theory-driven, using formal frameworks to guide the development of experimental tasks and computational models that advance understanding of core cognitive processes, including learning, generalization, and perception. His ultimate goal is to identify transdiagnostic behavioral and cognitive markers and to design experimental tasks and computational tools that support more personalized approaches in healthcare.",
  },
  // Belgium
  {
    name: "Vera Hoorens",
    title: "Dr.",
    institution: "KU Leuven",
    department: "Brain and Cognition",
    country: "Belgium",
    email: "vera.hoorens@kuleuven.be",
    role: "steering",
  },
  {
    name: "Eline Van Geert",
    title: "Dr.",
    institution: "KU Leuven",
    department: "Brain and Cognition",
    country: "Belgium",
    email: "eline.vangeert@kuleuven.be",
    role: "steering",
    photo: "/images/people/EVG.jpg",
  },
  {
    name: "Wolf Vanpaemel",
    title: "Dr.",
    institution: "KU Leuven",
    department: "Quantitative Psychology and Individual Differences",
    country: "Belgium",
    email: "wolf.vanpaemel@kuleuven.be",
    role: "steering",
  },
  {
    name: "Kenny Yu",
    title: "Dr.",
    institution: "KU Leuven",
    department: "Quantitative Psychology and Individual Differences",
    country: "Belgium",
    email: "kenny.yu@kuleuven.be",
    role: "steering",
    photo: "/images/people/KY.jpg",
    bio: "Kenny Yu investigates the conditions under which computational models of cognition live up to their claims, that behavior can be decomposed into distinct processes, that model parameters correspond to the processes they purport to measure, and that fitting data constitutes evidence for theory. He builds probabilistic models of human learning and generalization that formally separate the cognitive mechanisms contributing to observed behavior. Methodologically, he asks when a model parameter genuinely measures the process it names, what data is needed to tell competing theories apart, and how model generalisability relates to explanatory power.",
  },
  // Netherlands
  {
    name: "Steven Verheyen",
    title: "Dr.",
    institution: "Erasmus University Rotterdam",
    department: "Brain and Cognition",
    country: "Netherlands",
    email: "verheyen@essb.eur.nl",
    role: "steering",
    bio: "Steven Verheyen studies generalization in the context of categorization and induction. He investigates how similarity relations govern the extension of category membership and semantic properties. He is particularly interested in understanding individual differences in generalization and how these relate to people's category representations, which he models as multidimensional metric spaces. More recently, he has applied this framework to the study of conceptual fear generalization.",
  },
  // United Kingdom
  {
    name: "Dagmar Divjak",
    title: "Dr.",
    institution: "University of Birmingham",
    department: "Department of Modern Languages",
    country: "United Kingdom",
    email: "d.divjak@bham.ac.uk",
    role: "steering",
  },
  {
    name: "Maria Robinson",
    title: "Dr.",
    institution: "University of Warwick",
    department: "Department of Psychology",
    country: "United Kingdom",
    email: "maria.robinson@warwick.ac.uk",
    role: "steering",
    photo: "/images/people/MR.png",
    bio: "Maria Robinson is an assistant professor in the Behavioral Science group in the Psychology Department at the University of Warwick. Her primary research interest is in combining formal modeling and analysis with empirical work to study a range of cognitive processes, including attention, memory, and metacognition. She is also interested in best practices in measurement and theory assessment in psychology, particularly in how to build quantitative models in laboratory settings that can generalize to behavior in the real world.",
  },
  // United States
  {
    name: "Sam Cooper",
    title: "Dr.",
    institution: "University of Texas at Austin",
    department: "Department of Psychiatry & Behavioral Sciences",
    country: "United States",
    email: "samuel.cooper@austin.utexas.edu",
    role: "steering",
    photo: "/images/people/SC.jpg",
  },
  {
    name: "Ilia Sucholutsky",
    title: "Dr.",
    institution: "New York University",
    department: "NYU Center for Data Science",
    country: "United States",
    email: "is3060@nyu.edu",
    role: "steering",
  },
];

export const coordinator = people.find((p) => p.role === "coordinator")!;
export const steeringCommittee = people.filter((p) => p.role === "steering");
