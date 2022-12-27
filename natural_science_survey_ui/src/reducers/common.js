import * as types from "reducers/actionTypes"

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.API_FETCHING:
            return { ...state, [action.key]: { loading: true } };
        case types.API_RETRIEVED, types.API_RETRIEVED_WITH_NO_DATA, types.API_CONNECTION_ERROR, types.API_ERROR:
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
}
