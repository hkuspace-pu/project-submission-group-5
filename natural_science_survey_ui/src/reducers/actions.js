import * as types from "reducers/actionTypes";
import { macaulayLibraryData, macaulayLibraryHead } from "variables/template"
const isDev = process.env.NODE_ENV === 'development'
const devHost = 'https://localhost:7078'

export const createItem = (data) => {
    return (dispatch) => {
        return dispatch({ type: types.API_RETRIEVED, key: "macaulayLibraryData", payload: data });
    }
}

export const fetchMacaulayLibraryData = () => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'macaulayLibraryData' })
        fetch(`${isDev ? devHost : ''}/SurveyRecord`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'macaulayLibraryData', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'macaulayLibraryData', payload: { error } })
            });
    }
}

export const fetchMacaulayLibraryHead = () => {
    return (dispatch) => {
        return dispatch({ type: types.API_RETRIEVED, key: "macaulayLibraryHead", payload: macaulayLibraryHead });
    }
}