import React,{useState} from 'react'
import './profile card.css'
function Card(){
    function Handclick(){
        alert("Aryan")
   
        
        
       }
   // alert("Aryan")
   
    const [name,setName]= useState("Aryan Shirani");
    const [job,setJob]= useState("UI/UX Designer");
    const [about,setAbout]= useState("loren ipsum dolor sit amet, consectetur adipising elit. Ut elit tellus lutus nec ullamcorper mattis palvinus depibus leo");
    const [first,setFirst]= useState("click me");
    const [second,setSecond]= useState("see more ");
    const [third,setThird]= useState("click here");
    return(
        <div className='card'>
            <div calssName='upper-container'>
                <div className='image-container'>

                
                 
                    
                  
                
                </div>
            </div>
            <div className="lower-container">
                < img src="https://th.bing.com/th/id/OIP.3B7Qe_AGdPt7rxOYfyeopQHaHw?pid=ImgDet&rs=1" alt='' height="200px" width="200px" borderRadius="400px"/>
                <h4>{ job }</h4>
                <h2>{ name }</h2>
                <p>{ about }</p>
                <button className='clickbtn' onClick={Handclick}>first</button>
                <button className='clickbtn' onClick={Handclick}>second</button>
                <button className='clickbtn' onClick={Handclick}>third</button>
               

                </div>
         
          

        </div>
    )
}
export default Card