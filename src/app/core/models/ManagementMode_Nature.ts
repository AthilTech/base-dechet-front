export class ManagemantMode_Nature {
    managemantMode_NatureId: string & { isGuid: true }
    fk_NatureId: string & { isGuid: true }
    fk_ManagementModeId: string & { isGuid: true }
    isActive: boolean;
}