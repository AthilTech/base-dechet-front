export class Visite {
    visiteId: string & { isGuid: true }
    visitDetails: number;
    dateVisite: Date;
    etat: number;
    note:number;
    isActif: boolean;
    rapport: string 
}