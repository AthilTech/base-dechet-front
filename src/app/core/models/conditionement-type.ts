export class ConditionementType {
    conditioningTypeId: string & { isGuid: true }
    value: string;
    isActive: boolean = true;
}

