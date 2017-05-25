const initialState = {
    input: '',
    showList: false,
    value: '',
    coordinates: {
        lat: 42.3133521,
        lng: -71.1271971
    }
}
export function main(state=initialState, action) {
    const { type, payload } = action

    switch(type) {
        case 'CHANGE_INPUT': {
            return {
                ...state,
                input: payload,
                showList: true
            }
        }
        case 'CHOOSE_CITY': {
            return {
                ...state,
                showList: false,
                coordinates: {
                    lat: payload.lat,
                    lng: payload.lng
                }
            }
        }
        case 'SET_VALUE': {
            return {
                ...state,
                value: payload
            }
        }
    }
    return state
}
