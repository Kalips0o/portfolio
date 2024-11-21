import {
    adminPanel,
    anime,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    nodejs,
    reactjs,
    redStone,
    redux,
    sn,
    tailwind,
    tl,
    typescript,
    incubator,
    itMae
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Front-End Developer',
        company_name: 'IT incubator',
        icon: incubator,
        iconBg: '#333333',
        date: 'Feb 2021 - Feb 2023',
    },

    {
        title: 'Junior Front-End Developer',
        company_name: 'IT MAE',
        icon: itMae,
        iconBg: '#333333',
        date: 'Feb 2023 - present time',
    },

];

const projects = [
    {
        id: 'anime',
        name: 'Anime',
        description: 'Website with the best anime',
        tags: [
            {
                name: 'js',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: anime,
        repo: 'https://github.com/Kalips0o/Anime-sait',
        demo: 'https://kalips0o.github.io/Anime-sait/',
    },
    {
        id: 'adminPanel',
        name: 'Chat Control',
        description:
            'Chat Control, designed to help owners of groups and channels in Telegram.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: adminPanel,
        repo: 'https://gitlab.com/itpm-chat-bot',
        demo: 'https://t.me/ITPM_dev_main_bot',
    },
    {
        id: 'redStone',
        name: 'Red Stone Game',
        description: 'Red Stone is a PWA card game inspired by the style and mechanics of Hearthstone',
        tags: [
            {
                name: 'PWA',
                color: 'blue-text-gradient',
            },
            {
                name: 'React',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: redStone,
        repo: 'https://github.com/Kalips0o/Red-stone-game',
        demo: 'https://red-stone-game.vercel.app/',
    },
    {
        id: 'tl',
        name: 'Todolist',
        description: `A single-page application for those things that need to be done, bought, or simply remembered.`,
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'mui',
                color: 'pink-text-gradient',
            },
        ],
        image: tl,
        repo: 'https://github.com/Kalips0o/Todolist',
        demo: 'https://Kalips0o.github.io/Todolist',
    },
    {
        id: 'sn',
        name: 'Social Network',
        description:
            'A simple and clear single page application  for user communication.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: sn,
        repo: 'https://github.com/Kalips0o/Social-network',
        demo: 'https://Kalips0o.github.io/Social-network/',
    },
];

export {technologies, experiences, projects};
