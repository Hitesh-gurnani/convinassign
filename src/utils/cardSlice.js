import {createSlice} from '@reduxjs/toolkit'

const cardSlice=createSlice({
    name:'cardSlice',
    initialState:{
        isModalopen:false,
        Card: [
            {
              id: 1,
              category: "Entertainment",
              name: "Ent1",
              videoLink:'video1'
            },
            {
                id: 2,
                category: "Educational",
                name: "Edu1",
                videoLink:'video2'
            },
            {
                id: 3,
                category: "Entertainment",
                name: "Ent2",
                videoLink:'video3'
            },
            {
                id: 4,
                category: "Educational",
                name: "Edu2",
                videoLink:'video4'
            },
            {
                id: 5,
                category: "Entertainment",
                name: "Ent3",
                videoLink:'video5'
            },
          ],
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})

export default cardSlice.reducer
export const{toggleMenu,closeMenu} =cardSlice.actions