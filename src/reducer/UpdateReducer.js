const INITIAL_STATE = {
    listeArticles : []
}

function UpdateReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE': {
            return{
                ...state,
                listeArticles: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default UpdateReducer;