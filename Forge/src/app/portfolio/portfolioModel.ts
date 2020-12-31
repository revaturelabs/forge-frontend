import { User } from "../models/user";

export interface Portfolio {
    id: number;
    belongsTo: User;
    status: string;
    aboutMe: Object;
    industryEquivalency: Object;
    myUser: Object;
    projects: Object;
    education: Object;
    skillMatrix: Object;
}