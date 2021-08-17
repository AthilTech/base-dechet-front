export class Type_Subsidiary {
    type_SubsidiaryId: string & { isGuid: true }
    fK_Subsidiary: string & { isGuid: true };
    fK_Type: string & { isGuid: true }
    fK_Goal: string & { isGuid: true }
    fK_Conditioning: string & { isGuid: true }
    fK_Nature: string & { isGuid: true }
}