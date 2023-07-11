export {};

declare global {
  interface IApplication {
    id: string;
    title: string;
    category: string[];
    description: string;
    user: string;
    applicationUrl?: string;
    repoUrl?: string;
    logo?: string;
    screenshots?: string[];
    createdBy?: string;
    createdAt?: Date;
    isEditorsPick?: boolean;
  }
}
