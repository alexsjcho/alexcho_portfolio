import getBasePath from '../../utils/path'
import type { Recommendation } from './types'

export const ITEMS_PER_PAGE = 3
export const MAX_PREVIEW_LENGTH = 200
export const CAROUSEL_INTERVAL_MS = 5000

export const recommendationsData: Recommendation[] = [
  // StackGen Recommendations - All Peers
  {
    id: 'nikhil-ravindran',
    name: 'Nikhil Ravindran',
    title: 'Product Manager at StackGen | Building AI Agents for Autonomous Infrastructure',
    company: 'StackGen',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/nikhilravindran/',
    profileImage: `${getBasePath()}/recommendations/nikhil-ravindran-profile-pic.jpeg`,
    text: "I've really enjoyed working with Alex. What stands out to me is how well he understands our industry. He truly 'gets it' in a way that is rare. He is a hands-on professional who understands the technical side of the business deeply, which makes his marketing plans and recommendations work effectively in practice. On top of that, he is a great teammate who makes work easier and more enjoyable for everyone. I really hope we get the chance to work together again in the future",
    date: 'May 2026'
  },
  {
    id: 'bhavishya-mandanna',
    name: 'Bhavishya Mandanna',
    title: 'Director Marketing',
    company: 'StackGen',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/bhavishya-mandanna-783670123/',
    profileImage: `${getBasePath()}/recommendations/bhavishya-mandanna-img.jpeg`,
    text: "I had the privilege of working very closely with Alex while he led Product Marketing at StackGen, and his impact on the team and the company has been remarkable. He built and scaled the Product Marketing function in deep collaboration with UX designers, engineers, and marketers driving GTM enablement, product-led growth initiatives, campaigns, messaging, brand positioning, and pricing strategy with clarity and precision. We partnered extensively on events and campaigns, and his ability to translate evolving product updates and new features into sharp, market-ready narratives was exceptional. What truly sets Alex apart is his speed of execution and discipline, especially in high-change environments. A defining moment was the rapid pivot from Generative Infra to Autonomous Infra Platform, and then refining it further into an Autonomous Operations Platform successfully reflecting the entire repositioning across the website in just 48 hours. That level of focus, alignment, and execution speaks volumes about his dedication. He introduced structured workflows through ClickUp and thoughtfully integrated AI tools like Claude(skills), helping us become more agentic and significantly more productive as a smaller team powered by both human intelligence and AI. Whether it was branding collateral, decks, event materials, campaign assets, or leadership-ready messaging, he consistently delivered on time and at a standard that impressed everyone. Every team deserves a PMM like Alex; organized, adaptable, and deeply committed. I will truly miss working with him and wish him the very best; any organization would be fortunate to have him leading their product marketing efforts.",
    date: 'March 2026'
  },
  {
    id: 'sajal-jain',
    name: 'Sajal Jain',
    title: 'Revenue Ops & GTM Engineer',
    company: 'StackGen',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/sajal-digital/',
    profileImage: `${getBasePath()}/recommendations/sajal-jain-img.jpeg`,
    text: "I've had the chance to work closely with Alex, and what stands out most is his sharp product marketing instinct. He has a strong ability to distill complex ideas into clear, compelling narratives that resonate with the right audience. From positioning and messaging to go-to-market strategy, Alex combines structured thinking with creativity and strong execution. He's thoughtful, data-driven, and always asks the right questions before jumping to solutions. On top of that, he's collaborative and dependable, someone you can trust to take ownership and elevate the work around him. Any team would be lucky to have him.",
    date: 'March 2026'
  },
  {
    id: 'romal-martin',
    name: 'Romal Martin',
    title: 'Founder + Creative Director',
    company: 'StackGen',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/romalmartin/',
    profileImage: `${getBasePath()}/recommendations/romal-martin-img.jpeg`,
    text: "It was a privilege to work with Alex at StackGen, and he's the best product leader I've had a chance to collaborate with. We've worked together across design, development, GTM, pricing, events, and PLG web app initiatives, and his sharp feedback consistently helped us get to better outcomes. Alex has that rare mix of thinking deeply about the product and still moving fast. He's super detail‑oriented, and it really shows in the quality of his work. He's great at taking complex challenges and breaking them into clear, actionable next steps that lead to productive outcomes. Day to day, he's the teammate who makes everything more collaborative, more organized, more focused, and a lot less chaotic. In short, an absolute GOAT. Any team would be lucky to work him.",
    date: 'March 2026'
  },

  // ByteDance Recommendations - All Peers
  {
    id: 'shiuan-chen',
    name: 'Shiuan Chen',
    title: 'Technical Support Engineer',
    company: 'ByteDance',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/shiuan-chen-733935168/',
    profileImage: `${getBasePath()}/recommendations/shiuan-chen-img.jpeg`,
    text: "Alex is hands down one of the best Product Managers I've worked with. He has a sharp eye for spotting key issues in US dev infrastructure products and, more importantly, knows exactly how to fix them. From identifying problems to implementing solutions and presenting clear results, Alex gets things done—no fluff, just impact. What really sets him apart is his ability to keep projects moving toward their goals while making collaboration smooth and stress-free.",
    date: 'March 2025'
  },
  {
    id: 'yifei-feng',
    name: 'Yifei Feng',
    title: 'Software Engineer',
    company: 'ByteDance',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/yifeifeng/',
    profileImage: `${getBasePath()}/recommendations/yifei-img.jpeg`,
    text: "I had the privilege of working closely with Alex on our Infrastructure as Code (IAC) project, where his product management and UX design leadership drove remarkable results. Alex's strategic vision and hands-on approach were instrumental in achieving two major milestones: implementing an efficient daily iteration process and successfully executing our datacenter deployment initiative. His ability to balance technical requirements with user experience considerations resulted in solutions that not only enhanced our operational efficiency but also delivered substantial cost savings, reducing company expenses by tens of millions of dollars. Alex's attention to detail in UX design ensured our infrastructure tools remained accessible and user-friendly. What truly sets Alex apart is his commitment to continuous improvement and ability to translate complex technical requirements into actionable product features. His contributions have left a lasting positive impact on our infrastructure operations, and I wholeheartedly recommend Alex for any product management role focused on technical infrastructure or enterprise solutions.",
    date: 'January 2025'
  },
  {
    id: 'yuanyi-sun',
    name: 'Yuanyi Sun',
    title: 'Software Engineer',
    company: 'ByteDance',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/yuanyisun/',
    profileImage: `${getBasePath()}/recommendations/yuanyi-img.jpeg`,
    text: "Alex and I worked together at ByteDance, where he served as the product manager for two of our key projects: feature flag and IaC. Alex is an versatile and talented professional. As a product manager, he combines a sharp product sense with hands-on expertise in front-end and back-end development, UX design, and product operations. This unique breadth of skills allowed him to excel in cross-functional collaboration, ensuring smooth communication and alignment across teams. Alex is always willing to step up and lend a helping hand, especially during critical moments for the team. When we faced resource constraints and lacked both UX design and front-end development support, Alex didn't hesitate to jump in. He immediately took on the responsibility of handling UX design and front-end development tasks himself, helping the team navigate through a challenging period. His proactive attitude and commitment to the team's success made a significant impact, ensuring that our projects stayed on track despite the obstacles.",
    date: 'January 2025'
  },
  {
    id: 'yang-xiao',
    name: 'Yang Xiao',
    title: 'Senior Software Engineer',
    company: 'ByteDance',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/helenyx/',
    profileImage: `${getBasePath()}/recommendations/yangxiao-img.jpeg`,
    text: "Working with Alex was a fun through the many challenges we went through, as we were working a feature flag product. Despite pressure to performance from leadership and limited resources, Alex stepped up and helped support the engineering team from a UX design perspective by producing mid-fidelity Figma interactive prototypes to support new feature and existing feature improvements. On one instance to help launch a feature after our frontend engineer recently left the team, he helped contribute a bit on the frontend development side to ensure that the feature launch would not be delayed to meet customer timeline expectations. It was a great pleasure to work with Alex, and I highly recommend him as a Product Manager on our team.",
    date: 'May 2024'
  },

  // Agora Recommendations - Mixed Managers and Peers
  // Managers
  {
    id: 'patrick-ferriter',
    name: 'Patrick Ferriter',
    title: 'SVP Product & Marketing',
    company: 'Agora',
    relationship: 'Manager',
    linkedinUrl: 'https://www.linkedin.com/in/patrickferriter/',
    profileImage: `${getBasePath()}/recommendations/patrick-ferriter-img.jpeg`,
    text: "Alex is an exceptionally well-organized and methodical problem solver with a solid understanding of product management & product marketing. At Agora, Alex drove the implementation and ramp up of our CompeteIQ competitive intelligence solution, enabling field teams to have the right information needed to win deals. He also spearheaded the development of new simplified pricing models required for business expansion. Alex is collaborative and always willing to stretch and take on important assignments which drive meaningful business outcomes.",
    date: 'May 2023'
  },
  {
    id: 'alexandra-obukhovskaya',
    name: 'Alexandra Sasha Obukhovskaya',
    title: 'Manager of Technical Account Management',
    company: 'Agora',
    relationship: 'Manager',
    linkedinUrl: 'https://www.linkedin.com/in/sashaobuk/',
    profileImage: `${getBasePath()}/recommendations/alexandra-sashaobuk-img.jpeg`,
    text: "I was fortunate enough to work closely with Alex during which time he was transitioning the Technical CSM team over for me to manage and grow into a more traditional post sales CSM team. Alex was pivotal is hiring the right talent to get the team started and was effective at handing over the current processes and protocols in place prior to my arrival. Alex helped introduce me into the company culture and provided advice along the way around how to be the most effective with each team. I'm grateful for all of the patience and kindness Alex was able to provide to me during my first 90 days, which are critical for any new manager.",
    date: 'January 2022'
  },
  {
    id: 'michael-lopez',
    name: 'Michael Lopez',
    title: 'Vice President of Sales',
    company: 'Agora',
    relationship: 'Manager',
    linkedinUrl: 'https://www.linkedin.com/in/michael-lopez-sales-leader/',
    profileImage: `${getBasePath()}/recommendations/michael-lopez-img.jpeg`,
    text: "Alex is an exceptional professional who's both technically knowledgeable and pays attention to detail. He's focused on not just getting the job done but also figuring out ways to improve every process. Alex has been of my best new hires and I couldn't be more pleased with his dependability and determination to being an asset to the company. We're very lucky to have him and excited to see him excel in his role.",
    date: 'July 2021'
  },

  // Peers
  {
    id: 'catherine-kim',
    name: 'Catherine Kim',
    title: 'Litigation Paralegal',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/catherinesjkim/',
    profileImage: `${getBasePath()}/recommendations/catherine-kim-img.jpeg`,
    text: "Alex is one of the best product managers that I worked with in my professional career in tech. He is thoughtful, wise, and technical. He knows how to understand a customer's point of view and explain concepts in a simple, easy manner and also from the architectural and system design point of view so that customers can see the big picture. He also made new employees' lives easier by creating different versions of cost estimators, web pricing calculator, and documenting internal processes and procedures so that new employees can find next action items instead of asking their managers constantly on how to solve a problem. I believe Alex is one of the great leaders in tech and a very capable product manager.",
    date: 'January 2024'
  },
  {
    id: 'matthias-strodtkotter',
    name: 'Matthias Strodtkötter',
    title: 'Head of Product',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/matthias-d-strodtkoetter/',
    profileImage: `${getBasePath()}/recommendations/matthias-strodtkoetter-img.jpeg`,
    text: "It was an absolute privilege to work alongside Alex at Agora, where we both held the positions of Senior Product Managers. Alex exemplifies an extraordinary fusion of intellectual brilliance, meticulous organization, rapid decision-making, and a charming collegial spirit that makes him an invaluable asset to any team. His unique combination of traits not only enhances productivity but also makes collaboration genuinely enjoyable. A prime illustration of Alex's standout capabilities was his training that helped me navigate the complexity of comprehending customer cost structures in relation to Agora's diverse technological offerings. Initially, I found myself daunted by the intricate nature of the approach he recommended. Yet, it was under Alex's patient guidance and his knack for simplifying complex ideas that I was able to understand and apply the framework effectively. His system was indeed a masterstroke of clarity and efficiency, yielding highly accurate results at a swift pace. Experiencing Alex's methodology firsthand was truly insightful, offering me a fascinating glimpse into his unique problem-solving approach. It's rare to find a professional like Alex who blends intelligence, speed, structure, and interpersonal skills so seamlessly. His ability to translate complex concepts into practical frameworks is second to none. I am confident that Alex will continue to excel in his endeavors, bringing a significant positive impact to any team he joins.",
    date: 'June 2023'
  },
  {
    id: 'wyatt-oren',
    name: 'Wyatt Oren',
    title: 'Strategic Account Executive',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/wyattoren/',
    profileImage: `${getBasePath()}/recommendations/wyatt-oren-img.jpeg`,
    text: "Alex is an exceptional product manager and would make an excellent addition to any team/org looking to elevate its product management, marketing and GTM strategy. Alex is very analytical and data driven, his ability to understand the product and pair it with an organization's business goals makes him a very effective contributor. Specific to forward thinking organizations, I can assure you Alex would make a great addition to your team.",
    date: 'June 2023'
  },
  {
    id: 'julio-ponce',
    name: 'Julio Ponce',
    title: 'Director, Video API Sales & Strategic Accounts',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/julio-ponce-2009/',
    profileImage: `${getBasePath()}/recommendations/julio-ponce-img.jpeg`,
    text: "Alex Cho, who has been an exceptional member of our team at Agora.io. As both a Product Manager and Product Marketing Manager, Alex has consistently demonstrated his outstanding skills, dedication, and ability to drive successful outcomes. During his tenure at Agora.io, Alex made significant contributions to our organization. One of his notable achievements was the development of the pricing calculator, a tool that revolutionized our pricing strategy and streamlined the sales process. With his deep understanding of JavaScript, HTML5, WebRTC, and API integration, Alex showcased his technical expertise by designing and implementing this complex tool effectively. The pricing calculator has not only simplified our internal operations but has also been highly praised by our clients for its accuracy and user-friendliness. Beyond his technical prowess, Alex brings an unparalleled wealth of knowledge and enthusiasm to our team. His ability to navigate complex product challenges and collaborate with cross-functional teams is truly commendable. Alex consistently exhibits a strong analytical mindset, enabling him to identify opportunities, solve problems, and make data-driven decisions that positively impact our product development and marketing strategies.",
    date: 'June 2023'
  },
  {
    id: 'kanhaiya-maheshwary',
    name: 'Kanhaiya Maheshwary',
    title: 'Growth Marketing Manager',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/kanhaiya-maheshwary/',
    profileImage: `${getBasePath()}/recommendations/kanhaiya-meheshwary-img.jpeg`,
    text: "Alex was one of the first few people I spoke to when I joined Agora, while I was still getting acquainted with different teams and collaborators. Early on, Alex took me through the Product Marketing roadmap and plans to see where I could add value as a Growth Marketer, and one of the earliest things that struck me about him was his attention to detail, and deep technical capabilities. He had built a custom model of qualifying sales prospects based on product-fit which was widely used by the team. Secondly, he understood customers' needs deeply, and was instrumental in helping build pricing models. Last but not the least, he was always helpful, looking for ways to collaborate and welcome ideas. I would recommend Alex for any Product based or Technical positions. He's extremely smart and will be an asset to any team!",
    date: 'June 2023'
  },
  {
    id: 'emily-kim',
    name: 'Emily Kim',
    title: 'Chief of Staff',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/kimemily/',
    profileImage: `${getBasePath()}/recommendations/emily-kim-img.jpeg`,
    text: "Alex came to my attention at Agora when he was a Sales Engineer. He had developed some impressive tools to help our customers navigate our pricing structure. His strong customer advocacy made him the perfect choice for leading the Technical Customer Success team. Because of his impactful work, when he expressed an interest in moving to the Product side of the house, the organization made room for him there, ensuring that he remained happy at Agora. In my role managing developer marketing, Docs, and Console design/development, I worked closely with Alex on many initiatives, from pricing calculators to product launches. He was always a smart, reliable partner and collaborator, who never lost his focus on customer advocacy and showed a passion for innovation. Alex was a pleasure to work with and I'd be happy to speak with you about a role for him in your organization.",
    date: 'May 2023'
  },
  {
    id: 'sid-sharma',
    name: 'Sid Sharma',
    title: 'GM / VP | AI Innovation & GTM',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/sidsharma27/',
    profileImage: `${getBasePath()}/recommendations/sid-sharma-img.jpeg`,
    text: "I had the pleasure of working closely with Alex. Throughout our collaboration, I consistently observed Alex's exceptional dedication to delivering a superior customer experience. One of Alex's standout qualities is his thoughtfulness. He possesses a unique ability to deeply understand the needs and expectations of our customers. By actively listening to their feedback and taking their perspectives into account, Alex consistently provided solutions that exceeded expectations. His attention to detail ensured that every aspect of a project was meticulously planned and executed, resulting in highly satisfied customers. Passion is another defining characteristic of Alex's work ethic. He approaches each project with enthusiasm and a genuine desire to make a positive impact. Alex's passion for the customer experience is evident in the innovative ideas he brings to the table. He consistently challenges the status quo and seeks out opportunities to enhance the overall quality of our products and services.",
    date: 'May 2023'
  },
  {
    id: 'andres-woodhouse',
    name: 'Andres Woodhouse',
    title: 'Chief Executive Officer',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/awoodhouse-14b2268/',
    profileImage: `${getBasePath()}/recommendations/andres-woodhouse-img.jpeg`,
    text: "I highly recommend Alex Cho for any Product Manager or Sr Sales Engineer position. As a skilled product manager and technical customer success manager at Agora, Alex's expertise and willingness to help were invaluable. I learned a great deal from him during our two years of collaboration. His ability to understand customer needs greatly assisted the sales team in closing deals, ensuring customer satisfaction. Alex is a consummate professional who consistently delivers what customers require. His exceptional skills and dedication make him an asset to any team.",
    date: 'May 2023'
  },
  {
    id: 'shaun-hubbard',
    name: 'Shaun Hubbard',
    title: 'Software Engineer',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/shaun-hubbard/',
    profileImage: `${getBasePath()}/recommendations/shaun-hubbard-img.jpeg`,
    text: "I have had nearly the past two years to enjoy collaborating with Alex on multiple projects. Alex is an excellent communicator, well organized, and conscientious about focusing on what matter to achieve positive outcomes. Alex's relentless work in gluing the pieces together between engineering, sales, and finance to develop new pricing models for prototypes was essential in moving customer engagements forward. If I were to identify critical traits about Alex that convinced me to pick him over others when working on crucial projects, it would be his tenacity and growth potential. I would gladly work with Alex again and will one day look to solicit his services again.",
    date: 'May 2023'
  },
  {
    id: 'malavika-oak',
    name: 'Malavika Oak',
    title: 'Sr UX Designer',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/malavika-oak/',
    profileImage: `${getBasePath()}/recommendations/malavika-oak-img.jpeg`,
    text: "I worked with Alex in the product team at Agora—one of the most organized and results driven person I've met in the organization. We worked on several projects together such as the pricing calculator, NCS, Cloud Proxy, and more. Being a designer, I remember having a lot of technical product questions which Alex patiently answered and clarified that made him the most easy to work with and very approachable. He's an excellent project manager and most of all a very enthusiastic, positive team member who can naturally gel with teammates irrespective of the hierarchy!",
    date: 'May 2023'
  },
  {
    id: 'marina-gerzon',
    name: 'Marina Gerzon',
    title: 'Global Strategic Partner Solutions Architect',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/marina-gerzon-b8b1012/',
    profileImage: `${getBasePath()}/recommendations/marina-gerzon-img.jpeg`,
    text: "Alex was a multi-talent individual who briefly was in the Solutions & Technical team, where he led weekly technical and business training sessions on how to tackle customer's technical and business problems using relevant business (MEDDIC) or technical (software system design) methodologies for the Sales, Customer Success, and Solutions team. After he moved to the Product team, he helped a lot with custom pricing strategies for customers. He helped design solutions to meet customers' needs. Also, he worked closely with the Solutions team on the launches of Event Notifications and Cloud Proxy products from both product management and marketing perspectives. Alex always tried to keep everyone on the same page when doing project management around customer accounts for all stakeholders involved to help achieve their goals. I highly recommend Alex to any company or team.",
    date: 'May 2023'
  },
  {
    id: 'chris-taniguchi',
    name: 'Chris Taniguchi',
    title: 'Key Account Manager',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/christaniguchi/',
    profileImage: `${getBasePath()}/recommendations/chris-taniguchi-img.jpeg`,
    text: "Alex was my manager when I first started at Agora. He brought me onboard and taught me a lot. Alex makes things seem so effortless in the way he carries himself. He's very meticulous, highly competent, and one of the most passionate people I have ever come across. He is a true leader but even a greater mentor at heart. If organizations used lottery to select employees Alex would absolutely be a #1 draft pick. If you are an organization looking to upgrade your roster look no further than Alex Cho. He's an absolute joy to work with and someone you can definitely rely on.",
    date: 'May 2023'
  },
  {
    id: 'siwei-shen',
    name: 'Siwei Shen',
    title: 'Product Manager',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/siwei-shen/',
    profileImage: `${getBasePath()}/recommendations/siwei-shen-img.jpeg`,
    text: "I had the pleasure of working with Alex at Agora, where he showcased exceptional skills in competitive analysis and strategy development. Utilizing tools like CompeteIQ, Alex streamlined our decision-making process and provided valuable insights. He also excelled in creating customer-facing battle cards, which played a crucial role in our frontlines' ability to win customers. Alex's collaborative nature and bilingual proficiency in English and Chinese enabled him to effectively work with cross-regional teams, such as our Chinese product managers and R&D team. In conclusion, Alex's expertise, adaptability, and global mindset truly set him apart, making him an invaluable asset to any team.",
    date: 'May 2023'
  },
  {
    id: 'sam-wan',
    name: 'Sam Wan',
    title: 'Marketing Systems Architect',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/samuelwan78/',
    profileImage: `${getBasePath()}/recommendations/sam-wan-img.jpeg`,
    text: "I had the great honor and privilege to work with Alex for almost 2 years at Agora. Words cannot even begin to describe what an incredible asset he was to the Product Marketing team. He is an amazing storyteller and able to see through the eyes of the customers. He is a highly driven manager, with a commanding knowledge and expertise in product messaging and sales enablement. Alex is also a highly detail-oriented and an effective team leader. But beyond his professionalism and drive for excellence, Alex has amazing and unquestionable character that stems from his high ethics and deep sense of humility. He does not compromise or cut corners at the expense of others, and he cares deeply for his team and fellow coworkers. He is an invaluable addition to any team. Do not pass up on this exceptional professional!",
    date: 'May 2023'
  },
  {
    id: 'blaise-thomas',
    name: 'Blaise Thomas',
    title: 'Director of Solutions Engineering',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/blaisethomas/',
    profileImage: `${getBasePath()}/recommendations/blaise-thomas-img.jpeg`,
    text: "I'm thrilled to vouch for my former colleague, Alex, whom I had the pleasure of working alongside at Agora. Alex is a true go-getter/self-starter who consistently shows great initiative, thoroughness, and integrity. Alex is always eager to take on new challenges and can be trusted to handle tasks efficiently. He's known for being detail-oriented, which is evident in the high-quality work he produces. Besides his strong work ethic, Alex is great at keeping conversations focused and on track. He has a knack for steering discussions towards productive outcomes, which made our team more efficient and effective. In short, Alex is an exceptional professional, and I wholeheartedly recommend him.",
    date: 'May 2023'
  },
  {
    id: 'patricia-finlayson',
    name: 'Patricia Finlayson',
    title: 'Senior Product Marketing Manager',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/patfinlayson/',
    profileImage: `${getBasePath()}/recommendations/patricia-finlayson-img.jpeg`,
    text: "I had the pleasure of working with Alex at Agora, where he was a key member of the Product Management and Product Marketing teams. Alex is an exceptional product manager with a keen strategic vision and an innate ability to bring products to market successfully. He possesses strong project management skills and always closely monitors the market to ensure that products remain competitive. Alex successfully project-managed the implementation of our CompeteIQ competitive intelligence solution, allowing sales to have all the information needed to win deals. Alex is very easy to work with and overall has the skills, experience, and work ethic necessary to excel in any organization.",
    date: 'May 2023'
  },
  {
    id: 'jennifer-xin',
    name: 'Jennifer Xin',
    title: 'Senior Product Manager',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/lu-xin-03692b88/',
    profileImage: `${getBasePath()}/recommendations/jennifer-xin-img.jpeg`,
    text: "I was fortunate enough to work closely with Alex in the same team. We worked on several projects together and Alex's great project management and communication skills really impressed me. He was able to keep highly organized and everything under control even with the most challenging timelines and under multi-tasking situations. I really appreciate him Alex was very easy to work with and his natural sense of humor made him a great team player. I enjoy working together with Alex in the past year and can definitely see him fitting into any organization as a top performer!",
    date: 'May 2023'
  },
  {
    id: 'lincoln-luk',
    name: 'Lincoln Luk',
    title: 'Market and Strategy Consultant',
    company: 'Agora',
    relationship: 'Peer',
    linkedinUrl: 'https://www.linkedin.com/in/lincoln-luk/',
    profileImage: `${getBasePath()}/recommendations/lincoln-luk-img.jpeg`,
    text: "I've had the pleasure of working with Alex during my time at Agora.io. Alex is a rare multi-talented resource. Alex joined Agora as sales exploration then later due to executive leadership reorgs. Alex moved to account relationship and eventually Product Marketing and Product Management. During his time with each role, Alex was able to grasp the key concepts quickly and master Agora's product value pitches in much shorter amount of time then other team resources. Alex's most outstanding strengths are his market research skills as well as willingness to continuously apply deep thinking to the job(s) at hand. Where average resources would settle for a routine, Alex would happily look for out of the box thinking ideas to break a pattern (when it makes sense). I highly recommend Alex for any organization looking for a high potential team member that wont settle for the mundane.",
    date: 'October 2022'
  }
]
