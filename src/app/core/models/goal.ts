export class Goal {
    goalId: string & { isGuid: true }
    goalValue: number;
    addDate: number;
    isActif: boolean;
}