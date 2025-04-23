import type {Ability} from "~/model/Ability";

export interface Skill {
    title: string;
    description: string;
    icon: string;
    gradient: string;
    orbGradient: string;
    abilities: Ability[];
}