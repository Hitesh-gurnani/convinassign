import {createSlice} from '@reduxjs/toolkit'

const historySlice=createSlice({
    name:'historySlice',
    initialState:{
        watchedCardDetails:[
            {
                name: "",
                actionOf:"",
                videoLink:'',
                timeOfPlaying:''
            }
        ]
    },
    reducers:{
        addHistory:(state,action)=>{
            state.watchedCardDetails = [...state.watchedCardDetails,action.payload];
        }
    }
})

export default historySlice.reducer
export const{addHistory} =historySlice.actions