export class User {
    userID: string & { isGuid: true };
    nom: string;
    prenom: string;
    lotusAdress: string;
    matricule: string;
    addDate: Date;
    isActive: boolean;
    login: string;
    password: string;
    fK_FilialeID: string & { isGuid: true };
}
