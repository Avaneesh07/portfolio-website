export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  courses: string[];
  activities: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type MessageSender = 'user' | 'bot';

export interface ChatOption {
  text: string;
  url: string;
}

export interface ChatMessage {
  sender: MessageSender;
  text?: string;
  options?: ChatOption[];
}