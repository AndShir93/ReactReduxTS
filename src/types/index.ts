export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface IUserState {
  users: [],
  loading: boolean,
  error: null | string,
}

interface IFetchAction {
  type: UserActionTypes.FETCH_USERS,
}

interface IFetchActionSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: [],
}

interface IFetchActionError {
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload: string,
}

export type TAction = IFetchAction | IFetchActionSuccess | IFetchActionError;

export type TUserReducer = (state: IUserState, action: TAction) => IUserState;
