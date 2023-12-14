import { Action } from "redux";

export enum RadioActionTypes {
    SET_SELECT_TYPE = 'SET_SELECT_TYPE',
}

export interface RadioAction extends Action {
    type: RadioActionTypes;
    payload: string;
}
export const setRadioType = (type : string): RadioAction => ({
    type: RadioActionTypes.SET_SELECT_TYPE ,
    payload: type,
});
