import { User } from "../models/user";
import { PortfolioItems } from './portfolio-items';

export class Portfolio {
    id: number;
    status: string;
    user: User;
    requirements: string; //added this staticRequirement group
    entryAmount: string;  //added this staticRequirement group 
    portfolioSections: PortfolioItems[]; 
}
