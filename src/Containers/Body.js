import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Body.css'


const Body = ({name}) => {
    const [image,setImage]=useState([]);
    const [selectedImageInfo,setSelectedImageInfo]=useState();

    useEffect(() => {
     async function imagecall (){
        try {
            const res=await axios.get("https://api.unsplash.com/photos/random",{
                params:{count:20},
                headers:{Authorization:"Client-ID sOW1BJwdQjwI-sTVYp1X2lGE_f89jELBxeCLxOnsJAw"}
            })
            setImage(res.data)
            // console.log(res.data)
            
        } catch (error) {
            console.error(error);
        }
      }
      

      async function imagecallBySearch (){
        try {
            const res=await axios.get("https://api.unsplash.com/search/photos",{
                params:{query:name},
                headers:{Authorization:"Client-ID sOW1BJwdQjwI-sTVYp1X2lGE_f89jELBxeCLxOnsJAw"}
            })
            setImage(res.data.results)
            // console.log(res)
            
        } catch (error) {
            console.error(error);
        }
      }
      
      if(!name){
          imagecall()
      }else{
          imagecallBySearch()
      }
      
    }, [name])
    

  return (
    <>
    {/* preview large */}
    {selectedImageInfo && (
        <div className="preview" onClick={() => setSelectedImageInfo(null)}>
          <img src={selectedImageInfo.urls.regular} alt="Preview" />
          
        </div>
      )}
    <div className='imagebox'>
        {
            image.map((ele)=>{
                return(

                    <img key={ele.id} src={ele.urls.small} alt='Image not found'
                    onClick={()=> setSelectedImageInfo(ele)} />
                )
                
            })
        }
    </div>
    </>
  )
}

export default Body