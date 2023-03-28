import React,{useState,useEffect,useRef} from 'react'
import Parser from 'html-react-parser';
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import EditCard from './EditCard';
import { deleteCard } from '../utils/categoriesSlice';
import { useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import 'react-html5video/dist/styles.css';
import './Iframe.css'
import { addHistory } from '../utils/historySlice';
function Cards({props}) {
    // console.log(props)
    const dispatch=useDispatch()
    const [flag,setflag]=useState(false)
    const [VideoLink,setVideoLink]=useState("")
    const [time,settime]=useState("")
   
    const handledelete = ()=>{
        dispatch(deleteCard(props.id))
    }
    // const timeOfPlaying= () =>{
    //   var today = new Date();
    //   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //   var dateTime = date+' '+time;
    //   return dateTime
    // }
    const handleplay = ()=>{
      console.log('played',props.name,"Played",props.videoLink)
      var currentdate = new Date(); 
      var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/" 
      + currentdate.getFullYear() + " @ "  
      + currentdate.getHours() + ":"  
      + currentdate.getMinutes() + ":" 
      + currentdate.getSeconds();
      if(props.name && props.videoLink)
      {
        dispatch(addHistory({name:props.name,
          actionOf:"Played at",
          videoLink:props.videoLink,
          timeOfPlaying:datetime}))
      }
      
    }
    const handlepause = () =>{
      console.log('paused')
      var currentdate = new Date(); 
      var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/" 
      + currentdate.getFullYear() + " @ "  
      + currentdate.getHours() + ":"  
      + currentdate.getMinutes() + ":" 
      + currentdate.getSeconds();
      if(props.name && props.videoLink)
      {
        dispatch(addHistory({name:props.name,
          actionOf:"Paused at",
          videoLink:props.videoLink,
          timeOfPlaying:datetime}))
      }
    }
    
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };
  return (
    <div className='flex'>
        <div className='p-2 m-2 w-72 shadow-lg'>
        <ul>
            <li className='font-bold py-2 flex flex-wrap flex-col'><li>{props.name}</li>
            <br /> 
            <YouTube videoId={props.videoLink} opts={opts} onPlay={()=>handleplay(props.name,"Play",props.videoLink)} onPause={handlepause} />
            {/* <iframe id="myframe" width="250" height="250" src={props.videoLink}
            title="YouTube video player" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;web-share" 
            ></iframe> */}
        <div>
 {/* <Video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}  onCanPlayThrough={()=>{console.log('video play')}}>
  <source src={props.videoLink} type="video/webm"/>
 </Video> */}
        </div>
        </li>
            
            <div className='flex items-end cursor-pointer'>
            <AiFillEdit className='mr-8' onClick={()=>setflag(!flag)}/>
            {
                flag && <EditCard cardid={props.id} videoLink={props.videoLink}/>
            }
            <AiFillDelete onClick={()=>handledelete()}/>
            </div>
        </ul>
    </div>
    </div>
  )
}

export default Cards