export type CategoryType = 'AI/ML' | 'Web' | 'UX/UI Design' | 'Infrastructure' | 'Product Marketing';

export interface Project {
  title: string;
  description: string;
  category: CategoryType[];
  image: string;
  demo?: string;
  repo?: string;
  diagram?: string;
  tools: string[];
  dateAdded: string; // Date when project was added (YYYY-MM-DD format)
}

export type CategoryColors = {
  [K in CategoryType]: string;
}

export const categoryColors: CategoryColors = {
  'AI/ML': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Web': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'UX/UI Design': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Infrastructure': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Product Marketing': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
}
