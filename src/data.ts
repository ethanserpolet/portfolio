// data.ts
import { Skill, Project, Experience, Formation } from './types';

export const skills: Skill[] = [
  {
    title: "Développement",
    items: [
      { name: "Java", level: "Moyen", percentage: 50 },
      { name: "HTML/CSS", level: "Intermédiaire", percentage: 25 },
      { name: "Python", level: "Intermédiaire", percentage: 25 },
      { name: "JavaScript", level: "Débutant", percentage: 20 },
      { name: "TypeScript", level: "En apprentissage", percentage: 15 },
      { name: "React", level: "En apprentissage", percentage: 10 },
      { name: "SQL/MongoDB", level: "Avancé", percentage: 40 },
    ],
  },
  {
    title: "Systèmes",
    items: [
      { name: "Windows Server/Desktop", level: "Avancé", percentage: 50 },
      { name: "Ubuntu/Debian", level: "Moyen", percentage: 40 },
      { name: "Windows Desktop", level: "Avancé", percentage: 60 },
      { name: "Docker", level: "En apprentissage", percentage: 5 },
      { name: "MacOS", level: "Moyen", percentage: 35 },
    ],
  },
  {
    title: "Langues",
    items: [
      { name: "Français", level: "Natif (C2)", percentage: 100 },
      { name: "Anglais", level: "Avancé (C1)", percentage: 80 },
      { name: "Espagnol", level: "Débutant (A2)", percentage: 10 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "PalaniaNetwork",
    description: "Serveur Minecraft avec plus de 700 joueurs inscrits. Infrastructure complète avec système de mini-jeux et économie virtuelle.",
    tags: ["Java", "MySQL", "Redis", "Spigot API", "Docker"],
    link: ""
  },
  {
    title: "SweetyRecords",
    description: "Label de musique indépendant spécialisé dans la distribution numérique et le management d'artistes émergents.",
    tags: ["Distribution", "Management", "Promotion", "Marketing Digital"],
    link: ""
  },
  {
    title: "Portfolio",
    description: "Site Web personnel présentant mes compétences et réalisations, développé avec React et TypeScript.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://ethan.serpolet.fun"
  },
  {
    title: "RosaGames",
    description: "Site Web pour le Serveur Minecraft RosGames",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Backend API Python", "MongoDB"],
    link: "https://rosadev.serpolet.fun"
  },
  {
    title: "TheGreatCanvas",
    description: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Backend API Python", "Clerk", "WebSocket", "MongoDB"],
    link: "https://www.TheGreatCanvas.com"
  }
];

export const experiences: Experience[] = [
  {
    title: "Lead Dev / SysAdmin",
    company: "PalaniaNetwork",
    period: "2017 - 2022",
    tasks: [
      "Développement de plugins Minecraft en Java",
      "Administration des serveurs Linux et bases de données",
      "Gestion d'une équipe de 3 développeurs",
      "Mise en place d'une infrastructure Docker",
      "Plus de 1000 joueurs uniques enregistrés"
    ],
  },
  {
    title: "Figurant pour Série TV",
    company: "Parallèles (Disney+)",
    period: "Mai 2021",
    tasks: [
      "Participation au tournage d'une série Disney+",
      "Expérience dans l'industrie audiovisuelle",
      "Collaboration avec une équipe de production professionnelle"
    ],
  },
  {
    title: "Assistant Commercial",
    company: "Torréfaction Au Grain d'Or",
    period: "2015 - 2017",
    tasks: [
      "Accueil et conseil client sur les marchés",
      "Préparation et conditionnement des commandes",
      "Gestion des stocks et inventaire",
      "Mise en place des stands et merchandising"
    ],
  },
];

export const formations: Formation[] = [
  {
    title: "Licence Informatique",
    school: "Université de La Rochelle",
    status: "En cours",
    statusColor: "bg-blue-500/20 text-blue-300",
    period: "2024 - Present",
    description: "Spécialisation en développement logiciel et systèmes d'information"
  },
  {
    title: "Licence LEA Anglais/Japonais",
    school: "Université Lyon3 Jean-Moulin",
    status: "Abandonné",
    statusColor: "bg-red-500/20 text-red-300",
    period: "2023 - 2024",
    description: "Formation en langues étrangères appliquées"
  },
  {
    title: "Baccalauréat STMG (RH-COM)",
    school: "Lycée Edouard Herriot (Voiron - 38)",
    status: "Obtenu",
    statusColor: "bg-green-500/20 text-green-300",
    period: "2020 - 2023",
    description: "Spécialité Ressources Humaines et Communication"
  },
];
