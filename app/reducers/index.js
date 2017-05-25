const initialState = {
    input: '',
    showList: false,
    value: '',
    city: {
        city: 'Boston',
        growth_from_2000_to_2013: "9.4%",
        population:"645966",
        state:"Massachusetts",
        latitude: 42.3600825,
        longitude: -71.0588801
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
                city: payload
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
