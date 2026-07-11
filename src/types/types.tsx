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
    liveUrl?: string ;
    repoUrl?: string ;
    accent: string;
};
