import {BeneficiariesState, BeneficiariesActionTypes} from './beneficiariesTypes';
import {
    SAVE_BENEFICIARIES_LIST,
} from './beneficiariesTypes';

const initialSate : BeneficiariesState ={
    beneficiariesList:[]};

export default function beneficiariesReducer(
    state = initialSate,
    action: BeneficiariesActionTypes,
) {
    switch (action.type) {
        case SAVE_BENEFICIARIES_LIST:
            return { ...state, beneficiariesList:  action.payload}
        default:
            return state;
    }
}
