export class Dechet {
    dechetId: string & { isGuid: true }
    referenceBordereau: number;
    dateEnlevement: Date;
    tonnage: number;
    nbVoyage:number;
    isActif: boolean;
    fK_Visite: string & { isGuid: true }
    fK_RankingId: string & { isGuid: true }
    fK_CoastsId: string & { isGuid: true }
    fK_Type_Subsidiary_ProviderId: string & { isGuid: true }
    
}