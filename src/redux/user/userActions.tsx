import {
    ApiResponseAll,
    axiosGet,
    axiosPost,
    axiosPut,
} from '../../common/networking';
import {AppThunk} from '../combinedReducer'
import OpenNotificationWithIcon from "../../common/components/Notifications/NotificationPop";
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {SIGN_IN, SIGN_OUT, signInAction, signOutAction} from "./userTypes";
import {Redirect} from "react-router-dom";
import React from "react";

interface responseCreateUser {
    CityId: number;
    RoleId: number;
    StatusUserId: number;
    TotalRateId: number;
    TypeDocumentId: number;
    birthday: unknown;
    cel: string;
    createdAt: string;
    documentId: string;
    email: string;
    firstName: string;
    id: number;
    img: string;
    lastName: string;
    updatedAt: string;
}

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

export function createUser(
    userInfo: any,
): AppThunk<ApiResponseAll<responseCreateUser>> {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosPost<responseCreateUser>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/user/client-role`,
                userInfo,
            );
            console.log('lo que responde back',response.message);
            if (response.error) {
               console.log('peto',response.message);
            }
            return response;
        } catch (e) {
            console.log('navegar a algo de error')
            throw e;
        }
    };
}
export function sendEmailResetPassword(
    email?: string,
): AppThunk<ApiResponseAll<any>> {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosPost<any>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/user/email/reset/password`,
                {email},
            );
            if (!response.error) {
                 OpenNotificationWithIcon('success', 'Usuario Registrado Correctamente', response.message);
                console.log('Nopeto',response.message);
            }else {
                 OpenNotificationWithIcon('success', 'Operación Fallida1', response.message);
                console.log('peto',response.message);
            }
            return response;
        } catch (e) {
            OpenNotificationWithIcon('success', 'Operación Fallida', null);
            throw e;
        }
    };
}

export function thunkSignIn(
    email: string,
    password: string,
    source: number,
): AppThunk<ApiResponseAll<signInAction['payload']>> {
    return async function (dispatch, getState, navigate) {
        try {
            const response = await axiosPost<signInAction['payload']>(
                `https://e5crf48bfl.execute-api.us-east-1.amazonaws.com/dev/api/user/login`,
                {email, password, source},
            );
            if (!response.error) {
                localStorage.setItem('@authToken', response.data.authToken);
                sessionStorage.setItem('@authToken',response.data.authToken);
                dispatch(signIn(response.data));
                console.log('no peto',response.message);
            }
            return response;
        } catch (e) {
            console.log('navegar a algo de error2')
            throw e;
        }
    };
}

export function signIn(payload: signInAction['payload']): signInAction {
    return {
        type: SIGN_IN,
        payload: payload,
    };
}

export function signOut(payload: signOutAction['payload']): signOutAction {
    return {
        type: SIGN_OUT,
        payload: payload,
    };
}
