'use client'

import { useState, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Globe, FileText, X, Copy, Check, Wrench, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import getBasePath from '../utils/path'

type CategoryType = 'AI/ML' | 'Analytics' | 'UX/UI Design' | 'Infrastructure' | 'Product' | 'Operations' | 'GTM' | 'Media Solutions';

interface KeyMetric {
  label: string;
  value: string;
}

interface TeamOverview {
  teamSize: string;
  scope: string;
  keyStakeholders: string[];
}

interface CaseStudy {
  problem: string;
  solution: string;
  impact: string[];
  teamOverview: TeamOverview;
}

interface FeaturedWorkItem {
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
  caseStudy: CaseStudy;
}

const featuredWorkData: FeaturedWorkItem[] = [
  {
    id: 'aiden-demo-playground',
    title: "Aiden Demo Playground",
    date: "12/19/2025",
    category: ['Infrastructure', 'GTM', 'Product'],
    company: 'StackGen',
    image: `${getBasePath()}/featuredwork_img/tryaiden-img.png`,
    metrics: [
      { label: "Page Views", value: "Track XXX view count and specific prompt use cases" },
      { label: "Time-to-PoC", value: "80% faster PoC creation for new  use cases based on recent feature or product releases" },
      { label: "Sign-Ups", value: "Track X% conversion of self-service sign-ups from prompt demo page views" }
    ],
    description: "0-1 GTM playground demo website for Aiden AI Agent to showcase proof-of-concept demos of AI-powered infrastructure capabilities.",
    skills: ['StackGen', 'AI Agent', 'Terraform', 'Cloud Infrastructure', 'Infrastructure as Code', 'Cursor AI', 'Next.js', 'Vercel', 'Grafana'],
    demo: 'https://drive.google.com/file/d/1IIhCIssA1yvXj2nYfCpEjm-NIbNBU524/view?usp=sharing',
    website: 'https://tryaiden.stackgen.com/',
    caseStudy: {
      problem: "Demonstrating Aiden’s AI infrastructure use cases required heavy setup across integrations, skills, tasks, and prompt engineering, making demos fragile and time-consuming. This slowed sales cycles and limited marketing’s ability to consistently showcase real-world use cases.",
      solution: "Built an interactive demo playground for GTM enablement, featuring guided setup of Aiden’s integrations, skills, tasks, and knowledge base, plus 13+ persona-based prompt flows—enabling repeatable demos, faster sales cycles, and clearer value storytelling.",
      impact: [
        "Drove a 70% increase in demo bookings at in-person events including KubeCon and AWS re:Invent 2025",

        "Achieved 2.6K page views in the first 60 days post-launch, signaling strong GTM traction",

        "Enabled Sales and Marketing to run PoC demos on demand, eliminating repeated setup and reducing dependency on Solutions and Product Engineering resources"
      ],
      teamOverview: {
        teamSize: "2 (1 engineers, I functioned as the PM, UX Designer, and Frontend Engineer)",
        scope: "Used for Marketing campaigns, Sales Outreach, In-Person Event Booth Demos, Website content, blogs, and more",
        keyStakeholders: ["Platform Engineer", "SREs", "App Developers", "DevOps Engineers"]
      }
    }
  },
  {
    id: 'devinfra-product-operations',
    title: "DevInfra Platform Developer Experience",
    date: "03/15/2025",
    category: ['Infrastructure', 'Product', 'Operations'],
    company: 'ByteDance',
    image: `${getBasePath()}/featuredwork_img/bits-workbench.png`,
    metrics: [
      { label: "platform scope", value: "17+ DevInfra tools and tenants supporting overseas developers (excluding China)" },
      { label: "resolution rate", value: "+19.7% (45.79% → 65.49%, goal: 70%)" },
      { label: "satisfaction score", value: "+0.85 (7.5 → 8.35, goal: 8)" },
      { label: "user feedback resolution", value: "+25% (50% → 75%, goal: 60%)" },
      { label: "on-call low score reduction", value: "-28.53% (3.89% → 2.78%, goal: <5%)" },
    ],

    description: "A product operations and developer experience (DX) transformation initiative for ByteDance’s Overseas DevInfra Platform, focused on improving reliability, feedback resolution, and satisfaction across 17+ DevOps and infrastructure tools used by global engineering teams outside China.",

    skills: [
      'Product operations',
      'Developer experience (DX)',
      'Cross-region stakeholder management',
      'Metrics & dashboarding',
      'Feedback systems & survey design',
      'Incident & on-call analysis',
      'Process design & continuous improvement',
    ],

    caseStudy: {
      problem: "ByteDance’s DevInfra Platform supported overseas engineering teams across 17+ DevOps and infrastructure tools, but developer experience was poor due to lack of localization of product for overseas developer teams. Most operational processes and success metrics were designed for China-based teams, resulting in limited visibility into overseas developer pain points, slower feedback resolution, inconsistent support quality, and declining satisfaction. Leadership needed a scalable operating model to improve DX and reliability for global developers.",

      solution: "Owned Product Operations for the Overseas DevInfra Platform end-to-end (from feature requirement to monitoring developer tools). Established a structured operating model to measure, analyze, and improve developer experience across regions. Built dashboards and reporting mechanisms to track key DX metrics on a weekly, monthly, and quarterly basis, including resolution rate, satisfaction score, feedback closure, and on-call quality. Designed and deployed developer surveys and feedback pipelines tailored to overseas teams, then conducted qualitative interviews with developers who reported low satisfaction or repeated issues. Partnered with Product, R&D, and Support teams across time zones to identify chronic issues, prioritize fixes, and drive accountability. Created improvement proposal documents that translated DX insights into concrete product and operational changes, and continuously monitored outcomes to ensure sustained improvement.",

      impact: [
        "Improved overall issue resolution rate by +19.7%, approaching the target benchmark despite regional constraints",
        "Increased developer satisfaction score from 7.5 to 8.35, exceeding the target goal of 8",
        "Raised user feedback resolution rate by +25%, significantly surpassing the original goal",
        "Reduced on-call low-score incidents by 28.53%, bringing reliability well within acceptable thresholds",
        "Established a repeatable product operations framework for overseas DevInfra teams, improving long-term scalability and transparency"
      ],
      teamOverview: {
        teamSize: "Varies (Depending on the platform team, it can range from  5-50 Product & RD teammates. I acted as the Overseas Product Operations Manager)",
        scope: "All subsidiary business unit and platform engineering teams under the ByteDance (e.g. TikTok, Douyin, Lark, CapCut, etc), but primarily targeting overseas (non-China) teams",
        keyStakeholders: ["DevOps Engineers", "Platform Engineers", "Tech Leads", "App Developers"]
      }
    }
  },
  {
    id: 'iac-deployment-app',
    title: "IaC Deployment Platform Product",
    date: "01/15/2025",
    category: ['Infrastructure', 'Product', 'GTM'],
    company: 'ByteDance',
    image: `${getBasePath()}/featuredwork_img/rolloutsystem.png`,
    metrics: [
      { label: "Scale of Deployments", value: "320K with several thousand resources per deployment" },
      { label: "Adoption", value: "25+ platform and app engineering teams across ByteDance" },
      { label: "Developer Cost Savings", value: "Average of $XX millions per project" }
    ],
    description: "A 0-to-1 intent-based IaC product that simplifies global infrastructure provisioning, management, and deployment orchestration. Integrated into an end-to-end DevOps platform from requirements to observability, serving overseas (non-China) ByteDance engineering teams.",
    skills: ['Figma', 'React', 'IaC', 'SCM', 'CI/CD', 'DevOps Platform', 'Observability'],
    demo: 'https://www.figma.com/proto/NdFRq7UsKkyrfIFddtZitG/RLS-Q32024?node-id=36-27387&t=PDo2dUO7bLGzoPVl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    diagram: 'https://miro.com/app/board/uXjVIAVfeT0=/?share_link_id=737365740298',
    caseStudy: {
      problem: "Many internal engineering teams (e.g., TikTok, Lark, CapCut) relied on DIY, manual infrastructure provisioning because existing platform tools could not support global, large-scale deployments across both greenfield and brownfield environments.",
      solution: "Built an intent-based IaC deployment platform that abstracts global infrastructure complexity. By defining desired outcomes instead of manual configs, it enabled consistent greenfield and brownfield deployments across regions through a unified global IaC layer on top of existing platform tools.",
      impact: [
        "Reduced large-scale global greenfield deployment time by 50% (e.g. data center bringups in a country like Singapore)",
        "Reduced large-scale global brownfield deployment time by 30–50%, depending on deployment complexity and resource count",
        "Reduced required engineering effort by an average of 80% through automated provisioning and deployment",
        "Enabled a TikTok engineering team to execute 320K deployments, each with thousands of resources, delivering ~$10M in engineering cost savings by reducing 200–300 engineers and deployment time by ~50% (from 6 months to under 3 months)",

      ],
      teamOverview: {
        teamSize: "7 (6 engineers, I was the PM & Figma UX Designer)",
        scope: "All subsidiary business unit and platform engineering teams under the ByteDance (e.g. TikTok, Douyin, Lark, CapCut, etc), but primarily targeting overseas (non-China) teams",
        keyStakeholders: ["DevOps Engineers", "Platform Engineers", "Tech Leads", "App Developers"]
      }
    }
  },
  {
    id: 'feature-gate',
    title: "Feature Gate Platform Product",
    date: "12/20/2024",
    category: ['Infrastructure', 'Product', 'GTM'],
    company: 'ByteDance',
    image: `${getBasePath()}/featuredwork_img/bytegate.png`,
    metrics: [
      { label: "MAU Growth", value: "30 → 500" },
      { label: "# of Feature Gates", value: "+80% (489 → 2392)" },
      { label: "Engineering Team Adoption", value: "+81% (44 → 236)" }
    ],
    description: "A 0-to-1 feature flagging platform purpose-built for monorepo architectures, enabling controlled feature rollouts. Integrated into an end-to-end DevOps platform from requirements to observability, serving overseas (non-China) ByteDance engineering teams.",
    skills: ['Figma', 'React', 'Monorepo', 'Feature Flagging', 'DevOps Platform', 'Observability'],
    demo: 'https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/feature-gate-Q3-2024?node-id=1-52481&t=td5ZU4pdPnNBlpLM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    diagram: 'https://miro.com/app/board/uXjVIAKWrLw=/?share_link_id=523562170775',
    caseStudy: {
      problem: "Teams needed to increase development velocity without raising production risk or blocking deployments. At the same time, ByteDance mandated a move to monorepo architecture, but existing internal feature flag tools and DIY solutions were not designed to support it.",
      solution: "Designed and launched a 0-to-1 feature flagging product in under a year, optimized for monorepo architectures. It provided a lightweight, standardized alternative to DIY solutions, enabling easy adoption aligned with ByteDance’s monorepo mandate and minimal operational overhead.",
      impact: [
        "Increased product adoption by 81%, expanding from 44 to 236 engineering teams across ByteDance, including Volcano Engine, TikTok, Douyin, Lark, and CapCut",
        "Increased feature gate usage by 80%, growing from 489 to 2,392 feature gates",
        "Increased monthly active usage by 15×, scaling from 30 to 500 MAU"
      ],
      teamOverview: {
        teamSize: "3 (2 engineers, I was the PM & Figma UX Designer)",
        scope: "All subsidiary engineering teams under the ByteDance (e.g. TikTok, Douyin, Lark, CapCut, etc), but primarily targeting overseas (non-China) teams",
        keyStakeholders: ["Platform Engineers", "App Developers ", "Product Manager"]
      }
    }
  },
  {
    id: 'ai-ide',
    title: "AI IDE Launch",
    date: "11/20/2024",
    category: ['Infrastructure', 'Product', 'GTM'],
    company: 'ByteDance',
    image: `${getBasePath()}/featuredwork_img/marscode_ide.png`,
    metrics: [
      { label: "beta sign-ups", value: "7,204 total seed users acquired" },
      { label: "traffic attribution", value: "37% paid (2,815 users), 63% organic (4,389 users)" },
      { label: "user acquisition cost", value: "$0.53 per user across SEA & CN" },
    ],

    description: "A 0→1 GTM and demand-generation initiative for the MarsCode (now Trae.ai) AI IDE Beta launch in the SEA region, focused on messaging & positioning, email campaign , and early user signal validation.",
    website: 'https://trae.ai/',
    skills: [
      'Product marketing (PMM)',
      '0→1 GTM strategy',
      'Email marketing & lifecycle campaigns',
      'AI developer tooling positioning',
      'Growth experimentation',
      'Website messaging & copywriting',
      'Cross-regional GTM execution',
    ],

    caseStudy: {
      problem: "MarsCode was launching a new AI-powered IDE and SRE assistant as a Beta product in a competitive developer tooling market. As a 0→1 product, it lacked brand awareness, proven positioning, and an established acquisition engine—particularly in the SEA region. The team needed to validate early demand, communicate the value of an AI-native IDE clearly, and acquire Beta users efficiently without overspending on paid channels.",

      solution: "Supported the Beta GTM as Product Marketing Manager by owning messaging, positioning, and early acquisition strategy. Defined the core value proposition for MarsCode as an AI-native IDE designed to augment developer productivity and SRE workflows. Built and executed a targeted email marketing campaign using Instantly.ai, sourcing and activating ~10K seed developer leads in SEA (southeast asia) region. Optimized email copy, sequencing, and targeting to balance paid and organic growth. In parallel, partnered with Product and Web teams to refine website messaging and onboarding flows so that landing pages reinforced the Beta narrative and reduced drop-off from email to sign-up. Continuously monitored channel performance and acquisition efficiency to iterate on campaign structure and messaging.",

      impact: [
        "Achieved 7,204 Beta sign-ups across SEA & CN, validating early demand for an AI IDE product",
        "Drove 63% of sign-ups organically, demonstrating strong message-market resonance beyond paid acquisition",
        "Maintained a low acquisition cost of $0.53 per user, enabling scalable early-stage growth",
        "Established a repeatable GTM motion for future regional launches and post-Beta expansion",
        "Provided early user signal and channel insights to inform post-Beta positioning and roadmap decisions"
      ],
      teamOverview: {
        teamSize: "10+ (I was acting as Product Marketing Manager. Worked with Product Mangers, Product Operations Managers, Developers, and Technical Program Managers.)",
        scope: "SEA region (excluding China)",
        keyStakeholders: ["App Developers "]
      }
    }
  },
  {
    id: 'agora_pricing_strategy',
    title: "Product & Solutions Pricing Strategy and Enablement",
    date: "03/15/2023",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_calculator.png`,
    metrics: [
      { label: "revenue estimation", value: "$$K MRR or $$M ARR" },
      { label: "product usage estimation", value: "X product estimated X minutes per month" },

    ],
    description: "A revenue forecasting and time-to-value optimization initiative at Agora, focused on enabling accurate usage-based cost estimation and accelerating customer launch for real-time engagement (RTE) use cases.",
    skills: [
      'Excel',
      'React App',
      'Figma',
      'Real time usage billing model',
      'Monetization strategy',
    ],
    tool: 'https://docs.google.com/spreadsheets/d/1JDE9hvlx0b_l9mdx4axN5RR4fgqAyHuXOxtDDnwkuvE/edit?usp=sharing',
    document: 'https://drive.google.com/file/d/1iai6K2x_Fi9max1P1gyL5f-_qwC3wElm/view?usp=sharing',
    caseStudy: {
      problem: "Agora’s usage-based pricing model made revenue forecasting highly inaccurate because Sales teams lacked a consistent way to estimate customer use cases. Sales prioritized contract signing over launch readiness, resulting in customers taking 6–12 months on average to deploy Agora-powered solutions, delaying revenue realization and reducing forecast reliability.",
      solution: "Designed an end-to-end solution framework to connect technical use case design with cost estimation and monetization. Created an RTE Solution Playbook to standardize session-based use case design (audio, video, chat) and map them to the correct Agora products. Built a robust cost estimation calculator that modeled multiple pricing dimensions (minutes, bandwidth, storage, users, add-ons) to accurately project session, monthly, and annual costs. Advised customers on monetization strategies aligned with their use cases (per session, per minute, per user, device-based). Integrated use case schemas with Agora App Builder to enable rapid app deployment, reducing friction from concept to launch.",
      impact: [
        "Improved opportunity value estimation accuracy by ~90% through use-case-driven cost modeling",
        "Reduced proof-of-concept launch time from ~1 month to hours for most base to emerging intermediate use cases by removing commercial friction",
        "Shortened production launch timelines from 6–12 months to under 3 months for most use cases by removing commercial friction (50–75% improvement)",
        "Established a repeatable, scalable framework for Sales, Solutions, and customers to design, price, and launch Agora-powered applications"
      ],

      teamOverview: {
        teamSize: "3 (2 engineers, 1 Product Designer. I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Product Managers", 'Finance Teams']
      }
    }
  },
  {
    id: 'agora_pricing_strategy',
    title: "Product & Solutions Pricing Strategy",
    date: "05/15/2023",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_calculator.png`,
    metrics: [
      { label: "revenue estimation", value: "$$K MRR or $$M ARR" },
      { label: "product usage estimation", value: "X product estimated X minutes per month" },

    ],
    description: "A revenue forecasting and time-to-value optimization initiative at Agora, focused on enabling accurate usage-based cost estimation and accelerating customer launch for real-time engagement (RTE) use cases.",
    skills: [
      'Excel',
      'React App',
      'Figma',
      'Real time usage billing model',
      'Monetization strategy',
    ],
    tool: 'https://docs.google.com/spreadsheets/d/1JDE9hvlx0b_l9mdx4axN5RR4fgqAyHuXOxtDDnwkuvE/edit?usp=sharing',
    document: 'https://drive.google.com/file/d/1iai6K2x_Fi9max1P1gyL5f-_qwC3wElm/view?usp=sharing',
    caseStudy: {
      problem: "Agora’s usage-based pricing model made revenue forecasting highly inaccurate because Sales teams lacked a consistent way to estimate customer use cases. Sales prioritized contract signing over launch readiness, resulting in customers taking 6–12 months on average to deploy Agora-powered solutions, delaying revenue realization and reducing forecast reliability.",
      solution: "Designed an end-to-end solution framework to connect technical use case design with cost estimation and monetization. Created an RTE Solution Playbook to standardize session-based use case design (audio, video, chat) and map them to the correct Agora products. Built a robust cost estimation calculator that modeled multiple pricing dimensions (minutes, bandwidth, storage, users, add-ons) to accurately project session, monthly, and annual costs. Advised customers on monetization strategies aligned with their use cases (per session, per minute, per user, device-based). Integrated use case schemas with Agora App Builder to enable rapid app deployment, reducing friction from concept to launch.",
      impact: [
        "Improved opportunity value estimation accuracy by ~90% through use-case-driven cost modeling",
        "Reduced proof-of-concept launch time from ~1 month to hours for most base to emerging intermediate use cases by removing commercial friction",
        "Shortened production launch timelines from 6–12 months to under 3 months for most use cases by removing commercial friction (50–75% improvement)",
        "Established a repeatable, scalable framework for Sales, Solutions, and customers to design, price, and launch Agora-powered applications"
      ],

      teamOverview: {
        teamSize: "3 (2 engineers, 1 Product Designer. I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Product Managers", 'Finance Teams']
      }
    }
  },

  {
    id: 'agora_MCI',
    title: "Agora Market Competitive Intelligence",
    date: "04/15/2023",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_mci.png`,
    metrics: [
      { label: "battlecards created", value: "10+ competitor battlecards covering key market competitors" },
      { label: "benchmarks executed", value: "6+ technical benchmark tests across audio & video solutions" },

    ],

    description: "Owned Market Competitive Intelligence (CI) and Technical Benchmarking program at Agora, designed to produce actionable battlecards, competitor comparison matrices, and media solution performance benchmarks versus key rivals (Zoom, Twilio, Vonage) to support strategic positioning, sales engagements, and product differentiation.",

    skills: [
      'Competitive intelligence',
      'Technical benchmarking',
      'Cross-functional enablement',
      'Product positioning',
      'Content strategy',
      'Sales & solutions enablement',
      'Market analysis',
      'CompeteIQ'
    ],

    caseStudy: {
      problem: "Agora operated in a crowded real-time engagement (RTE) market where Sales, Marketing, and Product teams needed reliable, up-to-date competitive intelligence to position Agora against entrenched incumbents and emerging rivals. Without a centralized CI program, teams were creating ad-hoc competitor content, leading to inconsistency, outdated claims, and positioning gaps during customer engagements and product planning.",

      solution: "Designed and led a recurring Competitive Intelligence & Technical Benchmark program that synthesized quantitative performance data, market pricing, feature differentiation, and use case comparisons. Built a structured framework for intelligence gathering across primary competitors (Zoom, Twilio, Vonage, and others). Produced a suite of competitive assets including battlecards, competitor comparison matrices, objection-handling playbooks, and detailed technical benchmark reports for both audio and video solutions. Benchmarks included head-to-head performance tests documented in resources such as [Zoom evaluation guidance](https://www.agora.io/en/blog/zoom-out-and-look-at-the-big-picture-when-evaluating-real-time-engagement-solutions/), [Agora vs Zoom comparison](https://www.agora.io/en/blog/agora-vs-zoom-look-at-the-big-picture/), [multi-party mobile video testing](https://www.agora.io/en/blog/agora-vs-zoom-multi-party-mobile-video-testing/), [Agora vs Twilio web video benchmark](https://www.agora.io/en/blog/testing-agora-vs-twilio-for-multi-party-web-video-calls/), and [Agora vs Vonage mobile video testing](https://www.agora.io/en/blog/testing-agora-vs-vonage-for-1-to-1-mobile-video-calls/). Collaborated with Product, Solutions, and GTM teams to keep benchmarks updated on quarterly cadence and aligned with evolving product capabilities and market trends.",

      impact: [
        "Equipped Sales with 10+ battlecards and comparison matrices that increased competitive win rates in target enterprise segments",
        "Provided Solutions teams with technical benchmark data that improved demo credibility and objection handling in RFPs",
        "Enabled Product and Marketing to align release messaging with real differentiation backed by empirical performance data",
        "Standardized competitive knowledge across teams, reducing ad-hoc research time and improving response speed to competitive threats",
        "Instituted a repeatable quarterly cadence for CI updates tied to product releases, market shifts, and emerging competitor moves"
      ],

      teamOverview: {
        teamSize: "3 (2 engineers, I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Developers", 'Product Managers']
      }
    }
  },
  {
    id: 'agora_full_path_accelerator',
    title: "Agora Full Path Accelerator RoW Launch",
    date: "11/15/2022",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_fpa.png`,
    metrics: [
      { label: "revenue estimation", value: "$$K MRR or $$M ARR" },
      { label: "product usage estimation", value: "X product estimated X minutes per month for the media type (audio, video, chat, etc) that was being accelerated" },

    ],
    description: "A product-market fit (PMF) validation and go/no-go decision initiative for a Network Accelerator (Full Path Accelerator, FPA) at Agora, focused on technical performance benchmarking, unit economics viability, and GTM risk assessment in the US/ROW market.",

    skills: [
      'Product management',
      'Product marketing (PMM)',
      'PMF validation',
      'Technical benchmarking',
      'GTM strategy',
      'Unit economics & COGS analysis',
      'Competitive analysis',
      'Executive decision-making',
    ],

    caseStudy: {
      problem: "Agora aimed to expand its SD-RTN (software-defined real-time network) into a Network Accelerator SDK (FPA) for US/ROW markets after an initial China launch. However, the product showed inconsistent performance during staging tests, lacked a complete NPI foundation, and had unclear monetization viability. Leadership needed a data-driven decision on whether to proceed with launch or reallocate resources.",

      solution: "Took over ownership as acting PM/PMM after the original PM exited, consolidating product, GTM, and PMF validation responsibilities. Conducted extensive internal benchmarking across mobile, desktop, and web environments, comparing FPA performance against the public internet under normal and degraded network conditions. Partnered with China R&D and Product teams to attempt demo and performance optimizations while closing NPI gaps. Performed cross-vertical opportunity and unit economics analysis to evaluate COGS versus revenue potential for target enterprise use cases. Analyzed historical GTM performance in China and conducted a competitive post-mortem on Subspace, identifying structural margin and cost issues inherent to network accelerator businesses.",

      impact: [
        "Identified that FPA underperformed or failed to outperform the public internet in ~60% of degraded network scenarios, invalidating its core value proposition",
        "Determined that projected COGS and margin profiles were weak for target enterprise use cases, limiting long-term profitability",
        "Confirmed lack of meaningful PMF or customer traction from prior China GTM efforts",
        "Made a data-backed recommendation to cancel the US/ROW production launch, preventing sunk GTM costs and misallocation of engineering and go-to-market resources",
        "Redirected investment toward higher-confidence products with stronger performance differentiation and monetization potential"
      ],

      teamOverview: {
        teamSize: "4 (3 engineers, 1 Platform Product Manager (China). I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Developers", 'Product Managers']
      }
    }
  },

  {
    id: 'agora_malicious_usage',
    title: " Malicious Free Usage Abuse Prevention",
    date: "10/15/2022",
    category: ['Operations', 'Media Solutions', 'Product', 'GTM'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_malicious.png`,
    metrics: [
      { label: "non-malicious sign-ups", value: "Tracked # of normal sign-ups from non-malicious accounts" },
      { label: "region", value: "% of requests from a given country" },
      { label: "free-usage cost", value: "Tracked $ of free-usage cost per month" },
      { label: "malicioius accounts", value: "Tracked # of malicious accounts" },

    ],
    description: "A cross-functional anti-malicious usage initiative for Agora's PLG Console in the US–RoW region, designed to curb free-tier abuse while preserving healthy organic sign-ups and seamless onboarding.",
    skills: ['Root Cause Analysis', 'Internal Analytics Dashboards', 'User Journey Mapping', 'Usage Governance & Policy Enforcement'],
    caseStudy: {
      problem: "Agora’s PLG Console faced escalating free-tier abuse driven by malicious account creation and session manipulation, significantly increasing operational costs. At the same time, the company needed to preserve frictionless onboarding and organic growth for legitimate developers. Goals and requirements were initially undefined due to an abrupt PM transition.",
      solution: "Led a rapid cross-regional initiative with China engineering and analytics teams to design and implement anti-abuse mechanisms. Conducted end-to-end console UX audits, analyzed account and usage data to uncover abuse patterns, and identified India as a major source of systematic free-tier exploitation. Implemented real-time monitoring dashboards, IP-based abuse detection with manual review, tightened free-tier creation limits, and introduced a Trust Level System (New, Trusted, Verified) based on verification signals and behavior to balance abuse prevention with PLG growth.",
      impact: [
        "Reduced malicious accounts by 28% within one quarter",
        "Saved approximately $1M per month in operational costs",
        "Preserved seamless onboarding and healthy new sign-up volume for legitimate users",
        "Enabled scalable, data-driven abuse prevention without compromising product-led growth"
      ],
      teamOverview: {
        teamSize: "3 (2 engineers, 1 Product Operations Manager. I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Developers", "Operations", 'Console Platform RD Team']
      }
    }
  },
  {
    id: 'agora_cloud_proxy',
    title: "Agora Cloud Proxy Beta to GA RoW Launch",
    date: "09/15/2022",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_cloudproxy.png`,
    metrics: [
      { label: "revenue estimation", value: "$$K MRR or $$M ARR at GA readiness" },
      { label: "product usage estimation", value: "X customers estimated X million accelerated minutes/month across audio, video, and data channels" },
    ],

    description: "A Beta-to-GA RoW product launch initiative for Agora Cloud Proxy, focused on validating real customer demand, hardening production readiness, clarifying monetization, and enabling scalable go-to-market adoption for real-time media acceleration.",

    skills: [
      'Product management',
      'Product marketing (PMM)',
      'Beta-to-GA execution',
      'Customer discovery & validation',
      'Usage-based pricing & revenue modeling',
      'GTM readiness',
      'Cross-functional leadership',
      'Technical-to-business translation',
    ],

    caseStudy: {
      problem: "Agora Cloud Proxy existed in Beta as a powerful but under-defined infrastructure capability that enabled customers to route real-time traffic through Agora’s network for acceleration and control. However, Beta usage was fragmented, documentation and positioning were unclear, and Sales lacked confidence in how to scope use cases, estimate usage, or position the product commercially. Leadership needed a clear path to determine whether Cloud Proxy was production-ready and commercially viable for GA for RoW.",

      solution: "Partnered with Product, Engineering, Sales, and Solutions to take Cloud Proxy from Beta to GA by aligning technical capability with real customer use cases and monetization clarity. Led customer discovery with Beta users to identify high-value scenarios such as cross-region media relay, private network access, firewall traversal, and enterprise compliance routing. Translated these patterns into clearly defined GA use cases, pricing guidance, and reference architectures. Built usage and revenue estimation models to help Sales forecast accelerated traffic volume and ARR impact. Closed GA gaps by driving documentation readiness, solution demos, GTM enablement materials, and internal Sales training to ensure consistent positioning and launch confidence.",

      impact: [
        "Established clear GA-ready use cases that aligned Cloud Proxy capabilities with real customer demand, mainly as a necessary add-on to unblock enterprise deals",
        "Enabled Sales to confidently estimate usage-based revenue and forecast ARR through standardized usage modeling by supporting use case based pricing calcalator",
        "Successfully supported the transition of Cloud Proxy from Beta to GA, unlocking scalable commercial deployment for RoW"
      ],
      teamOverview: {
        teamSize: "3 (2 engineers, 1 Platform Product Manager (China). I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Developers", 'Product Managers']
      }
    }
  },
  {
    id: 'agora_ncs',
    title: "Agora Notification Center Service Beta to GA RoW Launch",
    date: "09/15/2022",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_ncs.png`,
    metrics: [
      { label: "adoption at GA", value: "XX+ customers enabled via self-service in Agora Console" },
      { label: "operational efficiency", value: "Reduced manual enablement & support dependency by ~X%" },
      { label: "time-to-enable", value: "Cut customer onboarding time from days to minutes" },
    ],

    description: "A Beta-to-GA productization and self-service enablement initiative for Agora Notification Control Services (NCS), focused on turning an internal-facing capability into a scalable, customer-facing platform feature within the Agora Console.",

    skills: [
      'Product management',
      'Product marketing (PMM)',
      'Beta-to-GA execution',
      'Self-service platform design',
      'Developer experience (DX)',
      'GTM enablement',
      'Cross-functional execution',
    ],

    caseStudy: {
      problem: "Agora Notification Control Services (NCS) existed in Beta as a powerful internal capability for managing system and product notifications, but it was not designed for scalable customer adoption. Enablement was largely manual, documentation was limited, and customers could not easily configure or manage notifications themselves through the Agora Console. To reach GA, NCS needed clearer positioning, production readiness, and a self-service experience that reduced operational overhead while improving developer experience.",

      solution: "Led the effort to transition NCS from Beta to GA by aligning Product, Engineering, Console, and GTM teams around a self-service-first strategy. Defined GA-ready use cases and customer-facing value propositions for notification controls. Partnered with engineering to scope and deliver Console-based configuration flows that allowed customers to enable, customize, and manage notifications without manual intervention. Drove GA readiness by closing gaps across documentation, onboarding flows, permission models, and internal support playbooks. Enabled Sales and Solutions with clear guidance on when and how to position NCS, and ensured the product was discoverable, understandable, and operable directly within the Agora Console.",

      impact: [
        "Successfully launched NCS to GA with full self-service configuration available in the Agora Console",
        "Reduced reliance on internal support and manual enablement, improving operational scalability",
        "Improved customer onboarding experience by making notification management intuitive and configurable",
      ],

      teamOverview: {
        teamSize: "4 (2 engineers, 1 Platform Product Manager (China). I helped as PM/PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Developers", 'Product Managers']
      }
    }
  },
  {
    id: 'agora_signaling',
    title: "Agora Real-Time Messaging (RTM) to Signaling Repositioning",
    date: "08/15/2022",
    category: ['GTM', 'Media Solutions', 'Product'],
    company: 'Agora',
    image: `${getBasePath()}/featuredwork_img/agora_signaling.png`,
    metrics: [
      { label: "revenue impact", value: "$$$K ARR preserved and redirected through clear Signaling vs Chat positioning in RoW" },
      { label: "product usage", value: "X+ million signaling calls / messages processed monthly across RoW customers post-repositioning" },
    ],

    description: "A product portfolio repositioning and regional deprecation initiative that redefined Agora Real-Time Messaging (RTM) as Signaling, enabled the launch of Agora Chat as a dedicated messaging product, and safely deprecated legacy RTM usage in the RoW market.",

    skills: [
      'Product marketing (PMM)',
      'Product positioning & naming',
      'Product lifecycle management',
      'Deprecation & migration planning',
      'Developer documentation',
      'GTM alignment',
      'Cross-functional coordination',
    ],

    caseStudy: {
      problem: "By 2022, Agora Real-Time Messaging (RTM) was primarily used for lightweight signaling use cases, yet its positioning overlapped with plans to introduce Agora Chat as a full-featured chat product. This created confusion for customers and internal teams, increased the risk of mis-selling, and complicated the product roadmap. Additionally, Agora needed a clear deprecation and transition plan for RTM in the RoW market (excluding China), where product strategy and adoption patterns diverged.",

      solution: "Led a multi-part initiative to clarify Agora’s messaging portfolio while minimizing customer disruption. Repositioned RTM as 'Agora Signaling' to reflect its true role as an infrastructure-layer capability for presence, coordination, and state synchronization, distinct from conversational chat. Executed coordinated updates across developer documentation, product webpages, architecture diagrams, and GTM messaging. In parallel, partnered with Product, Engineering, Support, and Regional GTM teams to design and execute a phased deprecation plan for the original RTM product in RoW, including customer-facing notices, migration guidance, and internal escalation playbooks. Ensured China market strategy remained unaffected while RoW customers were guided toward Signaling or Agora Chat based on their use cases.",

      impact: [
        "Preserved and clarified revenue streams by preventing overlap and cannibalization between Signaling and Chat offerings",
        "Maintained high-volume signaling traffic across RoW customers through a controlled RTM transition",
        "Reduced customer confusion and mis-implementation during the Chat launch",
        "Enabled sustainable growth of Agora Chat while retaining infrastructure-layer signaling usage"
      ],

      teamOverview: {
        teamSize: "4 (2 engineers, 1 Platform Product Manager (China), 1  Product Manager (India). I helped as PMM on Overseas (non-China) side)",
        scope: "Global (US–RoW) region (excluding China)",
        keyStakeholders: ["Developers", 'Product Managers']
      }
    }
  },
  {
    id: 'grampages',
    title: "GramPages",
    date: "12/15/2019",
    category: ['Analytics', 'Product', 'GTM'],
    company: 'Side Project',
    image: `${getBasePath()}/featuredwork_img/grampages.png`,
    metrics: [
      { label: "Sign-Up", value: "Tracked # of " },
      { label: "Impressions", value: "Tracked # of" },

    ],
    description: "A bootstraped side project, GramPages provides engagement analytics for Instagram to empower influencers to make content creation decisions that will yield the greatest impact (no longer hosted, private GitHub repo).",
    skills: ['JavaScript', 'CSS', '3rd Party API', 'React', 'Redux', 'React-Router', 'Express', 'Node.js', 'MongoDB', 'Mongoose'],
    caseStudy: {
      problem: "Instagram influencers lacked actionable insights into their content performance. Without analytics, creators were making content decisions based on intuition rather than data, limiting their growth potential.",
      solution: "Developed an analytics platform that provides detailed engagement analytics for Instagram accounts. The platform analyzes content performance, identifies trends, and provides recommendations to help influencers optimize their content strategy.",
      impact: [
        "Empowered influencers with data-driven insights to optimize content creation and posting strategies.",
        "Helped creators identify their best-performing content types and optimal posting times for maximum engagement.",
        "Provided actionable analytics that enabled influencers to grow their following and improve engagement rates."
      ],
      teamOverview: {
        teamSize: "3 (3 engineers. I helped as PM and Frontend Engineer)",
        scope: "Side project deployed with small organic usage",
        keyStakeholders: ["Social Media Strategist", "Instagram Influencers", 'Marketing Teams']
      }
    }
  },

]

const categoryColors: Record<CategoryType, string> = {
  'AI/ML': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Analytics': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'UX/UI Design': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Infrastructure': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Product': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  'Operations': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  'GTM': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  'Media Solutions': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
}

// Helper function to parse MM/DD/YYYY date format to Date object
const parseDate = (dateString: string): Date => {
  const [month, day, year] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}

// Helper function to parse markdown links and convert them to clickable links
const parseMarkdownLinks = (text: string): ReactNode[] => {
  if (!text) return []

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match
  let key = 0

  // Reset regex lastIndex to ensure fresh search
  linkRegex.lastIndex = 0

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      const textBefore = text.substring(lastIndex, match.index)
      if (textBefore) {
        parts.push(<span key={`text-${key++}`}>{textBefore}</span>)
      }
    }
    // Add the link
    parts.push(
      <a
        key={`link-${key++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {match[1]}
      </a>
    )
    lastIndex = linkRegex.lastIndex
  }
  // Add remaining text after the last link
  if (lastIndex < text.length) {
    const textAfter = text.substring(lastIndex)
    if (textAfter) {
      parts.push(<span key={`text-${key++}`}>{textAfter}</span>)
    }
  }

  return parts.length > 0 ? parts : [text]
}

const ITEMS_PER_PAGE = 3

export default function FeaturedWork() {
  const [selectedWork, setSelectedWork] = useState<FeaturedWorkItem | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)

  // Handle company filter change
  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value)
    setCurrentPage(1) // Reset to first page when filtering
    // Close any open case study when filtering
    setSelectedWork(null)
  }

  // Get unique companies from featured work data
  const companies = useMemo(() => {
    const uniqueCompanies = Array.from(new Set(featuredWorkData.map(item => item.company)))
    return uniqueCompanies.sort()
  }, [])

  // Sort and filter featured work by date (newest first) and company
  const sortedFeaturedWork = useMemo(() => {
    // Create a copy of the data
    let filtered = [...featuredWorkData]

    // Filter by company if not 'All'
    if (selectedCompany !== 'All') {
      filtered = filtered.filter(item => item.company === selectedCompany)
    }

    // Sort by date (newest first) - create new array to avoid mutating original
    return [...filtered].sort((a, b) => {
      try {
        const dateA = parseDate(a.date).getTime()
        const dateB = parseDate(b.date).getTime()
        return dateB - dateA // Descending order (newest first)
      } catch (error) {
        // If date parsing fails, keep original order
        console.error('Error parsing date:', error, a.date, b.date)
        return 0
      }
    })
  }, [selectedCompany])

  // Calculate pagination - memoize to ensure it updates when currentPage or sortedFeaturedWork changes
  const totalPages = useMemo(() => {
    return Math.ceil(sortedFeaturedWork.length / ITEMS_PER_PAGE)
  }, [sortedFeaturedWork.length])

  const paginatedFeaturedWork = useMemo(() => {
    return sortedFeaturedWork.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )
  }, [sortedFeaturedWork, currentPage])

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  useEffect(() => {
    // Check if there's a hash in the URL and open the corresponding case study
    const hash = window.location.hash.replace('#featured-work-', '').replace('#', '')
    if (hash) {
      const work = sortedFeaturedWork.find(item => item.id === hash)
      if (work) {
        setSelectedWork(work)
      }
    }
  }, [])

  const handleCopyLink = (e: React.MouseEvent, workId: string) => {
    e.stopPropagation()
    const url = `${window.location.origin}${window.location.pathname}#featured-work-${workId}`
    navigator.clipboard.writeText(url)
    setCopiedId(workId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleOpenCaseStudy = (work: FeaturedWorkItem) => {
    setSelectedWork(work)
    // Update URL hash without scrolling
    window.history.pushState(null, '', `#featured-work-${work.id}`)
  }

  const handleCloseCaseStudy = (open: boolean) => {
    if (!open) {
      setSelectedWork(null)
      // Remove hash from URL
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <section className="px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground font-sans tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-6xl mb-6">
            A selection of product or GTM initiatives that showcase strategic thinking, user empathy, and measurable results.
          </p>
          <div className="mb-8 w-64 mx-auto">
            <Select value={selectedCompany} onValueChange={handleCompanyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800">
                <SelectItem value="All" className="cursor-pointer">All Companies</SelectItem>
                {companies.map((company) => (
                  <SelectItem key={company} value={company} className="cursor-pointer">
                    {company}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6 mb-8">
              <Button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                aria-label="Next page"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-8" key={`${selectedCompany}-${currentPage}`}>
          {paginatedFeaturedWork.map((work) => (
            <div
              key={`${selectedCompany}-${currentPage}-${work.id}`}
              id={`featured-work-${work.id}`}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <div className="relative w-full md:w-64 h-64 bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                  {/* Header with date, category, and copy link */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-muted-foreground font-medium">
                        {work.date}
                      </span>
                      {work.category.map((cat) => (
                        <span key={cat} className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[cat]}`}>
                          {cat}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => handleCopyLink(e, work.id)}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                      aria-label="Copy link to case study"
                    >
                      {copiedId === work.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {work.title}
                  </h3>

                  {/* Metrics */}
                  {work.metrics && work.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200 rounded-md text-sm"
                        >
                          <span className="font-semibold text-amber-800 dark:text-amber-300">{metric.label}:</span>{' '}
                          <span className="font-medium text-amber-950 dark:text-amber-100">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-1">
                    {work.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-foreground mr-2">Skills:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {work.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.demo && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {work.repo && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Repo
                        </a>
                      </Button>
                    )}
                    {work.diagram && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.diagram} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-2" />
                          Diagram
                        </a>
                      </Button>
                    )}
                    {work.website && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </a>
                      </Button>
                    )}
                    {work.tool && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.tool} target="_blank" rel="noopener noreferrer">
                          <Wrench className="w-4 h-4 mr-2" />
                          Tool
                        </a>
                      </Button>
                    )}
                    {work.document && (
                      <Button asChild size="sm" variant="outline">
                        <a href={work.document} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Document
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Expand Case Study Button */}
                  <Button
                    onClick={() => handleOpenCaseStudy(work)}
                    variant="link"
                    className="self-start p-0 h-auto text-foreground hover:text-foreground/80"
                  >
                    Expand full case study →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Dialog */}
      {selectedWork && (
        <Dialog open={!!selectedWork} onOpenChange={handleCloseCaseStudy}>
          <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyLink(e, selectedWork.id)
                  }}
                  className="p-2 hover:bg-muted rounded-full transition-colors flex-shrink-0"
                  aria-label="Copy link to case study"
                >
                  {copiedId === selectedWork.id ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                <DialogTitle className="text-3xl font-bold flex-2">
                  {selectedWork.title}

                </DialogTitle>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {selectedWork.date}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {selectedWork.category.map((cat) => (
                  <span key={cat} className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[cat]}`}>
                    {cat}
                  </span>
                ))}
              </div>
              {(selectedWork.demo || selectedWork.repo || selectedWork.diagram || selectedWork.website || selectedWork.tool || selectedWork.document) && (
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-sm font-semibold text-red-600">Examples:</span>
                  {selectedWork.demo && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3 h-3 mr-1.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {selectedWork.repo && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1.5" />
                        Repo
                      </a>
                    </Button>
                  )}
                  {selectedWork.diagram && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.diagram} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-3 h-3 mr-1.5" />
                        Diagram
                      </a>
                    </Button>
                  )}
                  {selectedWork.website && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3 h-3 mr-1.5" />
                        Website
                      </a>
                    </Button>
                  )}
                  {selectedWork.tool && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.tool} target="_blank" rel="noopener noreferrer">
                        <Wrench className="w-3 h-3 mr-1.5" />
                        Tool
                      </a>
                    </Button>
                  )}
                  {selectedWork.document && (
                    <Button asChild size="sm" variant="outline" className="h-7">
                      <a href={selectedWork.document} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="w-3 h-3 mr-1.5" />
                        Document
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </DialogHeader>

            <div className="space-y-6">
              {/* Featured Image */}
              <div className="w-full">
                <div className="relative w-full h-[600px] bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={selectedWork.image || "/placeholder.svg"}
                    alt={selectedWork.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {selectedWork.description}
                </p>
              </div>

              {/* Metrics */}
              {selectedWork.metrics && selectedWork.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selectedWork.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200 rounded-lg text-sm"
                    >
                      <span className="font-bold text-amber-800 dark:text-amber-300">{metric.label}:</span>{' '}
                      <span className="font-medium text-amber-950 dark:text-amber-100">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">SKILLS</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team & Scope */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">TEAM OVERVIEW</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">TEAM SIZE:</span> {selectedWork.caseStudy.teamOverview.teamSize}
                  </div>
                  <div>
                    <span className="font-medium">SCOPE:</span> {selectedWork.caseStudy.teamOverview.scope}
                  </div>
                  <div>
                    <span className="font-medium">TARGET PERSONAS:</span> {selectedWork.caseStudy.teamOverview.keyStakeholders.join(', ')}
                  </div>
                </div>
              </div>

              {/* Problem */}
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">PROBLEM</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {parseMarkdownLinks(selectedWork.caseStudy.problem)}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-bold text-lg mb-2 text-foreground">SOLUTION</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {parseMarkdownLinks(selectedWork.caseStudy.solution)}
                </p>
              </div>

              {/* Impact */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">IMPACT</h4>
                <ul className="space-y-2">
                  {selectedWork.caseStudy.impact.map((impactItem, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="mr-2">•</span>
                      <span>{parseMarkdownLinks(impactItem)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

