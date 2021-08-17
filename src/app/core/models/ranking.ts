export class Ranking {
    rankingId: string & { isGuid: true }
    minValue: number;
    maxValue: number;
    rankingLabel: string;
    isActive: boolean;
}