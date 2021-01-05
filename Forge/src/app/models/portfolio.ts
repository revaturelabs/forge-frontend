import { User } from "../models/user";
import { PortfolioItem } from '../models/portfolio-item';

export class Portfolio {
    id: number;
    status: string;
    userId: number; //check name on java side
    portfolioSection?: PortfolioItem[]; 
}
