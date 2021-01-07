import { User } from "../models/user";
import { PortfolioItems } from './portfolio-items';

export class Portfolio {
    id: number;
    status: string;
    userId: number; 
    portfolioSection?: PortfolioItems[]; 
}
