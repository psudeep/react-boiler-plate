import {Action, createAction, handleActions} from "redux-actions";
import { LoginState} from "../../types";

export const LOGIN_START = 'LOGIN_START';
// export const loginStart = createAction<Credentials>(LOGIN_START);
export const LOGIN_SUCCESS1 = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS1);

export const loginReducer1 = handleActions<LoginState, boolean>({
  [LOGIN_SUCCESS1]: (state: LoginState, {payload}: Action<boolean>) => {
    return {
      loginStatus: payload
    }
  }
}, {
  loginStatus: false
});