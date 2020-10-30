import  {Action, combineReducers} from 'redux';
import  {ThunkAction} from '@prodigos/redux-thunk';
import userReducer from './user/userReducer';
import beneficiariesReducer from './beneficiaries/beneficiariesReducer'

const rootReducer = combineReducers(
    {
        user: userReducer,
        beneficiaries: beneficiariesReducer,
    },
);

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
    Promise<ReturnType>,
    RootState,
    (route: string, params?: {[key: string]: any}) => void,
    Action<string>
    >;
export default rootReducer;
