export class Provider {
    providerId: string & { isGuid: true }
    providerName: string;
    filePath: string;
    fileName: string;
    providerTel: number;
    isApproved: boolean;
    address: string;
    isActive: boolean;
}