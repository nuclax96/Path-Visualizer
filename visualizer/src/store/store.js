import {configureStore} from '@reduxjs/toolkit'
import visualizerReducer from './visualizerSlice'


export const store = configureStore({
    reducer:{
        visualizer:visualizerReducer
    }
})