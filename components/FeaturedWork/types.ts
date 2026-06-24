export type CategoryType = 'AI/ML' | 'Analytics' | 'UX/UI Design' | 'Infrastructure' | 'Product' | 'Operations' | 'GTM' | 'Media Solutions' | 'DevOps' | 'Observability' | 'Pricing';

export interface KeyMetric {
  label: string;
  value: string;
}

export interface TeamOverview {
  teamSize: string;
  scope: string;
  keyStakeholders: string[];
}

export interface CaseStudy {
  problem: string;
  solution: string;
  impact: string[];
  /** Optional list of content items; each string may include markdown links [text](url) */
  contentList?: string[];
  teamOverview: TeamOverview;
}

export interface FeaturedWorkItem {
  id: string;
  title: string;
  date: string; // MM/DD/YYYY format
  category: CategoryType[];
  company: string;
  image: string;
  metrics?: KeyMetric[];
  description: string;
  skills: string[];
  tool?: string;
  demo?: string;
  repo?: string;
  diagram?: string;
  website?: string;
  document?: string;
  video?: string;
  caseStudy: CaseStudy;
}

export const categoryColors: Record<CategoryType, string> = {
  'AI/ML': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Analytics': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'UX/UI Design': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Infrastructure': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Product': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  'Operations': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  'GTM': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  'Media Solutions': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  'DevOps': 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
  'Observability': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  'Pricing': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
}
