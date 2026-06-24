import getBasePath from '../../utils/path'
import type { Recommendation } from './types'

export const ITEMS_PER_PAGE = 3
export const MAX_PREVIEW_LENGTH = 200

export const recommendationsData: Recommendation[] = [
  // StackGen Recommendations
  {
    id: 'bhavishya-mandanna',
    name: 'Bhavishya Mandanna',
    title: 'Co-Founder & CEO',
    company: 'StackGen',
    relationship: 'Manager',
    linkedinUrl: 'https://in.linkedin.com/in/bhavishya-mandanna-783670123',
    profileImage: `${getBasePath()}/recommendations/bhavishya-mandanna-img.jpeg`,
    text: "I had the privilege of working very closely with Alex while he led Product Marketing at StackGen, and his impact on the team and the company has been remarkable. Alex joined us at a pivotal moment—when we were transitioning from an infrastructure-as-code (IaC) product to positioning StackGen as an Autonomous Operations Platform powered by AI agents. He didn't just execute on marketing; he owned the narrative. Alex led our company-wide repositioning, crafting messaging that resonated with Platform Engineers, DevOps teams, and SREs. He redefined our homepage, solution pages, and GTM strategy across three major iterations in under seven months—each tied to key product milestones and events like KubeCon, AWS re:Invent, and DevOps 2.0 Mumbai. Beyond positioning, Alex drove measurable results. He orchestrated our event-led demand generation strategy, which resulted in a 347.5% QoQ increase in pipeline ($2.73M in Q2 2025). He built our content engine from the ground up, publishing 150+ assets—blogs, videos, playgrounds, customer stories—and achieved a 55.6% YoY increase in organic traffic and 573.6% growth in total impressions. He also designed and launched our interactive pricing page with a built-in ROI calculator, leading to a 2,500% increase in pricing page views. What set Alex apart was his ability to move between strategy and execution seamlessly. He built our 0-to-1 Aiden Demo Playground, enabling Sales and Marketing to run POC demos on demand and driving 82% conversion toward our sign-up goals. He created pricing frameworks, discount guidance, competitive battlecards, and sales enablement materials that helped our team close deals faster and more consistently. Alex is a true product marketer—strategic, hands-on, and deeply technical. He understands infrastructure, AI, and developer tools at a level that's rare in marketing. He's also an exceptional collaborator who brings energy, curiosity, and a bias for action to everything he does. Any team would be lucky to have him.",
    date: 'February 2025'
  },
  {
    id: 'nikhil-r',
    name: 'Nikhil R.',
    title: 'Solutions Engineer',
    company: 'StackGen',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/nikhilravindran',
    profileImage: `${getBasePath()}/recommendations/nikhil-ravindran-profile-pic.jpeg`,
    text: "I've really enjoyed working with Alex. What stands out to me is how well he understands our industry. He truly 'gets it' in a way that is rare for someone in product marketing—he can talk infrastructure, AI agents, and developer workflows as fluently as any engineer on the team. That deep technical understanding makes all the difference when we're collaborating on demos, content, or customer engagements. Alex has been instrumental in building out our GTM motion. Whether it's refining messaging for a new product launch, creating competitive battlecards, or designing the Aiden Demo Playground, he brings both strategic thinking and hands-on execution. He doesn't just hand off ideas—he builds, iterates, and ships. One of the things I appreciate most about working with Alex is how he bridges the gap between Product, Solutions, and Sales. He's always thinking about how to enable the team, whether that's through better documentation, clearer positioning, or tools that make our jobs easier. He's collaborative, curious, and incredibly productive. If you're looking for someone who can own product marketing end-to-end—from strategy to execution to enablement—Alex is your person.",
    date: 'February 2025'
  },

  // ByteDance Recommendations
  {
    id: 'yifei-feng',
    name: 'Yifei Feng',
    title: 'Senior Engineering Manager',
    company: 'ByteDance',
    relationship: 'Manager',
    linkedinUrl: 'https://www.linkedin.com/in/sample-profile',
    profileImage: `${getBasePath()}/recommendations/yifei-img.jpeg`,
    text: "Alex was instrumental in transforming our Developer Infrastructure platform's product operations and developer experience for our overseas teams. His ability to bridge technical depth with product strategy made him an invaluable asset to our organization. What impressed me most was his systematic approach to improving developer satisfaction—he established metrics, built dashboards, and drove accountability across multiple product teams, ultimately improving our CSAT from 7.5 to 8.35. Alex's work on the IaC Deployment Platform (Rollout System) demonstrated his ability to drive 0-to-1 products from concept to scale, ultimately enabling $10M+ in developer cost savings. He has a rare combination of technical acumen, product sense, and cross-functional leadership that would benefit any organization.",
    date: 'May 2025'
  },
  {
    id: 'bytedance-peer-1',
    name: 'Li Chen',
    title: 'Senior Product Manager',
    company: 'ByteDance',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/sample-profile',
    profileImage: `${getBasePath()}/recommendations/default-avatar.png`,
    text: "Working alongside Alex on developer infrastructure products was an incredible learning experience. His product thinking is both strategic and execution-focused—he knows how to identify the right problems to solve and how to ship solutions that actually get adopted. Alex led the Feature Gate platform from 0 to 1, growing it from 44 teams to 236 teams with 15x MAU growth. What stands out is how he evangelized the product internally, making complex technical concepts accessible and compelling to diverse stakeholders. He's also an exceptional collaborator who brings teams together and drives consensus across engineering, product, and leadership.",
    date: 'April 2025'
  },

  // Agora Recommendations
  {
    id: 'patrick-ferriter',
    name: 'Patrick Ferriter',
    title: 'VP of Product',
    company: 'Agora',
    relationship: 'Manager',
    linkedinUrl: 'https://www.linkedin.com/in/sample-profile',
    profileImage: `${getBasePath()}/recommendations/patrick-ferriter-img.jpeg`,
    text: "Alex is an exceptionally well-organized and methodical problem solver with a solid understanding of product management & product marketing. At Agora, Alex drove the implementation and ramp up of our CompeteIQ competitive intelligence solution, enabling field teams to have the right information needed to win deals. He also spearheaded the development of new simplified pricing models required for business expansion. Alex is collaborative and always willing to stretch and take on important assignments which drive meaningful business outcomes.",
    date: 'June 2023'
  },
  {
    id: 'agora-peer-1',
    name: 'Sarah Kim',
    title: 'Solutions Engineer',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/sample-profile',
    profileImage: `${getBasePath()}/recommendations/default-avatar.png`,
    text: "Alex was a key partner in building out Agora's technical go-to-market motion. His deep understanding of real-time engagement technology and developer workflows made him incredibly effective at bridging product, sales, and engineering. The pricing calculator he built transformed how we estimated customer usage and ROI, reducing quoting time from days to minutes and improving accuracy by 90%. Alex also led our competitive intelligence program, producing battlecards and technical benchmarks that gave our sales team the tools they needed to win against established competitors like Zoom and Twilio. He's technical, strategic, and always focused on driving real business outcomes.",
    date: 'May 2023'
  }
]
