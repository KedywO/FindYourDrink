export const fraseReducer = (
    state = {frase: ""},
    {type, payload}) => {
    switch (type){
        case 'SET_FRASE':
            return {
                ...state,
                frase: payload
            }
        default:
            return state;
    }
};

export const setFraseAction = frase => ({
    type: 'SET_FRASE',
    payload: frase
});