import * as types from "reducers/actionTypes";
import { macaulayLibraryData, macaulayLibraryHead } from "variables/template"

export const createItem = (data) => {
    return (dispatch) => {
        return dispatch({ type: types.API_RETRIEVED, key: "macaulayLibraryData", payload: data });
    }
}

export const fetchMacaulayLibraryData = () => {
    return (dispatch) => {
        return dispatch({ type: types.API_RETRIEVED, key: "macaulayLibraryData", payload: macaulayLibraryData });
    }
}

export const fetchMacaulayLibraryHead = () => {
    return (dispatch) => {
        return dispatch({ type: types.API_RETRIEVED, key: "macaulayLibraryHead", payload: macaulayLibraryHead });
    }
}