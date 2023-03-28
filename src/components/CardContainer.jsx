import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/cardSlice';
import { closeMenu } from '../utils/cardSlice';
import { v4 as uuidv4 } from "uuid";
import { addCard } from '../utils/categoriesSlice';
import { useForm, Controller } from "react-hook-form";
import Cards from './Cards';
function CardContainer() {
    const [videos,setvideos]=useState([])
    const [cardsdata,setcardsdata]=useState([])
    const isMenuOpen=useSelector(store=>store.card.isMenuOpen)
    const selectedCategory=useSelector(store=>store.category.selectedCategory)
    const carddata=useSelector(store=>store.category.Cards)
    const categoryList=useSelector(store=>store.category)
    const dispatch=useDispatch();
    const [formDta,setformDta]=useState({id: uuidv4(),
    category: "",
    name: "",
    videoLink:''})
    useEffect(()=>{
        getvideos();
    },[carddata])
    const getvideos =async ()=>{
      // console.log(selectedCategory,carddata)
    setcardsdata(carddata)
  }
  const setvisibility=()=>{
    dispatch(toggleMenu())
  }
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    console.log(name,value)
    setformDta({...formDta, [name]: value})
}

  const handleSubmit = (e) =>{
    e.preventDefault()
    //myarr.indexOf("turtles") > -1
    console.log(categoryList)
    if(formDta.category && categoryList.categories.indexOf(formDta.category)>-1)
    console.log(dispatch(addCard(formDta),closeMenu()))
    else
    {
      alert('Category does not exist')
    }
    // dispatch(closeMenu())
  console.log(formDta)
  }
  return (
    <div className=''>
       <button onClick={()=>setvisibility()} class="inline-flex items-center justify-center w-10 h-10 ml-2 mt-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </button>
        {
            isMenuOpen && <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
    
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Card
                  </h3>
                 
                </div>
               
                <div className="relative p-6 flex-auto">
                <div>
                  <form>
                  <div><input class="mt-5 border border-solid border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="category" name="category"  placeholder='category' onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
                 <div> <input class="mt-5 border border-solid border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="category" name="name" placeholder='name' onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
                  <div><input class="mt-5 border border-solid border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="category" name="videoLink" placeholder='videolink' onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Add card
                  </button>
            </form>
            
                
  
        </div>
                </div>
           
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>dispatch(closeMenu())}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        }
        <div className='flex flex-wrap'>
        {
          cardsdata.map((card)=>{
            if(card.category==selectedCategory)
            return <Cards props={card}></Cards>
          })
            
            // cardsdata.map((card)=>{
            //     if(card.category==selectedCategory)
            //     return <Cards props={card}></Cards>
            // })
        }
        </div>
       
        
    </div>
  )
}

export default CardContainer