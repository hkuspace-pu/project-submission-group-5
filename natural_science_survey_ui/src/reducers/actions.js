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

export const fetchRecords = () => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'records' })
        fetch(`${isDev ? devHost : ''}/Record`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'records', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'records', payload: { error } })
            });
    }
}

export const fetchNews = () => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'news' })
        fetch(`${isDev ? devHost : ''}/News`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'news', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'news', payload: { error } })
            });
    }
}

export const fetchSpecies = () => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'species' })
        fetch(`${isDev ? devHost : ''}/Species`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'species', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'species', payload: { error } })
            });
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'users' })
        fetch(`${isDev ? devHost : ''}/User`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'users', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'users', payload: { error } })
            });
    }
}

export const fetchComments = () => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'comments' })
        fetch(`${isDev ? devHost : ''}/Comment`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'comments', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'comments', payload: { error } })
            });
    }
}