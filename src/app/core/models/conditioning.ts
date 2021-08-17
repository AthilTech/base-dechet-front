export class Conditioning {
    conditioningId: string & { isGuid: true }
    conditioningLabel: string;
    isActive: boolean = true;
    fkConditioningType: string;
}
