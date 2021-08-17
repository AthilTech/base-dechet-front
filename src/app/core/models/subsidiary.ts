export class Subsidiary {
    subsidiaryId: string & { isGuid: true }
    subsidiaryCode: string;
    label: string;
    domainCode: string;
    entityCode: string;
    isActive: boolean;
    fkSector: string & { isGuid: true }
    sectorLabel: string;
}