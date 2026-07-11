export type ExpProject = {
    name: string;
    description: string;
    stack: string[];
    link?: string;
};

export type Company = {
    company: string;
    role: string;
    logo?: string;
    period: string;
    location?: string;
    summary?: string;
    projects?: ExpProject[];
};

export type Project = {
    title: string;
    category: string;
    description: string;
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
    accent: string;
};

export type Education = {
    id: number;
    img: string;
    inst: string;
    edu: string;
    cgpa: number;
    branch?: string;
    startingYear?: number;
    finishedYear: number;
}

export type Achievement = {
  title: string;
  description: string;
  certificateUrl?: string;
};

export type Pos = { dx: number; dy: number; w: number; h: number };
