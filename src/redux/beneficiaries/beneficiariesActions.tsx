import  {
    saveBeneficiariesAction,
} from './beneficiariesTypes';
import {AppThunk} from '../combinedReducer'

import {
    ApiResponseAll,
    axiosDelete,
    axiosGet,
    axiosPost,
} from '../../common/networking';

import {
    SAVE_BENEFICIARIES_LIST,
} from './beneficiariesTypes';

export function getBeneficiaries(): AppThunk<
    ApiResponseAll<saveBeneficiariesAction['payload']>
    > {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosGet<saveBeneficiariesAction['payload']>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/beneficiary`,
                //getState().user.authToken,
            );
            if (!response.error) {
                dispatch(saveBeneficiaries(response.data));
            } else {
                navigate('AlertModal', {text: response.message});
            }
            return response;
        } catch (e) {
            navigate('ErrorModal', {text: 'Error de Red'});
            throw e;
        }
    };
}

export function getDetailedBeneficiary(
    beneficiaryId: number,
): AppThunk<ApiResponseAll<Required<any>>> {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosGet<Required<any>>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/beneficiary/details/${beneficiaryId}`,
                //getState().authentication.authToken,
            );
            if (response.error) {
                navigate('AlertModal', {text: response.message});
            }
            return response;
        } catch (e) {
            navigate('ErrorModal', {text: 'Error de Red'});
            throw e;
        }
    };
}

export function createBeneficiary(
    beneficiaryData: any,
): AppThunk<ApiResponseAll<any>> {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosPost<any>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/beneficiary/save`,
                beneficiaryData,
               //getState().authentication.authToken,
            );
            if (response.error) {
                navigate('AlertModal', {text: response.message});
            }
            return response;
        } catch (e) {
            navigate('ErrorModal', {text: 'Error de Red'});
            throw e;
        }
    };
}

export function deleteBeneficiary(
    beneficiaryId: number,
): AppThunk<ApiResponseAll<saveBeneficiariesAction['payload']>> {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosDelete<saveBeneficiariesAction['payload']>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/beneficiary/delete/${beneficiaryId}`,
                //getState().authentication.authToken,
            );
            if (response.error) {
                navigate('AlertModal', {text: response.message});
            }
            return response;
        } catch (e) {
            navigate('ErrorModal', {text: 'Error de Red'});
            throw e;
        }
    };
}


function saveBeneficiaries(
    payload: saveBeneficiariesAction['payload'],
): saveBeneficiariesAction {
    return {
        type: SAVE_BENEFICIARIES_LIST,
        payload,
    };
}

