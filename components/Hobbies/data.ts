import getBasePath from '../../utils/path'
import type { Hobby } from './types'

export const hobbiesData: Hobby[] = [
  {
    id: 'breakdancing',
    title: 'Breakdancing',
    description: 'Competed in the SF Bay Area as a B-Boy for Boogie City Residents (BCR). Now happily retired but still passionate about the culture and movement.',
    images: [
      { id: 1, src: `${getBasePath()}/hobbies_img/alex_bboy_news.jpg`, alt: 'Breakdancing' },
      { id: 2, src: `${getBasePath()}/hobbies_img/alex_BCR_crew.jpg`, alt: 'Breakdancing' },
      { id: 3, src: `${getBasePath()}/hobbies_img/alex_breakdance.jpg`, alt: 'Breakdancing' },
      { id: 4, src: `${getBasePath()}/hobbies_img/alex_sf_japan_garden.jpg`, alt: 'Breakdancing' },
    ],
    mediaLinks: [

      { label: 'Breakers at War 2011 Top 8 BCR vs Regulators', url: 'https://www.youtube.com/watch?v=GytqasarAas&list=PLC73zSZPZZRDhnBLxpYvQwgKw_MF9w5-U' },
      { label: 'Top 16 Breakers at war 2011 BCR vs Shinobi Club', url: 'https://www.youtube.com/watch?v=AyAxiOjb-cQ&list=PLC73zSZPZZRDhnBLxpYvQwgKw_MF9w5-U&index=2' },
    ],
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Play guitar, piano, and vocals (lead and harmony).',
    images: [
      { id: 1, src: `${getBasePath()}/hobbies_img/alex_fish_jam.jpg`, alt: 'Music' },
      { id: 2, src: `${getBasePath()}/hobbies_img/alex_piano.jpg`, alt: 'Music' },
      { id: 3, src: `${getBasePath()}/hobbies_img/alex_open_mic.jpg`, alt: 'Music' },
      { id: 4, src: `${getBasePath()}/hobbies_img/alex_guitar.jpg`, alt: 'Music' },
    ],
    mediaLinks: [

      { label: '周杰伦 - 安静 翻唱 (music cover)', url: 'https://www.youtube.com/watch?v=QKqAwyJSZW4&list=PL752z1ltnSJtktke45LRY_EvcgexBf-St&index=2' },
      { label: '宝贝-曹善君 (原唱-张悬) music cover', url: 'https://www.youtube.com/watch?v=G_d8hAGmN5A&list=PLKhLqw9eyvzYHhCFZLh_DNubisNuynqpZ&index=4' },
      {
        label: '独男-陈达成 -ft 曹善君 (原唱古巨基） music cover vocal harmony', url: 'https://www.youtube.com/watch?v=-gWNb7poZ4Y&list=PLKhLqw9eyvzYHhCFZLh_DNubisNuynqpZ&index=6'
      },

    ],
  },
  {
    id: 'traveling',
    title: 'Traveling',
    description: 'Traveled to 30+ cities across China and 12+ countries worldwide. Driven by curiosity and exploration.',
    images: [
      { id: 1, src: `${getBasePath()}/about_img/shenyang2024.jpg`, alt: 'shenyang2024' },
      { id: 2, src: `${getBasePath()}/about_img/canada2022.jpg`, alt: 'canada2022' },
      { id: 3, src: `${getBasePath()}/about_img/hawaii2022.jpg`, alt: 'hawaii2022' },
      { id: 4, src: `${getBasePath()}/about_img/muirwood.jpg`, alt: 'muirwoods2022' },
      { id: 5, src: `${getBasePath()}/about_img/fostercity2019.jpg`, alt: 'fostercity2019' },
      { id: 6, src: `${getBasePath()}/about_img/academyofart2019.jpg`, alt: 'academyofart2019' },
      { id: 7, src: `${getBasePath()}/about_img/yosemite2019.jpg`, alt: 'yosemite2019' },
      { id: 8, src: `${getBasePath()}/about_img/seapoint_sf_2019.jpg`, alt: 'seapoint_sf_2019' }
    ],
    mediaLinks: [],
  },
]
