import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { selectedCategory } from '../utils/categoriesSlice';
import store from './../utils/store';
import { addCategory,getCategories } from '../utils/categoriesSlice';
function Categories() {
    const dispatch=useDispatch()
    const [addCategoryModal,setaddCategoryModal]=useState(false)
    const [categoryName,setcategoryName]=useState("")
    const categoryList=useSelector(store=>store.category)
    useEffect(()=>{
        // console.log(categoryList.categories)
    })
    const handleCategorySelection = (category) =>{

    }
  return (
    <div>
        <div className='p-5 shadow-lg w-48'>
        <div className='flex justify-between'>
        <h1 className='font-bold'>Buckets</h1>
            <img className='w-4 h-4 cursor-pointer' src="https://www.svgrepo.com/show/2825/add-symbol.svg" alt="" onClick={()=>setaddCategoryModal(!addCategoryModal)} /></div>
        <ul className='flex flex-col justify-center'>
            {
                categoryList.categories.map((category)=>{
                    return <button onClick={()=>{dispatch(selectedCategory(category))}}> <br /> {category}</button> 
                })
            }
        </ul>
        {
            addCategoryModal && 
            <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
    
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Bucket
                  </h3>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div>
            <input type="text" id="first_name" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Bucket name" onChange={(e)=>setcategoryName(e.target.value)} required/>
        </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setaddCategoryModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {dispatch(addCategory(categoryName));setaddCategoryModal(false)}}
                  >
                    Add Bucket
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        }
    </div>
    </div>
  )
}

export default Categories