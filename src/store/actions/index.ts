import {SetUserName} from './user';

export interface NullAction{
    type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes = NullAction | SetUserName;

export enum TypeKeys {
    NULL = "NULL",
    ERROR = "ERROR",
    SET_USER_NAME = "SET_USER_NAME"
}