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

// Map categories to icons
export const categoryIcons: Record<OutcomeCategory, React.ReactNode> = {
  'Event-Led Demand Generation': <TrendingUp className="w-4 h-4" />,
  'Brand Authority & Positioning': <Award className="w-4 h-4" />,
  'Organic Traffic Growth': <BarChart3 className="w-4 h-4" />,
  'Pricing Conversion': <DollarSign className="w-4 h-4" />,
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
    description: 'Accomplished a company-wide rebrand to **"Autonomous Infrastructure Platform"** by launching the **"Aiden" product suite**, resulting in a Crunchbase **"heat score" rise to 95**, comparable to industry leaders.'
  },
  {
    id: 'stackgen-traffic',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Organic Traffic Growth',
    description: 'Accomplished a **55.6% YoY increase** in organic web traffic and **573.6% growth** in total impressions by deploying high-intent SEO content and launching the Aiden marketing playground.'
  },
  {
    id: 'stackgen-pricing',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Pricing Conversion',
    description: 'Accomplished a **2,500% increase** in pricing page views by launching a new interactive pricing page with a built-in **ROI calculator** that provided immediate value quantification for prospects.'
  },
  {
    id: 'stackgen-market',
    company: 'StackGen',
    companyTagline: 'Agentic Infrastructure Platform',
    category: 'Market Penetration',
    description: 'Accomplished a **33% increase** in demo-to-SQL conversion by implementing a standardized **"Producer" workflow** (Standards → Modules → Templates) that enabled technical champions to visualize ROI instantly.'
  },

  // ByteDance
  {
    id: 'bytedance-cost',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Cost Efficiency',
    description: 'Accomplished an estimated **$10,000,000/month** in developer cost savings by architecting the 0-to-1 **"Rollout System"** for intent-based IaC deployment, executing **320k+ deployments annually**.'
  },
  {
    id: 'bytedance-scaling',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Infrastructure Scaling',
    description: 'Accomplished **10M+ QPS reliability** and **123% growth** in active feature gate usage by executing an internal evangelism sprint that onboarded high-impact units including Toutiao and Global Ecommerce.'
  },
  {
    id: 'bytedance-dx',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Global Developer Experience',
    description: 'Accomplished a **5x reduction** in page load latency (**10s+ to under 2s**) for international developers by implementing advanced load-balancing, caching, and strategic VPN routing.'
  },
  {
    id: 'bytedance-incident',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Incident Resolution',
    description: 'Accomplished a **24.16% absolute improvement** in ticket resolution rates (**45.3% to 69.5%**) and an **8.35/10 CSAT** by bridging Bits AI troubleshooting context directly into the central Oncall platform.'
  },
  {
    id: 'bytedance-velocity',
    company: 'ByteDance',
    companyTagline: 'Developer Infrastructure',
    category: 'Operational Velocity',
    description: 'Accomplished a **50% reduction** in datacenter bringup timelines (**6 months to 3 months**) and saved **312+ Person-Days** for business teams by automating the deployment of **4,000+ TCE clusters**.'
  },

  // Agora
  {
    id: 'agora-revenue',
    company: 'Agora',
    companyTagline: 'Real-Time-Engagement PaaS',
    category: 'Revenue Performance',
    description: 'Accomplished **128% of the annual revenue target** (**$511K vs $400K goal**) by executing targeted go-to-market strategies and aligning cross-functional teams for SDK/API launches.'
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
    description: 'Accomplished a **33% influence rate** on closed-won opportunities by managing a Market Competitive Intelligence program that created battlecards to neutralize regional competitor advantages.'
  }
]
