import {configureStore} from '@reduxjs/toolkit'
import UpdateReducer from './../reducer/UpdateReducer'

const store = configureStore({reducer: UpdateReducer})

export default store
