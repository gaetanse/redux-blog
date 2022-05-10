const INITIAL_STATE = {
    listeArticles : [],
    nosArticles: []
}

function UpdateReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATEJSON': {
            console.log(action.payload)
            return{
                ...state,
                listeArticles: [...state.listeArticles, action.payload]
            }
        }
        case 'UPDATEPERSO': {
            console.log(action.payload)
            return{
                ...state,
                nosArticles: [...state.nosArticles, action.payload]
            }
        }
        default: return state
    }
}

export default UpdateReducer