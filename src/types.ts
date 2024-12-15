// types.ts
export interface SkillItem {
  name: string;
  level: string;
  percentage: number;
}

export interface Skill {
  title: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

export interface Formation {
  title: string;
  school: string;
  status: string;
  statusColor: string;
  period: string;
  description: string;
}