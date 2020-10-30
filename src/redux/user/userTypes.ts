
export interface UserInfo {
    readonly authToken: string | null;
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly description: string | null;
    readonly email: string;
    readonly documentId: string;
    readonly TypeDocumentId: number;
    readonly img: string;
    readonly cel: string;
    readonly tel: string | null;
    readonly addressOption: string | null;
    readonly addressTypeNumber: string | null;
    readonly addressNumberOne: string | null;
    readonly addressNumberTwo: string | null;
    readonly RoleId: number;
    readonly ranking: number;
    readonly activateCel: boolean;
    readonly activateEmail: boolean;
    readonly experienceYears: number | null;
    readonly zone: string | null;
    readonly transport: boolean;
    readonly CityId: number | null;
    readonly AccountBankId: number | null;
    readonly StatusUserId: number;
    readonly KnowledgeId: number | null;
    readonly gender: string;
    readonly birthday: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly Knowledge: unknown | null;
    readonly Certifieds: [];
    readonly AccountBank: unknown | null;
    readonly Role: {
        readonly id: number;
        readonly name: string;};
    readonly StatusUser: {
        readonly id: number;
        readonly name: string;};
    readonly City: {
        readonly id: number;
        readonly name: string;
        readonly Country: {
            readonly nameEs: string;
            readonly dialCode: string;
        }
    } | null;
}


export interface UserState {
    readonly authToken: string | null;
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly description: string | null;
    readonly email: string;
    readonly documentId: string;
    readonly TypeDocumentId: number;
    readonly img: string;
    readonly cel: string;
    readonly tel: string | null;
    readonly addressOption: string | null;
    readonly addressTypeNumber: string | null;
    readonly addressNumberOne: string | null;
    readonly addressNumberTwo: string | null;
    readonly RoleId: number;
    readonly ranking: number;
    readonly activateCel: boolean;
    readonly activateEmail: boolean;
    readonly experienceYears: number | null;
    readonly zone: string | null;
    readonly transport: boolean;
    readonly CityId: number | null;
    readonly AccountBankId: number | null;
    readonly StatusUserId: number;
    readonly KnowledgeId: number | null;
    readonly gender: string;
    readonly birthday: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly Knowledge: unknown | null;
    readonly Certifieds: [];
    readonly AccountBank: unknown | null;
    readonly Role: {
        readonly id: number;
        readonly name: string;};
    readonly StatusUser: {
        readonly id: number;
        readonly name: string;};
    readonly City: {
        readonly id: number;
        readonly name: string;
        readonly Country: {
            readonly nameEs: string;
            readonly dialCode: string;
        }
    } | null;

}

export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export interface saveUserInfoAction {
    readonly type: typeof SAVE_USER_INFO;
    readonly payload: UserInfo;
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export interface signInAction {
    readonly type: typeof SIGN_IN;
    readonly payload: {authToken: string};
}
export interface signOutAction {
    readonly type: typeof SIGN_OUT;
    readonly payload: {result: string};
}


export type UserActionTypes =
    | saveUserInfoAction
    | signInAction
    | signOutAction;

