export class SkillMatrix{
    itemType: "SkillMatrix";
    id: number;
    priority: number;
    title: string;
    portfolioItemsId: number;
    skillMatrixItem: Object[];
    requirements: string; //added this staticRequirement group
    entryAmount: string;  //added this staticRequirement group 
}