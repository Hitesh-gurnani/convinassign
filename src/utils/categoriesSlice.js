import {createSlice} from '@reduxjs/toolkit'

const categorySlice=createSlice({
    name:'categorySlice',
    initialState:{
        categories:["Entertainment","Educational"],
        selectedCategory:"Entertainment",
        isEditModalOpen:true,
        Cards: [
            {
              id: 1,
              category: "Entertainment",
              name: "Ent1",
              videoLink:'BV2yLZecR70'
            },
            {
                id: 2,
                category: "Educational",
                name: "Edu1",
                videoLink:'JrTzZeyczqE'
            },
            {
                id: 3,
                category: "Entertainment",
                name: "Ent2",
                videoLink:'DXS9qSC7KSM'
            },
            {
                id: 4,
                category: "Educational",
                name: "Edu2",
                videoLink:'Np7d6wTLeaA'
            },
            {
                id: 5,
                category: "Entertainment",
                name: "Ent3",
                videoLink:'dykkISWZORQ'
            },
            
          ],
          Card: {
            id: 5,
            category: "",
            name: "",
            videoLink:''
          },
    },
    reducers:{
        addCategory:(state,action)=>{
            state.categories.push(action.payload)
        },
        getCategories:(state)=>{
            return this.categories
        },
        clearCard: (state) => {
            state.Card = {
                category: "",
                name: "",
                videoLink:''
            };
          },
        selectedCategory:(state,action)=>{
            state.selectedCategory=action.payload
        },
        addCard: (state, action) => {
            state.Cards = [...state.Cards,action.payload];
          },
        editCard:(state,action)=>{
            state.Cards = state.Cards.map((el) =>
            el.id == action.payload.id ? action.payload : el
        );
        },
        editModalClose:(state)=>{
            state.isEditModalOpen=false;
        },
        deleteCard: (state, action) => {
            state.Cards = state.Cards.filter((el) => el.id != action.payload);
          },
    }
})

export default categorySlice.reducer
export const{addCategory,getCategories,selectedCategory,addCard,editCard,deleteCard,editModalClose} =categorySlice.actions