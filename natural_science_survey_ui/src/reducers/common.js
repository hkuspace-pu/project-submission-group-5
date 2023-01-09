import * as types from "reducers/actionTypes"

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.API_FETCHING:
            return { ...state, [action.key]: { loading: true } };
        case types.API_RETRIEVED:
            return { ...state, [action.key]: action.payload };
        case types.API_RETRIEVED_WITH_NO_DATA:
            return { ...state, [action.key]: action.payload };
        case types.API_CONNECTION_ERROR:
            return { ...state, [action.key]: action.payload };
        case types.API_ERROR:
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
}
