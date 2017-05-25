const initialState = {
    input: ''
}
export function main(state=initialState, action) {
    const { type, payload } = action

    switch(type) {
        case 'CHANGE_INPUT': {
            return {
                ...state,
                input: payload
            }
        }
    }
    return state
}
