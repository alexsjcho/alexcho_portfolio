export type SkillCategory = 'Engineering' | 'AI' | 'Infrastructure' | 'Analytics' | 'Solutions' | 'UX/UI Design' | 'Product Management' | 'Product Marketing'

export interface SkillData {
  skills: string[];
  color: string;
}

export type SkillsDataType = {
  [K in SkillCategory]: SkillData;
}
