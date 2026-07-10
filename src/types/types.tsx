export type Project = {
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
    projects?: Project[];
};
