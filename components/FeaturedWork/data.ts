import getBasePath from '../../utils/path'
import type { FeaturedWorkItem } from './types'

export const featuredWorkData: FeaturedWorkItem[] = [
  {
    id: 'stackgen-pricing-strategy',
    title: "StackGen Pricing Strategy",
    date: "01/25/2026",
    category: ['GTM', 'Product', 'DevOps', 'Pricing'],
    company: 'StackGen',
    image: `${getBasePath()}/featuredwork_img/stackgen-pricing.png`,
    metrics: [
      { label: "New Customer Conversion", value: "Test new public pricing model net new customer conversion rate" },
      { label: "ACV (average contract value)", value: "Test new customer acquistion and deal velocity " }
    ],
    description: "Led pricing strategy and packaging for StackGen's Autonomous Operations Platform, defining value metrics, tier structure, and sales enablement to support PLG and enterprise go-to-market.",
    skills: ['Pricing Strategy', 'Packaging', 'GTM Strategy', 'Product Marketing', 'Sales Enablement', 'Value Metrics', 'PLG', 'Enterprise Sales'],
    video: 'https://drive.google.com/file/d/1oRQ7Atbwfu19k8LqHMylPrNOrfp9jiXA/view?usp=sharing',
    caseStudy: {
      problem: "StackGen needed a clear pricing and packaging strategy to scale PLG and enterprise motions — but lacked defined value metrics, consistent tier structure, and sales enablement so Sales and prospects could understand pricing and ROI. Without structured pricing, deal velocity and conversion suffered and leadership had limited visibility into revenue and adoption.",
      solution: "As Product Marketing Manager, owned and drove pricing strategy by defining value-based packaging and tier structure aligned to the Autonomous Operations Platform narrative and to Infrastructure, DevOps, and SRE use cases. Developed pricing frameworks, discount guidance, and sales enablement materials so Sales could articulate value and close deals consistently. Partnered with Product, Sales, and leadership to align pricing to packaging, track adoption and deal metrics, and iterate on packaging and positioning.",
      impact: [
        "Established value-based packaging and tier structure that aligned pricing to platform value and buyer segments",
        "Enabled Sales with pricing frameworks and enablement to improve deal velocity and win rates",
        "Improved revenue and adoption visibility for leadership through clearer pricing and packaging",
        "Created product bundling pricing calculator for sales enablement"

      ],
      contentList: [
        "[Before & After Pricing Page](https://drive.google.com/file/d/15YACiAY20xrvGMjEJ6IMACSh_E-VXSay/view?usp=sharing)",
        "[Pricing Research Van Westendorp Price Sensitivity Framework](https://drive.google.com/file/d/1bo3vgGOsgvHBOtfarDFFyrnYxWCItJVs/view?usp=sharing)",
        "[Competitor Pricing Research for Infrastructure Product](https://docs.google.com/spreadsheets/d/1hpB87gzJXsRrlW53qfCbszS4PKPX2Nxf/edit?usp=sharing&ouid=113584550925046374551&rtpof=true&sd=true)",
        "[IaC and Aiden AI Agent pricing model comparisons](https://docs.google.com/spreadsheets/d/16cpDYHQjm-0qqdhGfF1jABGVz8MmspmN/edit?usp=sharing&ouid=113584550925046374551&rtpof=true&sd=true)",
        "[Early Figma Make Prototypes](https://drive.google.com/file/d/1vmtDNsqnc7BWaJUoXCMSNQuXHSxxKqPp/view?usp=sharing)",
        "[Product Bundling Pricing Calculator](https://docs.google.com/spreadsheets/d/1ORNb2pmk0pfTPh8rqop_T-OYvMhtVrp0/edit?usp=sharing&ouid=113584550925046374551&rtpof=true&sd=true)",
        "[Aiden for SRE Pricing Model Comparison](https://docs.google.com/spreadsheets/d/1XF39YVcJpgeG1IFhcqqrDqNowBmZdG4x/edit?usp=sharing&ouid=113584550925046374551&rtpof=true&sd=true)",
        "[Aiden for SRE RUM, User, Incident, AI SRE Instance Pricing Model](https://docs.google.com/spreadsheets/d/1YfExHh0Ij-iO8-1HWV89BpnMt_PBtToM/edit?usp=sharing&ouid=113584550925046374551&rtpof=true&sd=true)",

      ],
      teamOverview: {
        teamSize: "5+ (I lead as Product Marketing Manager and worked with Product, Solutions, Sales, and leadership)",
        scope: "Pricing strategy, packaging, tier structure, sales enablement, and revenue/adoption tracking",
        keyStakeholders: ["Product Manager", "Sales", "Solution Engineers", "Customer Success", "Partnership", "Leadership", "RevOps"]
      }
    }
  },
  {
    id: 'content-marketing',
    title: "StackGen Content Marketing",
    date: "02/25/2026",
    category: ['GTM', 'Product', 'DevOps',],
    company: 'StackGen',
    image: `${getBasePath()}/featuredwork_img/stackgen-content.png`,
    metrics: [
      { label: "Website Traffic", value: "Track Total Clicks, Total Impressions, Average CTR, Average Position, and more" }
    ],
    description: "Drove content marketing by producing 150+ multi-modal content assets (website, blog, social, video, PLG playgrounds) aligned to the Autonomous Operations Platform positioning narrative and to Platform Enginer, DevOps, App Developers,and SRE personas.",
    skills: ['Content Marketing', 'Content Strategy', 'SEO', 'Thought Leadership', 'Copywriting', 'Demand Generation', 'Blog & Web Content', 'GTM Strategy', 'Sales Enablement'],
    video: 'https://drive.google.com/file/d/1SGpBRVPqUgGikjYeUEbuo3pv0K5B-YJw/view?usp=sharing',
    caseStudy: {
      problem: "StackGen needed a scalable content engine to build awareness, capture search demand, and support pipeline — but lacked consistent product-led content, clear ownership of messaging across blogs and web, and content aligned to segment-specific keywords and buyer journeys. Without structured content marketing, organic reach and conversion from content remained limited and hard to measure. The marketing team was small (under 4 people), and I had to support content creation across 4 product lines: Aiden for DevOps, Aiden for SRE, Aiden for Infrastructure, and ObserveNow.",
      solution: "As Product Marketing Manager, owned and drove content creation by automating most content creation tasks using Claude Skills and Claude Cowork to defer 80% of content ideation and iteration with AI. Created and published blog posts, thought leadership pieces, and SEO-oriented web content tied to StackGen's Autonomous Operations Platform narrative and to Infrastructure, DevOps, and SRE use cases. Developed landing pages, solution-focused copy, and sales enablement content so marketing and sales could use consistent messaging across channels. Partnered with Demand Gen, RevOps, and Product to align content to campaigns, track performance (clicks, impressions, CTR, position), and iterate on what drives traffic and conversions.",
      impact: [
        "Since 07/29/2025 to 02/28/2026 metric comparisons, improved Total Clicks by 171%, Total Impressions by 1219%, Average Position improvement of 53%",
        "Automated 80% of content creation tasks using Claude Skills and Claude Cowork with AI driven content evaluation guardrails to defer 80% of content ideation and iteration with AI",
        "Created and published 150+ multi-modal content assets (website, blog, social, video, PLG playgrounds) aligned to the Autonomous Operations Platform positioning narrative and to Platform Enginer, DevOps, App Developers,and SRE personas",
        "Increased content publish speeds by 50% or more by using Claude Organization Skills to enforce content output, content evaluation scores, and content quality scores to help with final human review and approval from various stakeholders",
      ],
      contentList: [
        "[MCP Server for Platform Engineers Video](https://drive.google.com/file/d/15QQHSLpDe6WzsAAdCCwJFYobaW2Zv4Kk/view?usp=sharing)",
        "[MCP Server for Developers Video](https://drive.google.com/file/d/17F8DXNzky_3-9agt_Mz5GIHAa0BHyFq4/view?usp=sharing)",
        "[Innovacer Customer Case Study](https://drive.google.com/file/d/1-2naKq5S_b0rVu16rogJksFlm3w8x1o4/view?usp=sharing)",
        "[GreytHR Customer Case Study](https://drive.google.com/file/d/1CnET6qiw2hyfwvu6yqX9qjSlG0PJF6eJ/view?usp=sharing)",
        "[StackGen x Grafana - Social LinkedIn Post Video](https://drive.google.com/file/d/1UPyhrNESZyDQxoK4vcKqtfwpom2UI-0K/view?usp=sharing)",
        "[StackGen x Wiz Integration - Social LinkedIn Post Video](https://drive.google.com/file/d/1nXsdeyCNBr-GzhODEZfc7MQw6KaxjKrO/view?usp=sharing)",
        "[Claude Content Creation Org Skills](https://drive.google.com/file/d/1WIIRyHt0EiYym5IgdO1lo6iwR4nLmPi5/view?usp=sharing)", "[StackHealer (now Aiden for SRE) On AWS Partners Video](https://drive.google.com/file/d/1SpAVvX-IuajoFFwoPLUF1kHSeY4jQQE5/view?usp=sharing)",
        "[StackGen One Pager ](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=79-5054&t=iVHjaMqKRtJnJOnU-0&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)"

      ],
      teamOverview: {
        teamSize: "5+ (I lead as Product Marketing Manager and worked with Product, Solutions, Sales, and external Design & Web Development Agency)",
        scope: "Content marketing across blog, website, demand gen, social, PLG, events, and more)",
        keyStakeholders: ["Product Manager", "Demand Generation Manager", "RevOps Engineer", "Platform Engineers", "DevOps Engineers", "SRE"]
      }
    }
  },
  {
    id: 'event-marketing',
    title: "StackGen Event Marketing",
    date: "02/25/2026",
    category: ['GTM', 'Product', 'DevOps',],
    company: 'StackGen',
    image: `${getBasePath()}/featuredwork_img/stackgen-events.png`,
    metrics: [
      { label: "Demos Booked", value: "Track conversion of demos booked from event, website, and PLG channels for this event" }
    ],
    description: "Supported various in-person and virtual events for StackGen, including Hashiconf, KubeCon, AWS re:Invent, and DevOps 2.0 Mumbai by creating supporting content and outreach campaign messaging",
    skills: ['Event Marketing', 'Conference Strategy', 'Campaign Messaging', 'Demand Generation', 'Content Creation', 'Outreach & Lead Nurturing', 'Virtual & In-Person Events', 'GTM Strategy', 'Partner & Community Marketing'],
    video: 'https://drive.google.com/file/d/1feeyMXqvZ7-t3OwobnhXNRv5-O00lJjA/view?usp=sharing',
    caseStudy: {
      problem: "StackGen's key events — including HashiConf, KubeCon, AWS re:Invent, and DevOps 2.0 Mumbai — required consistent, audience-specific messaging and collateral to drive pipeline and demo bookings. Without dedicated product marketing support, event teams lacked standardized content, clear value propositions for each segment (Platform Engineering, DevOps, SRE), and coordinated outreach campaigns. That limited conversion and made it harder to measure event ROI.",
      solution: "As Product Marketing Manager, supported event marketing by creating and owning messaging collateral and content for in-person and virtual events. Developed event-specific value propositions and talking points aligned to each audience (Infrastructure, DevOps, SRE) and to StackGen's Autonomous Operations Platform narrative. Produced supporting content including landing pages, email and outreach campaign copy, booth and demo scripts, and sales enablement materials so field and marketing teams could speak consistently before, during, and after each event. Coordinated with Sales, Solutions, and event owners to align messaging to conference themes and track demo bookings from event, website, and PLG channels.",
      contentList: [
        "[DevOps 2.0 Mumbai Event Banners](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=53-9961&t=pCCSVoznJJcbjop5-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)",
        "[KubeCon 2025 One Pagers](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=47-11212&t=cy8iDcvCngYzeHc7-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)",
        "[KubeCon 2025 Landing Page](https://drive.google.com/file/d/1UG3nFPEdWi62Na_5hB81oGDeiTEi1xjs/view?usp=sharing)",
        "[KubeCon 2025 Banner](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=53-10324&t=f75dGRiYkTIVqmR0-1&scaling=scale-down&content-scaling=fixed&page-id=39%3A10983)",
        "[AWS Re:Invent 2025 One Pagers](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=46-6433&t=8AXEHTvuv4Sia8oO-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)",
        "[AWS Re:Invent 2025 Booth Design](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=66-5627&t=ytTzZUhCKdxUdLFB-1&scaling=scale-down&content-scaling=fixed&page-id=39%3A10983)",
        "[DevOps 2.0 Mumbai 2026 One Pagers](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=53-8509&t=mK0B7HcTzptBTM8x-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)",
        "[DevOps 2.0 Mumbai 2026 Banners](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=53-9961&t=pml3wsmoOpgS76Oa-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)",
        "[BackStage Webinar: Tickets Bad! Self-Service Good! Build Developer Infrastructure Portals That Scale](https://drive.google.com/file/d/1LBzH97JnAYucQeQPKOYgf7bbzwn6SN4E/view?usp=sharing)",
        "[Terraform Webinar: Backstage: Tickets bad! Self-Service Good! Developer Infrastructure Portals That Scale](https://stackgen.com/video-and-webinars/how-to-scale-terraform-with-ai-agents-for-10x-developer-velocity)",
        "[Aiden Agent Webinar: From Prompt-to-Production Ready Infrastructure ](https://www.youtube.com/watch?v=uokZCz2LKR8)",
        "[AWS Webinar: Improving AWS Cloud Management Through StackGen AI Agents](https://stackgen.com/videos-and-webinars/improving-aws-cloud-management-through-stackgen-ai-agents)"


      ],
      impact: [
          "Drove $2.73M in pipeline generated mainly from in-person events in 2H 2025 and early 2026",
        "KubeCon 2025 - Booked 50 demos",
        "AWS re:Invent 2025 - Booked 91 Demos",
        "DevOps 2.0 Mumbai 2026 - Booked 31 Demos",
        "BackStage Integration Webinar secured 310 registrations and created enterprise LATM banking opportunity",
        "AWS Webinar help bring in Walmart and Visa enterprise opportunity lead"
      ],
      teamOverview: {
        teamSize: "5+ (I lead as Product Marketing Manager and worked with Product, Solutions, Sales, and external Design & Web Development Agency)",
        scope: "Event marketing support for HashiConf, KubeCon, AWS re:Invent, and DevOps 2.0 Mumbai — messaging, content, outreach campaigns, and sales enablement for in-person and virtual events",
        keyStakeholders: ["Product Manager", 'Event Marketing Manager', 'Demand Generation Manager', "Solution Engineers", "Sales", "RevOps Engineer"]
      }
    }
  },
  {
    id: 'stackgen-repositioning',
    title: "StackGen Positioning & GTM Strategy",
    date: "02/25/2026",
    category: ['Infrastructure', 'GTM', 'Product', 'DevOps', 'Observability'],
    company: 'StackGen',
    image: `${getBasePath()}/featuredwork_img/stackgen-homepage.png`,
    metrics: [
      { label: "Page Views", value: "Track XXX view count and specific prompt use cases" },
      { label: "Demo Requests", value: "Track X% web conversion of new demo sign-ups" }
    ],
    description: "Led 3 full website repositioning initiatives between 07/29/2025 and 02/25/2026, evolving StackGen's narrative from product-centric IaC messaging to the Autonomous Operations Platform",
    skills: ['StackGen', 'Product Marketing', 'Messaging Strategy', 'Positioning', 'Copywriting', 'GTM Strategy', 'HubSpot Webpages', 'Brand Strategy'],
    video: 'https://drive.google.com/file/d/1mPjbfSQmkTzJsV9aEQe6nj8Kyj9bQrTf/view?usp=sharing',
    document: 'https://docs.google.com/document/d/1sSn3TX9ZyPySz2XxdCb1Y1lvXjGNRSfhxikgr3TF7dw/edit?usp=sharing',
    caseStudy: {
      problem: "StackGen's homepage and website messaging failed to reflect the company's expanding platform vision. As the product evolved beyond IaC tooling into AI-powered autonomous operations, the website remained anchored to outdated, tool-centric language — creating friction in sales cycles, misaligning with enterprise buyer expectations, and underselling the platform's full capability surface. StackGen also lacked a formal strategy or framework to qualify potential opportunities.",
      solution: "Drove 3 end-to-end website repositioning initiatives across a 7-month window, each aligned to major GTM milestones and audience shifts. Repositioning 1 (07/29/2025) repositioned StackGen into an AI company and Autonomous Infrastructure Platform. For the KubeCon 11/10/2025 event, repositioned to Agentic Infrastructure Platform. Subsequent iterations refined segment-specific messaging for Platform Engineering, DevOps, and SRE buyers. The 3rd and most recent repositioning (02/25/2026) debuted at the Mumbai event, repositioning StackGen as the Autonomous Operations Platform — where AI agents like Aiden replace manual runbooks, toil, and reactive firefighting with autonomous, policy-driven infrastructure operations across 3 products: Aiden for DevOps, Aiden for SRE, and Aiden for Infrastructure. Created 4 qualification frameworks for each product line (Aiden for DevOps, Aiden for SRE, Aiden for Infrastructure, and ObserveNow) to give Sales, Product, Customer Success, and Solutions a common language and framework to qualify potential opportunities.",
      contentList: [
        "[Website Positioning Before 07/29/2025](https://drive.google.com/file/d/1d1dAmDcn3HCBRfHzYl0IRXwMruyLejz8/view?usp=sharing)",
        "[Website Repositioning On 07/29/2025](https://drive.google.com/file/d/1C4tIjZVbrvcgdMwbsboHtpU_p62PSDqv/view?usp=sharing)",
        "[07/29/2025 One Pagers](https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/alexcho-design-example?node-id=42-12053&t=2dtpPoZrR7pA3cMd-1&scaling=min-zoom&content-scaling=fixed&page-id=39%3A10983)",
        "[KubeCon 11/10/2025 Website Repositioning ](https://drive.google.com/file/d/13TJjZN6wSXHkb67PXquhEQJJi1EBOPUd/view?usp=sharing)",
        "[DevOps 2.0 Mumbai 2026 Website Repositioning](https://drive.google.com/file/d/1hLo6zPDFrNGWMFnB5RwtNkFKA-jn-ftm/view?usp=sharing)",
         "[Repositioning & Messaging Q2 2026](https://docs.google.com/document/d/1Q22AzNszxBuNGV9fQzgXdq_ZBP72TCBDUChaIewaKNU/edit?usp=sharing)",
      ],
      impact: [
        "Delivered 3 full repositioning cycles in 7 months, each tied to a GTM milestone — product launches and events like KubeCon, AWS re:Invent, and DevOps 2.0 Mumbai",
        "Evolved StackGen's core narrative from Infrastructure as Code (prior to 07/29/2025) tooling to the Autonomous Operations Platform debut at DevOps 2.0 Mumbai (02/25/2026) to position StackGen's Aiden AI Agent as the operational force that replaces manual DevOps workflows at scale ascross all 3 market segments (Infrastructure, DevOps, SRE)",
        "StackGen was named a 2025 Gartner Cool Vendor in AI for IT Operations and a Sample Vendor in four major Hype Cycle reports in 2025"
      ],
      teamOverview: {
        teamSize: "5+ (I lead as Product Marketing Manager and worked with Product, Solutions, Sales, and external Design & Web Development Agency)",
        scope: "Homepage, product pages, persona landing pages, navigation taxonomy, hero messaging, and supporting sales enablement materials across all 4 repositioning cycles",
        keyStakeholders: ["Product Manager", "Solution Engineers", "Sales", "UX Designers", "Web Full Stack Engineers", 'RevOps Engineer']
      }
    }
  },
  {
    id: 'aiden-demo-playground',
    title: "Aiden Demo Playground",
    date: "12/19/2025",
    category: ['Infrastructure', 'GTM', 'Product'],
    company: 'StackGen',
    image: `${getBasePath()}/featuredwork_img/tryaiden-new-ui.png`,
    metrics: [
      { label: "Page Views", value: "Track XXX view count and specific prompt use cases" },
      { label: "Time-to-PoC", value: "80% faster PoC creation for new  use cases based on recent feature or product releases" },
      { label: "Sign-Ups", value: "82% conversion of target attainment of Aiden for DevOps sign-ups from prompt demos" }
    ],
    description: "0-1 GTM playground demo website for Aiden AI Agent to showcase proof-of-concept demos of AI-powered infrastructure capabilities.",
    skills: ['StackGen', 'AI Agent', 'Terraform', 'Cloud Infrastructure', 'Infrastructure as Code', 'Cursor AI', 'Next.js', 'Vercel', 'Grafana'],
    demo: 'https://drive.google.com/file/d/1dGiActgHMxEW5VcLOfxDzoRRfMWoOYPx/view?usp=sharing',
    website: 'https://tryaiden.stackgen.com/',
    caseStudy: {
      problem: "Demonstrating Aiden’s AI infrastructure use cases required heavy setup across integrations, skills, tasks, and prompt engineering, making demos fragile and time-consuming. This slowed sales cycles and limited marketing’s ability to consistently showcase real-world use cases.",
      solution: "Built an interactive demo playground for GTM enablement, featuring guided setup of Aiden’s integrations, skills, tasks, and knowledge base, plus 13+ persona-based prompt flows. The playground enabled repeatable demos, faster sales cycles, and clearer value storytelling.",
      contentList: [
        "[Aiden for DevOps v1](https://drive.google.com/file/d/1IIhCIssA1yvXj2nYfCpEjm-NIbNBU524/view?usp=sharing)",
        "[Aiden for DevOps v1 MRD Doc](https://docs.google.com/document/d/1JLwxnHLWAvPKlHWokH4QNcPw1Og-GFsO/edit?usp=sharing&ouid=113584550925046374551&rtpof=true&sd=true)",

      ],
      impact: [
        "Drove a 70% increase in demo bookings at in-person events including KubeCon and AWS re:Invent 2025",

        "Achieved 2.6K page views in the first 60 days post-launch, signaling strong GTM traction",

        "Enabled Sales and Marketing to run PoC demos on demand, eliminating repeated setup and reducing dependency on Solutions and Product Engineering resources",

        "From initial launch to end of Feb 2026, 41 product sign-up conversions out of 50 target (82% attainment)"
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
    video: 'https://drive.google.com/file/d/1GotzTXtNO6rA_wJTUdmFjTjG4FwExb-9/view?usp=drive_link',
    document: 'https://drive.google.com/file/d/1vhsloAN-kQ00VnjDcLDtZQ72alKzCz7G/view?usp=drive_link',
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
      problem: "ByteDance’s DevInfra Platform supported overseas engineering teams across 17+ DevOps and infrastructure tools, but developer experience was poor due to lack of product localization for overseas teams. Most operational processes and success metrics were designed for China-based teams, resulting in limited visibility into overseas developer pain points, slower feedback resolution, inconsistent support quality, and declining satisfaction. Leadership needed a scalable operating model to improve DX and reliability for global developers.",

      solution: "Owned Product Operations for the Overseas DevInfra Platform end-to-end (from feature requirement to monitoring developer tools). Established a structured operating model to measure, analyze, and improve developer experience across regions. Built dashboards and reporting mechanisms to track key DX metrics on a weekly, monthly, and quarterly basis, including resolution rate, satisfaction score, feedback closure, and on-call quality. Designed and deployed developer surveys and feedback pipelines tailored to overseas teams, then conducted qualitative interviews with developers who reported low satisfaction or repeated issues. Partnered with Product, R&D, and Support teams across time zones to identify chronic issues, prioritize fixes, and drive accountability. Created improvement proposal documents that translated DX insights into concrete product and operational changes and continuously monitored outcomes to ensure sustained improvement.",
      impact: [
        "Improved overall issue resolution rate by +19.7%, approaching the target benchmark despite regional constraints",
        "Increased developer satisfaction score from 7.5 to 8.35, exceeding the target goal of 8",
        "Raised user feedback resolution rate by +25%, significantly surpassing the original goal",
        "Reduced on-call low-score incidents by 28.53%, bringing reliability well within acceptable thresholds",
        "Established a repeatable product operations framework for overseas DevInfra teams, improving long-term scalability and transparency"
      ],
            contentList: [
        "[Oncall SLA for Special Region Improvement Doc](https://drive.google.com/file/d/1vhsloAN-kQ00VnjDcLDtZQ72alKzCz7G/view?usp=sharing)",
        "[DevInfra Platform New Dev Hire Course Outline](https://drive.google.com/file/d/1qVUL0tudx-PeQCVo_c9D60BAD7IfnccD/view?usp=sharing)",
                "[DevInfra Server Side Module Tutorial](https://drive.google.com/file/d/1GotzTXtNO6rA_wJTUdmFjTjG4FwExb-9/view?usp=sharing)",

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
      problem: "Many internal engineering teams (for example, TikTok, Lark, and CapCut) relied on DIY, manual infrastructure provisioning. Existing platform tools could not support global, large-scale deployments across both greenfield and brownfield environments.",
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
        "Achieved a low acquisition cost of $0.53 per user, enabling scalable early-stage growth",
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
    diagram: 'https://miro.com/app/board/uXjVMbeB11Q=/?share_link_id=448224782377',
    caseStudy: {
      problem: "Agora’s usage-based pricing model made revenue forecasting highly inaccurate because Sales teams lacked a consistent way to estimate customer use cases. Sales prioritized contract signing over launch readiness, resulting in customers taking 6–12 months on average to deploy Agora-powered solutions, delaying revenue realization and reducing forecast reliability.",
      solution: "Designed an end-to-end solution framework to connect technical use case design with cost estimation and monetization. Created an RTE Solution Playbook to standardize session-based use case design (audio, video, chat) and map them to the correct Agora products. Built a robust cost estimation calculator that modeled multiple pricing dimensions (minutes, bandwidth, storage, users, add-ons) to accurately project session, monthly, and annual costs. Advised customers on monetization strategies aligned with their use cases (per session, per minute, per user, device-based). Integrated use case schemas with Agora App Builder to enable rapid app deployment, reducing friction from concept to launch.",
      impact: [
        "Improved opportunity value estimation accuracy by ~90% through use-case-driven cost modeling",
        "Reduced proof-of-concept launch time from ~1 month to hours for most base to emerging intermediate use cases by removing commercial friction",
        "Shortened production launch timelines from 6–12 months to under 3 months for most use cases by removing commercial friction (50–75% improvement)",
        "Established a repeatable, scalable framework for Sales, Solutions, and customers to design, price, and launch Agora-powered applications"
      ],
      contentList: [
        "[Gaming Vertical GTM Doc](https://drive.google.com/file/d/1k8BfJETbn5wQMJJYLXe5MxY-EcyEEAzK/view?usp=sharing)",
        "[METTRIC qualification framework](https://docs.google.com/document/d/18GnqK5mN-AtrCc8NwXV8EjAuRQSpXa_ZgBdafYVp2wc/edit?usp=sharing)",
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
    title: "Market Competitive Intelligence",
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

      solution: "Designed and led a recurring Competitive Intelligence & Technical Benchmark program that synthesized quantitative performance data, market pricing, feature differentiation, and use case comparisons. Built a structured framework for intelligence gathering across primary competitors (Zoom, Twilio, Vonage, and others). Produced a suite of competitive assets including battlecards, competitor comparison matrices, objection-handling playbooks, and detailed technical benchmark reports for both audio and video solutions. Benchmarks included head-to-head performance tests. Collaborated with Product, Solutions, and GTM teams to keep benchmarks updated on quarterly cadence and aligned with evolving product capabilities and market trends.",

      impact: [
        "Equipped Sales with 10+ battlecards and comparison matrices that increased competitive win rates in target enterprise segments",
        "Provided Solutions teams with technical benchmark data that improved demo credibility and objection handling in RFPs",
        "Enabled Product and Marketing to align release messaging with real differentiation backed by empirical performance data",
        "Standardized competitive knowledge across teams, reducing ad-hoc research time and improving response speed to competitive threats",
        "Instituted a repeatable quarterly cadence for CI updates tied to product releases, market shifts, and emerging competitor moves"
      ],

      contentList: [
        "[Zoom evaluation guidance](https://www.agora.io/en/blog/zoom-out-and-look-at-the-big-picture-when-evaluating-real-time-engagement-solutions/)",
        "[Agora vs Zoom comparison](https://www.agora.io/en/blog/agora-vs-zoom-look-at-the-big-picture/)",
        "[Multi-party mobile video testing](https://www.agora.io/en/blog/agora-vs-zoom-multi-party-mobile-video-testing/)",
        "[Agora vs Twilio web video benchmark](https://www.agora.io/en/blog/testing-agora-vs-twilio-for-multi-party-web-video-calls/)",
        "[Agora vs Vonage mobile video testing](https://www.agora.io/en/blog/testing-agora-vs-vonage-for-1-to-1-mobile-video-calls/)"
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
