import { Skill } from '@/models/Skill';
import { Ability } from '@/models/Ability';

const skills: Skill[] = [
    {
        title: 'Frontend Development',
        description: 'Spezialisiert auf moderne JavaScript-Frameworks wie Vue.js, React und Angular.',
        icon: '💻',
        gradient: 'from-blue-600 to-blue-400',
        abilities: [
            { name: 'Vue.js', level: 10 / 12 },
            { name: 'React', level: 9 / 12 },
            { name: 'Nuxt.js', level: 11 / 12 }
        ]
    },
    {
        title: 'UI/UX Design',
        description: 'Kreation intuitiver und ästhetischer Benutzeroberflächen mit Fokus auf User Experience.',
        icon: '🎨',
        gradient: 'from-purple-600 to-pink-400',
        abilities: [
            { name: 'Figma', level: 11 / 12 },
            { name: 'Adobe XD', level: 8 / 12 },
            { name: 'Sketch', level: 9 / 12 }
        ]
    }
];

export default skills;