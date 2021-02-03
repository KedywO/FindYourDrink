export const showSearchbarReducer = (
    state = {
        showSearchbar : false,
        fromSearchBtn : false
    },
    {type}) => {
    switch (type){
        case 'SHOW':
            return {
                ...state,
                showSearchbar: true
            };
        case 'HIDE':
            return {
                ...state,
                showSearchbar: false
            };
        case 'FROM_SEARCH':
            return {
                ...state,
                fromSearchBtn: true
            }
        case 'NOT_FROM_SEARCH':
            return {
                ...state,
                fromSearchBtn: false
            }
        default:
            return state;
    }
};

export const showSearchbarAction = () => ({
    type: 'SHOW'
});

export const fromSearchBtnAction = () => ({
    type: 'FROM_SEARCH'
});

export const notFromSearchBtnAction = () => ({
    type: 'NOT_FROM_SEARCH'
});

export const hideSearchbarAction = () => ({
    type: 'HIDE'
});