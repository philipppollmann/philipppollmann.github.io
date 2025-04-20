import { Skill } from '@/models/Skill';
import { Ability } from '@/models/Ability';

const skills: Skill[] = [
    {
        title: 'Frontend Development',
        description: 'Erfahrung in der Entwicklung von Benutzeroberflächen mit modernen Frameworks.',
        icon: '💻',
        gradient: 'from-blue-600 to-blue-400',
        orbGradient: 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.8) 0%, rgba(96, 165, 250, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
        abilities: [
            { name: 'Vue.js', level: 10 / 10, color: '#42b883' },
            { name: 'Nuxt.js', level: 9 / 10, color: '#00DC82' },
            { name: 'React', level: 8 / 10, color: '#61dafb' },
            { name: 'Tailwind CSS', level: 9 / 10, color: '#38bdf8' },
            { name: 'TypeScript', level: 8 / 10, color: '#3178c6' }
        ]
    },
    {
        title: 'Backend Development',
        description: 'Erfahrung mit serverseitiger Entwicklung, APIs und Datenbankdesign.',
        icon: '🛠️',
        gradient: 'from-green-600 to-lime-400',
        orbGradient: 'linear-gradient(to bottom right, rgba(22, 163, 74, 0.8) 0%, rgba(132, 204, 22, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
        abilities: [
            { name: 'Go', level: 6 / 10, color: '#00ADD8' },
            { name: 'Kotlin', level: 7 / 10, color: '#A97BFF' },
            { name: 'C#', level: 6 / 10, color: '#9B4993' },
            { name: 'Python', level: 8 / 10, color: '#f7df1e' },
            { name: 'Elixir', level: 2 / 10, color: '#4E2A8E' }
        ]
    },
    {
        title: 'DevOps / Infrastructure Engineering',
        description: 'Bereitstellung, CI/CD und Infrastruktur als Code mit modernen Tools.',
        icon: '⚙️',
        gradient: 'from-gray-700 to-gray-400',
        orbGradient: 'linear-gradient(to bottom right, rgba(55, 65, 81, 0.8) 0%, rgba(156, 163, 175, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
        abilities: [
            { name: 'Microsoft Azure', level: 9 / 10, color: '#0078d4' },
            { name: 'Terraform', level: 9 / 10, color: '#623CE4' },
            { name: 'Docker', level: 9 / 10, color: '#2496ed' },
            { name: 'Kubernetes', level: 8 / 10, color: '#326ce5' },
            { name: 'GitLab Pipelines', level: 8 / 10, color: '#FC6D26' },
        ]
    },
    {
        title: 'Data Science / Machine Learning',
        description: 'Bereitstellung, CI/CD und Infrastruktur als Code mit modernen Tools.',
        icon: '📊',
        gradient: 'from-yellow-400 to-lime-300',
        orbGradient: 'linear-gradient(to bottom right, rgba(250, 204, 21, 0.8) 0%, rgba(190, 242, 100, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
        abilities: [
            { name: 'Apache AirFlow', level: 8 / 10, color: '#150458' },
            { name: 'Apache Spark', level: 8 / 10, color: '#013243' },
            { name: 'MLFlow', level: 7 / 10, color: '#ff6f20' },
            { name: 'ONNX', level: 7 / 10, color: '#231F20' },
        ]
    },
    {
        title: 'Data Storage / Data Engineering',
        description: 'Bereitstellung, CI/CD und Infrastruktur als Code mit modernen Tools.',
        icon: '📦',
        gradient: 'from-[#8e52fc] to-[#00d886]',
        orbGradient: 'linear-gradient(to bottom right, rgba(142, 82, 252, 0.8) 0%, rgba(0, 216, 134, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
        abilities: [
            { name: 'Snowflake', level: 8 / 10, color: '#29B5E8' },
            { name: 'PostgreSQL', level: 8 / 10, color: '#336791' },
            { name: 'Apache Kafka', level: 8 / 10, color: '#231F20' },
        ]
    },
];

export default skills;