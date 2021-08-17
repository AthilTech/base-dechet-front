export class Conditionnement {
    conditioningId: string & { isGuide: true };
    conditioningLabel: string;
    isActive: boolean = true;
    fkConditioningType: string;
}