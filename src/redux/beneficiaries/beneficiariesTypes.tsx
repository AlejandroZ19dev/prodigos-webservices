export interface BeneficiaryInfo{
    readonly id: number;
    readonly BeneficiaryId: number;
    readonly RelationshipId: number;
    readonly UserId: number;
    readonly info: {
        readonly healthEntity: string;
        readonly heightBeneficiary: number;
        readonly weightBeneficiary: number;
        readonly hospital: string;
        readonly mobility: string;
        readonly prepaidMedicalCare?: string;
        readonly BeneficiariesContacts: any[];
        readonly baseInfo: {
            readonly firstName: string;
            readonly lastName: string;
            readonly birthday: string;
            readonly documentId?: string;
            readonly TypeDocumentId: number;
            readonly img: string;
            readonly gender: string;
        };
    };
    readonly relationshipName: {
        readonly id: number;
        readonly name: string;
    };
    readonly medications: any[];
    readonly diseases: any[];
    readonly allergies: any[];
}

export interface BeneficiariesState {
    readonly beneficiariesList: BeneficiaryInfo[];

}

export const SAVE_BENEFICIARIES_LIST = 'SAVE_BENEFICIARIES_LIST';

export interface saveBeneficiariesAction {
    readonly type: typeof SAVE_BENEFICIARIES_LIST;
    readonly payload: BeneficiaryInfo[];
}

export type BeneficiariesActionTypes =
    | saveBeneficiariesAction;
