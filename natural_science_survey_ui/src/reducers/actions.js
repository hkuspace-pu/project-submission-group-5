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
                dispatch({
                    type: types.API_ERROR, key: 'records', payload: [
                        {
                            "recordID": 1,
                            "userID": 1,
                            "speciesID": 1,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "width": 1765,
                            "height": 2205,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 2,
                            "userID": 2,
                            "speciesID": 2,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517421841/",
                            "width": 1440,
                            "height": 1440,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 3,
                            "userID": 3,
                            "speciesID": 3,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shing Mun, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518901101/",
                            "width": 2667,
                            "height": 4000,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 4,
                            "userID": 4,
                            "speciesID": 4,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518138711/",
                            "width": 2826,
                            "height": 4030,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 5,
                            "userID": 5,
                            "speciesID": 5,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518138541/",
                            "width": 1536,
                            "height": 2346,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 6,
                            "userID": 6,
                            "speciesID": 5,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shing Mun, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518901141/",
                            "width": 2333,
                            "height": 3500,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 7,
                            "userID": 7,
                            "speciesID": 1,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093451/",
                            "width": 1884,
                            "height": 2355,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 8,
                            "userID": 8,
                            "speciesID": 2,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517421831/",
                            "width": 1440,
                            "height": 1440,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 9,
                            "userID": 9,
                            "speciesID": 6,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517421551/",
                            "width": 1439,
                            "height": 1440,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 10,
                            "userID": 10,
                            "speciesID": 4,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517421801/",
                            "width": 1440,
                            "height": 1440,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 11,
                            "userID": 1,
                            "speciesID": 7,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shing Mun, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/519397581/",
                            "width": 2334,
                            "height": 3500,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 12,
                            "userID": 2,
                            "speciesID": 3,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shing Mun, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/519397471/",
                            "width": 2667,
                            "height": 4000,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 13,
                            "userID": 3,
                            "speciesID": 3,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shing Mun, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/519397461/",
                            "width": 2666,
                            "height": 4000,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 14,
                            "userID": 4,
                            "speciesID": 3,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shing Mun, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/519397451/",
                            "width": 2667,
                            "height": 4000,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 15,
                            "userID": 5,
                            "speciesID": 4,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518138721/",
                            "width": 3042,
                            "height": 4984,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 16,
                            "userID": 6,
                            "speciesID": 8,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "San Tin, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518525121/",
                            "width": 2000,
                            "height": 3000,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 17,
                            "userID": 7,
                            "speciesID": 9,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518138621/",
                            "width": 2954,
                            "height": 4068,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 18,
                            "userID": 8,
                            "speciesID": 5,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518138561/",
                            "width": 3613,
                            "height": 5312,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 19,
                            "userID": 9,
                            "speciesID": 10,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Shui Hau, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517421511/",
                            "width": 1440,
                            "height": 1440,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 20,
                            "userID": 10,
                            "speciesID": 11,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Nai Chung-Che Ha coast, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/516970141/",
                            "width": 1876,
                            "height": 2517,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 21,
                            "userID": 1,
                            "speciesID": 12,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Mai Po Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518104351/",
                            "width": 917,
                            "height": 1066,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 22,
                            "userID": 2,
                            "speciesID": 13,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Mai Po Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518102741/",
                            "width": 1827,
                            "height": 2083,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 23,
                            "userID": 3,
                            "speciesID": 14,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Mai Po Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518102611/",
                            "width": 1252,
                            "height": 1209,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 24,
                            "userID": 4,
                            "speciesID": 14,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Mai Po Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518102571/",
                            "width": 1096,
                            "height": 1461,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 25,
                            "userID": 5,
                            "speciesID": 14,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Mai Po Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518102491/",
                            "width": 785,
                            "height": 1054,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 26,
                            "userID": 6,
                            "speciesID": 15,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Mai Po Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518102001/",
                            "width": 1288,
                            "height": 1748,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 27,
                            "userID": 7,
                            "speciesID": 16,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Lion s Nature Education Centre ???????, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517992521/",
                            "width": 1421,
                            "height": 2131,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 28,
                            "userID": 8,
                            "speciesID": 17,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Lion s Nature Education Centre ???????, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517991681/",
                            "width": 1482,
                            "height": 2223,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 29,
                            "userID": 9,
                            "speciesID": 18,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Po Toi ferry, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517783371/",
                            "width": 1341,
                            "height": 1341,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 30,
                            "userID": 10,
                            "speciesID": 19,
                            "longitude": -123.1207,
                            "latitude": 49.2827,
                            "dateObserved": "2023-04-28T09:00:00",
                            "age": 0,
                            "sex": 0,
                            "location": "Tai Po Kau Nature Reserve, Hong Kong, Hong Kong",
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/517756861/",
                            "width": 3002,
                            "height": 4711,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 31,
                            "userID": 12,
                            "speciesID": 1,
                            "longitude": 142,
                            "latitude": 32,
                            "dateObserved": "2023-05-25T03:52:55.72",
                            "age": 2,
                            "sex": 3,
                            "location": "Hong Kong",
                            "photoUrl": "blob:http://localhost:3000/4fe632e5-2756-4780-b691-88015e735223",
                            "width": 0,
                            "height": 0,
                            "status": 0,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 32,
                            "userID": 3,
                            "speciesID": 1,
                            "longitude": 100,
                            "latitude": 32,
                            "dateObserved": "2023-05-25T04:18:05.14",
                            "age": 0,
                            "sex": 0,
                            "location": "Hong Kong ",
                            "photoUrl": "blob:http://localhost:3000/53648747-2e70-4e83-9d1c-adeaf7016e9c",
                            "width": 0,
                            "height": 0,
                            "status": 1,
                            "reviewerID": 3
                        },
                        {
                            "recordID": 33,
                            "userID": 3,
                            "speciesID": 1,
                            "longitude": 98,
                            "latitude": 22,
                            "dateObserved": "2023-05-25T04:18:46.49",
                            "age": 10,
                            "sex": 2,
                            "location": "Hong Kong",
                            "photoUrl": "blob:http://localhost:3000/6aa5778e-ad6e-4c01-9fd9-6a45c2997a6f",
                            "width": 0,
                            "height": 0,
                            "status": 1,
                            "reviewerID": 3
                        }
                    ]
                })
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
                dispatch({
                    type: types.API_ERROR, key: 'species', payload: [
                        {
                            "speciesID": 1,
                            "speciesCode": "eurkes",
                            "commonName": "Eurasian Kestrel",
                            "sciName": "Falco tinnunculus"
                        },
                        {
                            "speciesID": 2,
                            "speciesCode": "grybus1",
                            "commonName": "Gray Bushchat",
                            "sciName": "Saxicola ferreus"
                        },
                        {
                            "speciesID": 3,
                            "speciesCode": "japthr1",
                            "commonName": "Japanese Thrush",
                            "sciName": "Turdus cardis"
                        },
                        {
                            "speciesID": 4,
                            "speciesCode": "taifly1",
                            "commonName": "Taiga Flycatcher",
                            "sciName": "Ficedula albicilla"
                        },
                        {
                            "speciesID": 5,
                            "speciesCode": "scathr2",
                            "commonName": "White s Thrush",
                            "sciName": "Zoothera aurea"
                        },
                        {
                            "speciesID": 6,
                            "speciesCode": "cregos1",
                            "commonName": "Crested Goshawk",
                            "sciName": "Accipiter trivirgatus"
                        },
                        {
                            "speciesID": 7,
                            "speciesCode": "whrsha",
                            "commonName": "White-rumped Shama",
                            "sciName": "Copsychus malabaricus"
                        },
                        {
                            "speciesID": 8,
                            "speciesCode": "temsti",
                            "commonName": "Temminck s Stint",
                            "sciName": "Calidris temminckii"
                        },
                        {
                            "speciesID": 9,
                            "speciesCode": "sibrub",
                            "commonName": "Siberian Rubythroat",
                            "sciName": "Calliope calliope"
                        },
                        {
                            "speciesID": 10,
                            "speciesCode": "kenplo1",
                            "commonName": "Kentish Plover",
                            "sciName": "Charadrius alexandrinus"
                        },
                        {
                            "speciesID": 11,
                            "speciesCode": "bkbplo",
                            "commonName": "Black-bellied Plover",
                            "sciName": "Pluvialis squatarola"
                        },
                        {
                            "speciesID": 12,
                            "speciesCode": "plapri1",
                            "commonName": "Plain Prinia",
                            "sciName": "Prinia inornata"
                        },
                        {
                            "speciesID": 13,
                            "speciesCode": "daured1",
                            "commonName": "Daurian Redstart",
                            "sciName": "Phoenicurus auroreus"
                        },
                        {
                            "speciesID": 14,
                            "speciesCode": "rebsta1",
                            "commonName": "Red-billed Starling",
                            "sciName": "Spodiopsar sericeus"
                        },
                        {
                            "speciesID": 15,
                            "speciesCode": "yebwar3",
                            "commonName": "Yellow-browed Warbler",
                            "sciName": "Phylloscopus inornatus"
                        },
                        {
                            "speciesID": 16,
                            "speciesCode": "olbpip",
                            "commonName": "Olive-backed Pipit",
                            "sciName": "Anthus hodgsoni"
                        },
                        {
                            "speciesID": 17,
                            "speciesCode": "gybthr1",
                            "commonName": "Gray-backed Thrush",
                            "sciName": "Turdus hortulorum"
                        },
                        {
                            "speciesID": 18,
                            "speciesCode": "magrob",
                            "commonName": "Oriental Magpie-Robin",
                            "sciName": "Copsychus saularis"
                        },
                        {
                            "speciesID": 19,
                            "speciesCode": "japrob2",
                            "commonName": "Japanese Robin",
                            "sciName": "Larvivora akahige"
                        }
                    ]
                })
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
                dispatch({
                    type: types.API_ERROR, key: 'users', payload: [
                        {
                            "userID": 1,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "John Smith",
                            "email": "john@example.com",
                            "password": null,
                            "userType": "admin"
                        },
                        {
                            "userID": 2,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Mary Johnson",
                            "email": "mary@example.com",
                            "password": null,
                            "userType": "admin"
                        },
                        {
                            "userID": 3,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Tom Jones",
                            "email": "tom@example.com",
                            "password": null,
                            "userType": "expert"
                        },
                        {
                            "userID": 4,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Jane Doe",
                            "email": "jane@example.com",
                            "password": null,
                            "userType": "expert"
                        },
                        {
                            "userID": 5,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Bob Smith",
                            "email": "bob@example.com",
                            "password": null,
                            "userType": "moderator"
                        },
                        {
                            "userID": 6,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Alice Johnson",
                            "email": "alice@example.com",
                            "password": null,
                            "userType": "moderator"
                        },
                        {
                            "userID": 7,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Mike Jones",
                            "email": "mike@example.com",
                            "password": null,
                            "userType": "user"
                        },
                        {
                            "userID": 8,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Sue Doe",
                            "email": "sue@example.com",
                            "password": null,
                            "userType": "user"
                        },
                        {
                            "userID": 9,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Jim Smith",
                            "email": "jim@example.com",
                            "password": null,
                            "userType": "user"
                        },
                        {
                            "userID": 10,
                            "photoUrl": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/518093321/",
                            "name": "Lisa Johnson",
                            "email": "lisa@example.com",
                            "password": null,
                            "userType": "user"
                        },
                        {
                            "userID": 11,
                            "photoUrl": "",
                            "name": "leo leo",
                            "email": "leo",
                            "password": null,
                            "userType": "user"
                        },
                        {
                            "userID": 12,
                            "photoUrl": "",
                            "name": "Leo Hung",
                            "email": "leo@example.com",
                            "password": null,
                            "userType": "user"
                        }
                    ]
                })
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

export const postUserLogin = (email, password) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'login' })
        fetch(`${isDev ? devHost : ''}/User/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userDisplayName', data.name);
                localStorage.setItem('userType', data.userType);
                localStorage.setItem('email', data.email);
                localStorage.setItem('userId', data.userId);
                window.location = "/survey/search"
                dispatch({ type: types.API_RETRIEVED, key: 'login', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'login', payload: { error } })
            });
    }
}

export const postUserCreate = (name, email, password) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'user' })
        fetch(`${isDev ? devHost : ''}/User`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": name,
                "photoUrl": "",
                "email": email,
                "password": password,
                "userType": "user"
            }),
        })
            .then(response => response.json())
            .then(data => {
                window.location = "/login"
                dispatch({ type: types.API_RETRIEVED, key: 'user', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'user', payload: { error } })
            });
    }
}

export const postUserUpdate = (name, password) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'user' })
        fetch(`${isDev ? devHost : ''}/User/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": name,
                "photoUrl": "",
                "email": localStorage.getItem('email'),
                "password": password,
                "userType": ""
            }),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'user', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'user', payload: { error } })
            });
    }
}

export const postRecordCreate = (record) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'record' })
        fetch(`${isDev ? devHost : ''}/Record`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token'),
            },
            body: JSON.stringify(record),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'record', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'record', payload: { error } })
            });
    }
}

export const fetchRecordById = (id) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'record' })
        fetch(`${isDev ? devHost : ''}/Record/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'record', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'record', payload: { error } })
            });
    }
}

export const fetchCommentByRecordId = (id) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'comments' })
        fetch(`${isDev ? devHost : ''}/Comment/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'comments', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'comments', payload: { error } })
            });
    }
}

export const postCommentCreate = (record) => {
    return (dispatch) => {
        dispatch({ type: types.API_FETCHING, key: 'comment' })
        fetch(`${isDev ? devHost : ''}/Comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: types.API_RETRIEVED, key: 'comment', payload: data })
            }).catch((error) => {
                dispatch({ type: types.API_ERROR, key: 'comment', payload: { error } })
            });
    }
}


export const getToken = () => {
    let token = localStorage.getItem('token')
    if (token) {
        return token
    } else {
        window.location = '/login';
    }
}