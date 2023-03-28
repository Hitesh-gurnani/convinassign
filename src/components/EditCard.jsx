import React,{useState} from 'react'
import { editCard, editModalClose } from '../utils/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/cardSlice';
function EditCard({cardid,cardvideoLink}) {
    const dispatch=useDispatch()
    const modalstate=useSelector(store=>store.category.isEditModalOpen)
    const [formDta,setformDta]=useState({id: cardid,
        category: "",
        name: "",
        videoLink:cardvideoLink})
    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        console.log(name,value)
        setformDta({...formDta, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(dispatch(editCard(formDta)))
        // dispatch(closeMenu())
      console.log(formDta)
      }
  return (
    <div>
      {
        modalstate && <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
       
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Edit card
              </h3>
             
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
            <form>
              <div><input class="mt-5 border border-solid border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="category" name="category"  placeholder='category' onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
             <div> <input class="mt-5 border border-solid border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="category" name="name" placeholder='name' onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
          
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Edit card
              </button>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={()=>dispatch(editModalClose())}
              >
                Close
              </button>
              
            </div>
            </div>
              </form>
            </div>
        
            
          </div>
        </div>
      </div>
      }
        
    </div>
  )
}

export default EditCard