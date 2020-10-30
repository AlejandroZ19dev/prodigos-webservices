import  {AppThunk} from '../../redux/combinedReducer';
import  {ApiResponseAll} from '../networking';
import {useCallback, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Set} from 'immutable';

interface MergedRequests {
    <A>(...args: [() => AppThunk<A>]): Promise<[A]>;
    <A, B>(...args: [() => AppThunk<A>, () => AppThunk<B>]): Promise<[A, B]>;
    <A, B, C>(
        ...args: [() => AppThunk<A>, () => AppThunk<B>, () => AppThunk<C>]
    ): Promise<[A, B, C]>;
    <T>(...args: (() => AppThunk<ApiResponseAll<T>>)[]): Promise<
        ApiResponseAll<T>[]
        >;
}

type Options =
    | {
    runType: 'sequential';
    delay?: number;
}
    | {
    runType: 'parallel';
};

export const UseApiQuery = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<Set<string>>(Set([]));

    const isLoading = useCallback(
        (...titles: string[]) => titles.some((tittle) => loading.has(tittle)),
        [loading],
    );

    const simpleDispatch = useCallback(
        <T, T2>(action: {type: T; payload: T2}) => dispatch(action),
        [dispatch],
    );

    const delay = useCallback(
        (delayDuration: number) =>
            new Promise((resolve) => {
                setTimeout(() => resolve(), delayDuration);
            }),
        [],
    );

    const runRequestsSequential = useCallback<(delayDuration?: number) => MergedRequests
        >(
        (delayDuration = 0) => async (...args: (() => AppThunk<any>)[]) => {
            const responses = [];
            for (let i = 0; i < args.length; i++) {
                const response = await dispatch(args[i]());
                responses.push(response);
                if (i < args.length - 1) {
                    await delay(delayDuration);
                }
            }
            return responses as any;
        },
        [dispatch, delay],
    );

    const runRequestsParallel = useCallback<MergedRequests>(
        (...args: (() => AppThunk<any>)[]) => {
            return Promise.all(args.map((action) => dispatch(action()))) as any;
        },
        [dispatch],
    );

    const runRequests = useCallback(
        (options: Options) => {
            function runRequestsHOF(func: MergedRequests) {
                return function (title: string): MergedRequests {
                    return async function (...args: (() => AppThunk<any>)[]) {
                        setLoading((state) => state.add(title));
                        try {
                            const response: any = await func(...args);
                            setLoading((state) => state.remove(title));
                            return response;
                        } catch (e) {
                            setLoading((state) => state.remove(title));
                            throw e;
                        }
                    };
                };
            }

            switch (options.runType) {
                case 'sequential':
                    return runRequestsHOF(runRequestsSequential(options.delay));
                case 'parallel':
                    return runRequestsHOF(runRequestsParallel);
                default:
                    throw new Error('Not valid run type');
            }
        },
        [runRequestsParallel, runRequestsSequential],
    );

    return useMemo(
        () => ({
            isLoading,
            runRequests,
            simpleDispatch,
        }),
        [isLoading, runRequests, simpleDispatch],
    );
};
