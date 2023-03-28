import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function History() {
  const watcheddetails=useSelector(state=>state.history.watchedCardDetails)
  return (
    <div class="flex flex-col mt-5">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-xl dark:text-black">History section</h1>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">Action</th>
              <th scope="col" class="px-6 py-4">video name</th>
              <th scope="col" class="px-6 py-4">Time and date</th>
            </tr>
          </thead>
          <tbody>
          {
        watcheddetails.map((watcheddetail)=>{
          return <><tr class="border-b dark:border-neutral-500"><td class="whitespace-nowrap px-6 py-4 font-medium">{watcheddetail.actionOf}</td>
          <td class="whitespace-nowrap px-6 py-4 font-medium">{watcheddetail.name}</td>
          <td class="whitespace-nowrap px-6 py-4 font-medium">{watcheddetail.timeOfPlaying}</td>
          </tr>
          </>
        })
      }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
//     <div>
//       <h3>History section</h3>
//       <table class="table-auto">
//   <thead>
//     <tr>
//       <th>Action</th>
//       <th>Video name</th>
//       <th>Time and date</th>
//     </tr>
//   </thead>
//   <tbody>
//   {
//         watcheddetails.map((watcheddetail)=>{
//           return <><tr>{watcheddetail.actionOf}<td></td>
//           <td>{watcheddetail.name}</td>
//           <td>{watcheddetail.timeOfPlaying}</td>
//           </tr>
//           </>
//         })
//       }
//   </tbody>
// </table>
     
        
//     </div>
  )
}

export default History