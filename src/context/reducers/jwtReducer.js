export const jwtReducer = (
    state = {jwt: ''},
    {type, payload}) => {
    switch (type){
        case 'SET_JWT':
            return {
                ...state,
                jwt: payload
            }
        default:
            return state;
    }
};

export const setJwtAction = jwt => ({
    type: 'SET_JWT',
    payload: jwt
});