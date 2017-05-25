export function chooseCity(coordinates) {
    return {
        type: 'CHOOSE_CITY',
        payload: coordinates
    }
}
