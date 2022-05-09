const INITIAL_STATE = {
    
}

function UpdateReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE': {
            return{
                ...state,
                article: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default UpdateReducer;