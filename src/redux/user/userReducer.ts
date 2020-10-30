import  {UserActionTypes, UserInfo, UserState} from './userTypes';
import {SAVE_USER_INFO} from './userTypes';
const initialSate : UserState = {
    authToken: null,
    id: 0,
    firstName: '',
    lastName: '',
    description: null,
    email: '',
    documentId: '',
    TypeDocumentId: 0,
    img: '',
    cel: '',
    tel: null,
    addressOption: null,
    addressTypeNumber: null,
    addressNumberOne: null,
    addressNumberTwo: null,
    RoleId: 0,
    ranking: 0,
    activateCel: false,
    activateEmail: false,
    experienceYears: null,
    zone: null,
    transport: false,
    CityId: 0,
    AccountBankId: null,
    StatusUserId: 0,
    KnowledgeId: null,
    gender: '',
    birthday: '',
    createdAt: '',
    updatedAt: '',
    Role: {id: 0,
        name: 'string'},
    StatusUser: {id: 0,
        name: 'string'},
    Knowledge: null,
    Certifieds:[],
    AccountBank: null,
    City: null,
};

export default function UserReducer(
    state = initialSate,
    action: UserActionTypes,
) {
    switch (action.type) {
        case SAVE_USER_INFO:
            return {
                //authToken: action.payload.authToken,
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                description: action.payload.description,
                email: action.payload.email,
                documentId: action.payload.documentId,
                TypeDocumentId: action.payload.TypeDocumentId,
                img: action.payload.img,
                cel: action.payload.cel,
                tel: action.payload.tel,
                addressOption: action.payload.addressOption,
                addressTypeNumber: action.payload.addressTypeNumber,
                addressNumberOne: action.payload.addressNumberOne,
                addressNumberTwo: action.payload.addressNumberTwo,
                RoleId: action.payload.RoleId,
                ranking: action.payload.ranking,
                activateCel: action.payload.activateCel,
                activateEmail: action.payload.activateEmail,
                experienceYears: action.payload.experienceYears,
                zone: action.payload.zone,
                transport: action.payload.transport,
                CityId: action.payload.CityId,
                AccountBankId: action.payload.AccountBankId,
                StatusUserId: action.payload.StatusUserId,
                KnowledgeId: action.payload.KnowledgeId,
                gender: action.payload.gender,
                birthday: action.payload.birthday,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
                Role: ({
                    id: action.payload.Role.id,
                    name: action.payload.Role.name,
                }),
                StatusUser: ({
                    id: action.payload.StatusUser.id,
                    name: action.payload.StatusUser.name,
                }),
                Knowledge: null,
                Certifieds: action.payload.Certifieds,
                AccountBank: null,
                City: action.payload.City
                    ? ({
                        id: action.payload.City.id,
                        name: action.payload.City.name,
                        Country: ({
                            nameEs: action.payload.City.Country.nameEs,
                            dialCode: action.payload.City.Country.dialCode,
                        }),
                    })
                    : null,
            };
        case "SIGN_IN": return {authToken: action.payload.authToken, ...state};
        case "SIGN_OUT": return {authToken:null, ...state}
        default:
            return state;
    }
}
