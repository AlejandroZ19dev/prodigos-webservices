import axios, {AxiosError} from 'axios';

interface ApiResponse<D = unknown> {
    message: string;
    error: boolean;
    data: D;
}

interface ApiResponseSuccess<D> extends ApiResponse<D> {
    error: false;
}

interface ApiResponseFailed<D> extends ApiResponse<D> {
    error: true;
}

export type ApiResponseAll<DataResponse, DataResponseOnError = unknown> =
    | ApiResponseSuccess<DataResponse>
    | ApiResponseFailed<DataResponseOnError>;

export async function axiosGet<DataResponse, DataResponseOnError = unknown>(
    url: string,
    token?: string | null,
): Promise<ApiResponseAll<DataResponse, DataResponseOnError>> {
    try {
        const response = await axios.get<
            ApiResponseAll<DataResponse, DataResponseOnError>
            >(url, {
            headers: {Authorization: token},
        });
        return onSuccess(response.data);
    } catch (error) {
        if (isAxiosError<DataResponseOnError>(error)) {
            if (error.response) {
                return onSuccess(error.response.data);
            }
            throw error;
        }
        throw error;
    }
}

export async function axiosPost<
    DataResponse,
    DataResponseOnError = unknown,
    BodyData = any
    >(
    url: string,
    data: BodyData,
    token?: string | null,
    customHeader?: {},
): Promise<ApiResponseAll<DataResponse, DataResponseOnError>> {
    try {
        const response = await axios.post<
            ApiResponseAll<DataResponse, DataResponseOnError>
            >(url, data, {
            headers: {Authorization: token, ...customHeader},
        });
        return onSuccess(response.data);
    } catch (error) {
        if (isAxiosError<DataResponseOnError>(error)) {
            if (error.response) {
                return onSuccess(error.response.data);
            }
            throw error;
        }
        throw error;
    }
}

export async function axiosPut<
    DataResponse,
    DataResponseOnError = unknown,
    BodyData = any
    >(
    url: string,
    data: BodyData,
    token?: string | null,
    customHeader?: {},
): Promise<ApiResponseAll<DataResponse, DataResponseOnError>> {
    try {
        const response = await axios.put<
            ApiResponseAll<DataResponse, DataResponseOnError>
            >(url, data, {headers: {Authorization: token, ...customHeader}});
        return onSuccess(response.data);
    } catch (error) {
        if (isAxiosError<DataResponseOnError>(error)) {
            if (error.response) {
                return onSuccess(error.response.data);
            }
            throw error;
        }
        throw error;
    }
}

export async function axiosDelete<DataResponse, DataResponseOnError = unknown>(
    url: string,
    token?: string | null,
): Promise<ApiResponseAll<DataResponse, DataResponseOnError>> {
    try {
        const response = await axios.delete<
            ApiResponseAll<DataResponse, DataResponseOnError>
            >(url, {headers: {Authorization: token}});
        return onSuccess(response.data);
    } catch (error) {
        if (isAxiosError<DataResponseOnError>(error)) {
            if (error.response) {
                return onSuccess(error.response.data);
            }
            throw error;
        }
        throw error;
    }
}

export function axiosMerge<T>(values: (T | Promise<T>)[]): Promise<T[]> {
    return axios.all(values);
}

function isAxiosError<DataResponseOnError>(
    e: any,
): e is AxiosError<ApiResponseFailed<DataResponseOnError>> {
    return e.isAxiosError;
}

function onSuccess<T>(data: T): T {
    return data;
}
