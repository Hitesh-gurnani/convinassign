import {configureStore} from '@reduxjs/toolkit'
import cardSlice from './cardSlice'
import categoriesSlice from './categoriesSlice'
import historySlice from './historySlice'

const store=configureStore({
    reducer:{
        category:categoriesSlice,
        card:cardSlice,
        history:historySlice
    }
})

export default store