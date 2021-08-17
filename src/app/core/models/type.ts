export class Type {
    typeId: string & { isGuide: true };
    typeLabel: string;
    fK_Type: string;
    fK_Nature: string;
   // fK_Goal: string;
   // fK_Conditioning: string;
   // fK_ManagementMode: string;
    listSousType: Type[];
}