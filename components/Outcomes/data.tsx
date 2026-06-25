import {
  TrendingUp,
  Award,
  BarChart3,
  DollarSign,
  Target,
  Zap,
  Network,
  Globe,
  AlertCircle,
  Timer,
  Briefcase,
  Calculator,
  Shield,
  Brain,
  Swords
} from 'lucide-react'
import type { OutcomeItem, OutcomeCategory } from './types'

export const ITEMS_PER_PAGE = 3
export const CAROUSEL_INTERVAL_MS = 5000

// Map categories to icons
export const categoryIcons: Record<OutcomeCategory, React.ReactNode> = {
  'Event-Led Demand Generation': <TrendingUp className="w-4 h-4" />,
  'Brand Authority & Positioning': <Award className="w-4 h-4" />,
  'Organic Traffic Growth': <BarChart3 className="w-4 h-4" />,
  'Pricing Strategy': <DollarSign className="w-4 h-4" />,
  'Market Penetration': <Target className="w-4 h-4" />,
  'Cost Efficiency': <Zap className="w-4 h-4" />,
  'Infrastructure Scaling': <Network className="w-4 h-4" />,
  'Global Developer Experience': <Globe className="w-4 h-4" />,
  'Incident Resolution': <AlertCircle className="w-4 h-4" />,
  'Operational Velocity': <Timer className="w-4 h-4" />,
  'Revenue Performance': <Briefcase className="w-4 h-4" />,
  'Pricing Accuracy': <Calculator className="w-4 h-4" />,
  'Security & Fraud Prevention': <Shield className="w-4 h-4" />,
  'Strategic Resource Allocation': <Brain className="w-4 h-4" />,
  'Competitive Intelligence': <Swords className="w-4 h-4" />
}

export const outcomesData: OutcomeItem[] = [
  // StackGen
  {
    id: 'stackgen-demand-gen',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Event-Led Demand Generation',
    description: 'Accomplished a **347.5% QoQ increase** in marketing-sourced pipeline (**$2.73M in Q2 2025**) by orchestrating a high-impact event strategy that secured **91 meetings at AWS re:Invent** and **50 demos at KubeCon**.'
  },
  {
    id: 'stackgen-brand',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Brand Authority & Positioning',
    description: 'Accomplished a company-wide rebrand to **"Autonomous Infrastructure Platform"** by launching the 4 Aiden AI Agent products, resulting in a Crunchbase **"heat score" rise to 95**, being featured in **Gartner cool vendor 2025 in 4 categories**, ranking top Autonomous Infrastructure results in GEO/AEO.'
  },
  {
    id: 'stackgen-traffic',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Organic Traffic Growth',
    description: 'Drove a **55.6% YoY increase** in organic clicks (2.98K → 8.09K) and **573.6% growth** in total impressions (50.2K → 662K) while improving average search ranking position by **53%** (31.3 → 14.7) through deploying high-intent SEO content, landing pages, blog posts, social media, and email campaigns.'
  },
  {
    id: 'stackgen-pricing',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Pricing Strategy',
    description: 'Accomplished a **2,500% increase** in pricing page views by launching a new interactive pricing page with a built-in **ROI calculator** that provided immediate value quantification for prospects.'
  },

  // ByteDance
  {
    id: 'bytedance-cost',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Cost Efficiency',
    description: 'Rollout System (0-1 IaC) product helped TikTok Server Architecture engineering team save an estimated **$10,000,000** in developer cost, 312 days of Developer Time,  **50% reduction** in datacenter bringup timelines (**6 months to 3 months**), and executed **320k+ deployments** on their new data center bringup deployments in Norway region.'
  },
  {
    id: 'bytedance-cost-2',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Cost Efficiency',
    description: 'Rollout System (0-1 IaC) product helped Lark PIPO engineering team automated the rollout of 200+ RDS DBs and 9,000+ RDS Tables. Compressed regional timelines from **2 months to 6 days** and slashed headcount demands from **40+ PD to less than 1.5 PD**. Average resource idle time was **reduced by 48 days** per facility (144 idle days saved in total across 3 regions) in Indonesia new data center bringup.'
  },
  {
    id: 'bytedance-scaling',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Infrastructure Scaling',
    description: 'Scaled 0-1 **ByteGate** (feature flag) product that accomplished **10M+ QPS reliability** and **344.80% growth** in active feature gate (221 -> 983) usage, MAU (monthly active users) **increased by ~500%** from ~100 to 600 users by executing an internal evangelism campaigns that onboarded engineering teams from  Toutiao, Lark, Capcut, TikTok Global Ecommerce and more.'
  },
  {
    id: 'bytedance-dx',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Global Developer Experience',
    description: 'Improved Overseas DevInfra Platform issues by **5x reduction** in page load latency (**10s+ to under 2s**) for international developers by implementing advanced load-balancing, caching, and strategic VPN routing.'
  },
  {
    id: 'bytedance-incident',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Global Developer Experience',
    description: 'Managed the Overseas Product Operations of 17+ modules of DevInfra Platform and accomplished these feats: Improved Ticket Resolution Rates by a **24.16% improvement** (from **45.3% to 69.5%**). Elevated User Satisfaction Score from **7.15 to 8.35** (significantly beating the 7.5 target). Reduced Low-Score Tickets rates by **40.2%** (dropping from **3.89% to 2.78%**).'
  },

  // Agora
  {
    id: 'agora-revenue',
    company: 'Agora',
    companyTagline: 'Real-Time-Engagement PaaS',
    category: 'Revenue Performance',
    description: 'Accomplished **128% of the annual revenue target** (**$511K vs $400K goal**) by executing targeted go-to-market strategies and aligning cross-functional teams for various media solution SDK/API launches.'
  },
  {
    id: 'agora-pricing',
    company: 'Agora',
    companyTagline: 'Real-Time-Engagement PaaS',
    category: 'Pricing Accuracy',
    description: 'Accomplished a **90% increase** in pricing estimation accuracy and reduced quoting time from **days to minutes** by designing and launching an automated web-based pricing and bundling calculator.'
  },
  {
    id: 'agora-security',
    company: 'Agora',
    companyTagline: 'Real-Time-Engagement PaaS',
    category: 'Security & Fraud Prevention',
    description: 'Accomplished **$1M/month** in operational savings and a **28% reduction** in malicious account abuse by designing a tiered **"Trust Level System"** that gated SDK access based on behavioral verification signals.'
  },
  {
    id: 'agora-competitive',
    company: 'Agora',
    companyTagline: 'Real-Time-Engagement PaaS',
    category: 'Competitive Intelligence',
    description: 'Accomplished a **33% influence rate** on closed-won opportunities by managing a Market Competitive Intelligence program that created battlecards and technical benchmark assets to influence deals against competitors.'
  }
]
